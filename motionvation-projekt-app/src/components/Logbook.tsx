import React from 'react';
import type { DailyEntry } from '../types';
import { DailyEntryCard } from './DailyEntryCard';

interface LogbookProps {
    entries: DailyEntry[];
    isAuthenticated: boolean;
    onEdit: (entry: DailyEntry) => void;
    onDelete: (date: string) => void;
}

export const Logbook: React.FC<LogbookProps> = ({ entries, isAuthenticated, onEdit, onDelete }) => {
    return (
        <div>
            <h2 className="font-display text-5xl sm:text-6xl text-comic-yellow text-center drop-shadow-[3px_3px_0_rgba(0,0,0,0.75)] tracking-wider my-8">
                Logbuch
            </h2>
            <div className="space-y-8">
                {entries.length > 0 ? (
                    entries.map(entry => 
                        <DailyEntryCard 
                            key={entry.date} 
                            entry={entry} 
                            isAuthenticated={isAuthenticated}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    )
                ) : (
                    <div className="bg-comic-cream p-6 rounded-xl border-4 border-comic-dark text-center">
                        <p className="font-bold text-xl">Noch keine Einträge vorhanden.</p>
                        <p>Füge einen neuen Eintrag hinzu, um zu beginnen!</p>
                    </div>
                )}
            </div>
        </div>
    );
};