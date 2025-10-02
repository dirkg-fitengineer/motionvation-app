import React, { useState, useEffect } from 'react';
import type { DailyEntry, SummaryData } from './types';
import { calculateSummaries } from './utils/calculations';
import { Header } from './components/Header';
import { SummaryDashboard } from './components/SummaryDashboard';
import { EntryForm } from './components/EntryForm';
import { Logbook } from './components/Logbook';
import { Footer } from './components/Footer';
import { PlusCircle, LogOut } from 'lucide-react';

const initialData: DailyEntry[] = [
    {
        date: "2024-07-20",
        steps: 24000,
        pushups: 320,
        pullups: 75,
        optionalExerciseName: "Squats",
        optionalExerciseReps: 100,
        comment: "Felt great today, really pushed the limits on the squats. The weather was perfect for a long walk."
    },
    {
        date: "2024-07-19",
        steps: 22500,
        pushups: 310,
        pullups: 70,
        comment: "A bit tired, but managed to hit the goals. Consistency is key!"
    },
    {
        date: "2024-07-18",
        steps: 25100,
        pushups: 330,
        pullups: 80,
        optionalExerciseName: "Lunges",
        optionalExerciseReps: 80,
        comment: "Amazing energy levels! Added some lunges to mix things up."
    },
];


const App: React.FC = () => {
    const [entries, setEntries] = useState<DailyEntry[]>(() => {
        try {
            const savedEntries = localStorage.getItem('motionvationEntries');
            return savedEntries ? JSON.parse(savedEntries) : initialData;
        } catch (error) {
            console.error("Could not parse saved entries:", error);
            return initialData;
        }
    });

    const [summary, setSummary] = useState<SummaryData>(calculateSummaries(entries));
    const [showForm, setShowForm] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => !!sessionStorage.getItem('motionvation_auth'));
    const [editingEntry, setEditingEntry] = useState<DailyEntry | null>(null);


    useEffect(() => {
        localStorage.setItem('motionvationEntries', JSON.stringify(entries));
        setSummary(calculateSummaries(entries));
    }, [entries]);

    const handleSaveEntry = (entry: DailyEntry) => {
        let newEntries;
        if (editingEntry) {
            newEntries = entries.map(e => e.date === editingEntry.date ? entry : e);
        } else {
            newEntries = [entry, ...entries];
        }
        
        setEntries(newEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        
        setShowForm(false);
        setEditingEntry(null);
    };

    const handleEdit = (entry: DailyEntry) => {
        setEditingEntry(entry);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (date: string) => {
        if (window.confirm("Bist du sicher, dass du diesen Eintrag löschen möchtest?")) {
            setEntries(entries.filter(e => e.date !== date));
        }
    };

    const handleToggleFormClick = () => {
        if (!isAuthenticated) {
            const password = prompt("Bitte Passwort eingeben, um fortzufahren:");
            if (password === 'motion2024') { 
                sessionStorage.setItem('motionvation_auth', 'true');
                setIsAuthenticated(true);
                setEditingEntry(null);
                setShowForm(true);
            } else if (password !== null) {
                alert("Falsches Passwort.");
            }
            return;
        }
        
        if (showForm) {
            // If form is open, clicking again should close it and cancel any edit
            setShowForm(false);
            setEditingEntry(null);
        } else {
            // If form is closed, open it for a new entry
            setEditingEntry(null);
            setShowForm(true);
        }
    };
    
    const handleLogout = () => {
        sessionStorage.removeItem('motionvation_auth');
        setIsAuthenticated(false);
        setShowForm(false);
        setEditingEntry(null);
    };

    return (
        <div className="bg-comic-blue min-h-screen font-sans text-comic-dark">
            <div className="container mx-auto p-4 max-w-2xl">
                <Header />
                <SummaryDashboard summary={summary} />

                <div className="text-center my-6">
                   <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={handleToggleFormClick}
                            className="bg-comic-yellow text-comic-dark font-display text-2xl px-6 py-2 rounded-lg border-4 border-comic-dark shadow-[4px_4px_0px_#2C2A29] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transform transition-all duration-150 flex items-center justify-center gap-2"
                            aria-haspopup={!isAuthenticated}
                            aria-expanded={showForm}
                        >
                            <PlusCircle className="w-6 h-6" />
                            {showForm ? 'Eingabe abbrechen' : 'Neuer Eintrag'}
                        </button>
                        {isAuthenticated && (
                             <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white p-3 rounded-full border-4 border-comic-dark shadow-[4px_4px_0px_#2C2A29] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transform transition-all duration-150"
                                aria-label="Logout"
                             >
                                <LogOut className="w-6 h-6" />
                             </button>
                        )}
                    </div>
                </div>

                {showForm && isAuthenticated && (
                    <div className="mb-8 animate-fade-in">
                        <EntryForm 
                            onSaveEntry={handleSaveEntry} 
                            entryToEdit={editingEntry}
                            onCancel={() => {setShowForm(false); setEditingEntry(null);}}
                        />
                    </div>
                )}
                
                <Logbook 
                    entries={entries}
                    isAuthenticated={isAuthenticated}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <Footer />
            </div>
        </div>
    );
};

export default App;