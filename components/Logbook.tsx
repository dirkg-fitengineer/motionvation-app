
import React from 'react';
import { DailyEntry } from '../types';
import { Calendar, Edit, Trash2 } from 'lucide-react';

interface LogbookProps {
    entries: DailyEntry[];
    onEdit: (entry: DailyEntry) => void;
    onDelete: (id: string) => void;
    isAuthenticated: boolean;
}

const DailyEntryCard: React.FC<{ entry: DailyEntry; onEdit: (entry: DailyEntry) => void; onDelete: (id: string) => void; isAuthenticated: boolean; }> = ({ entry, onEdit, onDelete, isAuthenticated }) => {
    const { id, date, steps, pushups, pullups, comment } = entry;
    const formattedDate = new Date(date).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="bg-comic-cream border-4 border-comic-dark p-4 shadow-comic transition-transform duration-150 hover:-translate-y-1 hover:-translate-x-1">
            <div className="flex justify-between items-start border-b-2 border-dashed border-comic-dark pb-2 mb-3">
                <h3 className="font-bangers text-3xl tracking-wide">{formattedDate}</h3>
                {isAuthenticated && (
                    <div className="flex gap-2">
                        <button onClick={() => onEdit(entry)} className="p-1.5 hover:text-comic-blue transition-colors" aria-label="Bearbeiten"><Edit /></button>
                        <button onClick={() => onDelete(id)} className="p-1.5 hover:text-comic-red transition-colors group" aria-label="Löschen">
                            <span className="group-hover:hidden"><Trash2 /></span>
                            <span className="hidden group-hover:block font-bangers text-xl">POW!</span>
                        </button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                    <p className="font-bangers text-4xl">{steps.toLocaleString('de-DE')}</p>
                    <p className="font-bold text-sm">SCHRITTE</p>
                </div>
                <div>
                    <p className="font-bangers text-4xl">{pushups.toLocaleString('de-DE')}</p>
                    <p className="font-bold text-sm">LIEGESTÜTZE</p>
                </div>
                 <div>
                    <p className="font-bangers text-4xl">{pullups.toLocaleString('de-DE')}</p>
                    <p className="font-bold text-sm">KLIMMZÜGE</p>
                </div>
            </div>
            {comment && <p className="bg-white/50 p-2 italic">"{comment}"</p>}
        </div>
    );
};


const Logbook: React.FC<LogbookProps> = ({ entries, onEdit, onDelete, isAuthenticated }) => {
    const sortedEntries = [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section>
            <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-10 h-10"/>
                <h2 className="font-bangers text-5xl tracking-wider">Quest-Chronik</h2>
            </div>
            {sortedEntries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedEntries.map(entry => (
                        <DailyEntryCard key={entry.id} entry={entry} onEdit={onEdit} onDelete={onDelete} isAuthenticated={isAuthenticated} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-6 bg-comic-blue text-comic-cream border-4 border-comic-dark shadow-comic halftone">
                    <h3 className="font-bangers text-4xl mb-2">Das Abenteuer wartet!</h3>
                    <p className="text-lg">Deine heldenhafte Reise hat gerade erst begonnen. Klicke auf den '+' Button, um deine erste tägliche Mission einzutragen und deine Legende zu starten!</p>
                </div>
            )}
        </section>
    );
};

export default Logbook;