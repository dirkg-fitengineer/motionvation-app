
import React from 'react';
import { DailyEntry, Achievement } from '../types';
import { Footprints, Dumbbell, MoveUp, Award } from 'lucide-react';

interface DashboardProps {
    entries: DailyEntry[];
    achievements: Achievement[];
    aiMotivation: string;
    isLoadingAi: boolean;
}

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, color: string }> = ({ title, value, icon, color }) => (
    <div className={`p-4 bg-comic-cream border-4 border-comic-dark shadow-comic-sm flex flex-col items-center justify-center text-center ${color}`}>
        <div className="mb-2">{icon}</div>
        <p className="font-bangers text-4xl tracking-wide">{value}</p>
        <h3 className="text-lg font-bold uppercase">{title}</h3>
    </div>
);

const AICoach: React.FC<{ motivation: string, isLoading: boolean }> = ({ motivation, isLoading }) => (
    <div className="relative p-6 bg-comic-yellow border-4 border-comic-dark shadow-comic">
        <div className="absolute -top-6 left-6 bg-comic-yellow px-4 border-4 border-comic-dark">
            <h3 className="font-bangers text-3xl">Coach K.O.</h3>
        </div>
        <div className="mt-4 text-xl font-semibold text-center h-20 flex items-center justify-center">
            {isLoading ? (
                <div className="animate-pulse">Denke mir was Heldenhaftes aus...</div>
            ) : (
                <p>"{motivation}"</p>
            )}
        </div>
    </div>
);

const AchievementsShowcase: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    const unlocked = achievements.filter(a => a.unlocked).slice(-4);

    return (
        <div className="p-6 bg-comic-blue text-comic-cream border-4 border-comic-dark shadow-comic">
             <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8"/>
                <h3 className="font-bangers text-3xl tracking-wide">Halle der Helden</h3>
            </div>
            {unlocked.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {unlocked.map(ach => (
                        <div key={ach.id} title={ach.description} className="flex flex-col items-center text-center p-2 bg-white/20 rounded">
                           <div className="text-comic-yellow">{ach.icon}</div>
                            <p className="text-xs font-bold mt-1">{ach.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                 <p className="text-center font-semibold">Deine heldenhaften Taten werden hier angezeigt! Starte eine Mission, um dein erstes Abzeichen freizuschalten.</p>
            )}
        </div>
    );
}

const Dashboard: React.FC<DashboardProps> = ({ entries, achievements, aiMotivation, isLoadingAi }) => {
    const totalSteps = entries.reduce((sum, e) => sum + e.steps, 0);
    const totalPushups = entries.reduce((sum, e) => sum + e.pushups, 0);
    const totalPullups = entries.reduce((sum, e) => sum + e.pullups, 0);

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <StatCard title="Schritte Gesamt" value={totalSteps.toLocaleString('de-DE')} icon={<Footprints size={40}/>} color="text-comic-blue" />
                <StatCard title="Liegestütze Gesamt" value={totalPushups.toLocaleString('de-DE')} icon={<Dumbbell size={40}/>} color="text-comic-red" />
                <StatCard title="Klimmzüge Gesamt" value={totalPullups.toLocaleString('de-DE')} icon={<MoveUp size={40}/>} color="text-comic-green" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AICoach motivation={aiMotivation} isLoading={isLoadingAi} />
                <AchievementsShowcase achievements={achievements} />
            </div>
        </section>
    );
};

export default Dashboard;