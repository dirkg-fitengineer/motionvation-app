import React from 'react';
import type { DailyEntry } from '../types';
import { Calendar, TrendingUp, Award, Zap, Pencil, Trash2 } from 'lucide-react';

interface DailyEntryCardProps {
    entry: DailyEntry;
    isAuthenticated: boolean;
    onEdit: (entry: DailyEntry) => void;
    onDelete: (date: string) => void;
}

export const DailyEntryCard: React.FC<DailyEntryCardProps> = ({ entry, isAuthenticated, onEdit, onDelete }) => {
    const formattedDate = new Date(entry.date).toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const ActionButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string, 'aria-label': string }> = ({ onClick, children, className, 'aria-label': ariaLabel }) => (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`p-2 rounded-full border-2 border-comic-dark transform transition-transform hover:scale-110 ${className}`}
        >
            {children}
        </button>
    );

    return (
        <div className="bg-comic-cream rounded-xl border-4 border-comic-dark shadow-[8px_8px_0px_#2C2A29] overflow-hidden transform hover:-translate-y-1 transition-transform duration-150">
            <div className="bg-comic-dark text-comic-cream p-4 flex items-center gap-4 relative">
                <Calendar className="w-8 h-8 text-comic-yellow flex-shrink-0"/>
                <h3 className="font-display text-2xl sm:text-3xl tracking-wider">{formattedDate}</h3>
                {isAuthenticated && (
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 flex gap-2">
                        <ActionButton onClick={() => onEdit(entry)} className="bg-comic-blue text-white" aria-label="Eintrag bearbeiten">
                           <Pencil className="w-5 h-5" />
                        </ActionButton>
                        <ActionButton onClick={() => onDelete(entry.date)} className="bg-red-500 text-white" aria-label="Eintrag löschen">
                            <Trash2 className="w-5 h-5" />
                        </ActionButton>
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6 text-center">
                    <div className="flex flex-col items-center">
                        <TrendingUp className="w-10 h-10 text-comic-blue mb-2" />
                        <span className="font-bold text-xl">Schritte</span>
                        <span className="font-display text-3xl sm:text-4xl text-comic-blue">{entry.steps.toLocaleString('de-DE')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="w-10 h-10 text-comic-green mb-2" />
                        <span className="font-bold text-xl">Liegestütze</span>
                        <span className="font-display text-3xl sm:text-4xl text-comic-green">{entry.pushups.toLocaleString('de-DE')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Zap className="w-10 h-10 text-comic-yellow mb-2 stroke-comic-dark" />
                        <span className="font-bold text-xl">Klimmzüge</span>
                        <span className="font-display text-3xl sm:text-4xl" style={{color: "#E57A00"}}>{entry.pullups.toLocaleString('de-DE')}</span>
                    </div>
                </div>

                {entry.optionalExerciseName && entry.optionalExerciseReps && (
                    <div className="text-center mb-6 bg-white/50 p-3 rounded-lg border-2 border-comic-dark border-dashed">
                        <p className="font-bold text-lg">
                           Extra: {entry.optionalExerciseReps.toLocaleString('de-DE')} {entry.optionalExerciseName}
                        </p>
                    </div>
                )}
                
                {entry.comment && (
                    <div className="mt-4">
                        <p className="italic text-gray-800 bg-white p-4 rounded-lg border-2 border-comic-dark">"{entry.comment}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};