
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { DailyEntry, Achievement, AchievementId } from './types';
import { ACHIEVEMENTS, PASSWORD } from './constants';
import { useLocalStorage } from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard';
import Logbook from './components/Logbook';
import { AuthModal, EntryFormModal } from './components/Modals';
import AchievementToast from './components/AchievementToast';
import { getAIMotivation } from './services/geminiService';
import { PlusCircle } from 'lucide-react';

const App: React.FC = () => {
    const [entries, setEntries] = useLocalStorage<DailyEntry[]>('motionvation-entries', []);
    const [achievements, setAchievements] = useLocalStorage<Achievement[]>('motionvation-achievements', ACHIEVEMENTS);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!sessionStorage.getItem('motionvation-auth'));
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingEntry, setEditingEntry] = useState<DailyEntry | null>(null);
    const [newlyUnlocked, setNewlyUnlocked] = useState<Achievement[]>([]);
    const [aiMotivation, setAiMotivation] = useState<string>("Auf geht's! Jeder Schritt ist ein Sieg!");
    const [isLoadingAi, setIsLoadingAi] = useState(false);

    const checkAchievements = useCallback(() => {
        const unlocked: Achievement[] = [];
        const updatedAchievements = achievements.map(ach => {
            if (ach.unlocked) return ach;

            let isUnlocked = false;
            const totalSteps = entries.reduce((sum, e) => sum + e.steps, 0);
            const totalPushups = entries.reduce((sum, e) => sum + e.pushups, 0);

            switch (ach.id) {
                case AchievementId.SEVEN_DAY_STREAK:
                    // This is a simplified check. A real implementation would be more robust.
                    if (entries.length >= 7) isUnlocked = true;
                    break;
                case AchievementId.STEPS_200K:
                    if (totalSteps >= 200000) isUnlocked = true;
                    break;
                case AchievementId.PUSHUPS_1000:
                    if (totalPushups >= 1000) isUnlocked = true;
                    break;
                 case AchievementId.FIRST_ENTRY:
                    if (entries.length > 0) isUnlocked = true;
                    break;
            }

            if (isUnlocked) {
                const newAch = { ...ach, unlocked: true, unlockedAt: new Date().toISOString() };
                unlocked.push(newAch);
                return newAch;
            }
            return ach;
        });

        if (unlocked.length > 0) {
            setAchievements(updatedAchievements);
            setNewlyUnlocked(prev => [...prev, ...unlocked]);
        }
    }, [entries, achievements, setAchievements]);
    
    useEffect(() => {
        checkAchievements();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entries]);

    const handleOpenForm = (entry: DailyEntry | null = null) => {
        if (!isAuthenticated) {
            setIsAuthModalOpen(true);
        } else {
            setEditingEntry(entry);
            setIsFormModalOpen(true);
        }
    };

    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
        sessionStorage.setItem('motionvation-auth', 'true');
        setIsAuthModalOpen(false);
        setIsFormModalOpen(true);
    };

    const fetchMotivation = async (entry: DailyEntry) => {
        setIsLoadingAi(true);
        try {
            const motivation = await getAIMotivation(entry);
            setAiMotivation(motivation);
        } catch (error) {
            console.error("Failed to get AI motivation:", error);
            setAiMotivation("Du machst das super! Geh weiter an deine Grenzen!");
        } finally {
            setIsLoadingAi(false);
        }
    };

    const handleSaveEntry = (entry: DailyEntry) => {
        if (editingEntry) {
            setEntries(entries.map(e => e.id === entry.id ? entry : e));
        } else {
            setEntries([...entries, entry]);
        }
        fetchMotivation(entry);
        setEditingEntry(null);
        setIsFormModalOpen(false);
    };

    const handleDeleteEntry = (id: string) => {
        if (window.confirm("Bist du sicher, dass du diese Mission löschen möchtest?")) {
            setEntries(entries.filter(e => e.id !== id));
        }
    };

    const handleToastClosed = (id: string) => {
        setNewlyUnlocked(prev => prev.filter(ach => ach.id !== id));
    };

    return (
        <div className="min-h-screen bg-comic-cream text-comic-dark p-4 md:p-8">
            <div className="container mx-auto max-w-6xl">
                <header className="text-center mb-8">
                    <h1 className="font-bangers text-6xl md:text-8xl text-comic-dark tracking-wider" style={{ WebkitTextStroke: '2px #FFD800', textShadow: '4px 4px 0 #000' }}>
                        Motionvation Quest
                    </h1>
                    <p className="text-xl -mt-2">Jeder Schritt lädt deinen Akku auf!</p>
                </header>

                <main className="space-y-12">
                    <Dashboard entries={entries} achievements={achievements} aiMotivation={aiMotivation} isLoadingAi={isLoadingAi} />
                    <Logbook entries={entries} onEdit={handleOpenForm} onDelete={handleDeleteEntry} isAuthenticated={isAuthenticated} />
                </main>

                <button
                    onClick={() => handleOpenForm()}
                    className="fixed bottom-8 right-8 bg-comic-yellow text-comic-dark p-4 rounded-full border-4 border-comic-dark shadow-comic hover:scale-110 hover:rotate-12 transition-transform duration-200"
                    aria-label="Neue Mission hinzufügen"
                >
                    <PlusCircle size={32} strokeWidth={2.5} />
                </button>

                {isAuthModalOpen && (
                    <AuthModal
                        onClose={() => setIsAuthModalOpen(false)}
                        onSuccess={handleAuthSuccess}
                        password={PASSWORD}
                    />
                )}

                {isFormModalOpen && (
                    <EntryFormModal
                        onClose={() => {
                            setIsFormModalOpen(false);
                            setEditingEntry(null);
                        }}
                        onSave={handleSaveEntry}
                        entry={editingEntry}
                    />
                )}

                <div className="fixed top-5 right-5 z-50 space-y-4">
                    {newlyUnlocked.map(ach => (
                        <AchievementToast key={ach.id} achievement={ach} onClose={() => handleToastClosed(ach.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;