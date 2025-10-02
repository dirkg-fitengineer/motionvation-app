import React, { useState, useEffect } from 'react';
import type { DailyEntry } from '../types';

interface EntryFormProps {
    onSaveEntry: (entry: DailyEntry) => void;
    entryToEdit: DailyEntry | null;
    onCancel: () => void;
}

export const EntryForm: React.FC<EntryFormProps> = ({ onSaveEntry, entryToEdit, onCancel }) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [steps, setSteps] = useState('');
    const [pushups, setPushups] = useState('');
    const [pullups, setPullups] = useState('');
    const [optionalExerciseName, setOptionalExerciseName] = useState('');
    const [optionalExerciseReps, setOptionalExerciseReps] = useState('');
    const [comment, setComment] = useState('');
    
    const isEditing = !!entryToEdit;

    useEffect(() => {
        if (entryToEdit) {
            setDate(entryToEdit.date);
            setSteps(entryToEdit.steps.toString());
            setPushups(entryToEdit.pushups.toString());
            setPullups(entryToEdit.pullups.toString());
            setOptionalExerciseName(entryToEdit.optionalExerciseName || '');
            setOptionalExerciseReps(entryToEdit.optionalExerciseReps?.toString() || '');
            setComment(entryToEdit.comment || '');
        } else {
            // Reset form for new entry
            setDate(new Date().toISOString().split('T')[0]);
            setSteps('');
            setPushups('');
            setPullups('');
            setOptionalExerciseName('');
            setOptionalExerciseReps('');
            setComment('');
        }
    }, [entryToEdit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !steps || !pushups || !pullups) {
            alert('Bitte fülle die erforderlichen Felder aus.');
            return;
        }

        const newEntry: DailyEntry = {
            date,
            steps: parseInt(steps, 10),
            pushups: parseInt(pushups, 10),
            pullups: parseInt(pullups, 10),
            optionalExerciseName: optionalExerciseName || undefined,
            optionalExerciseReps: optionalExerciseReps ? parseInt(optionalExerciseReps, 10) : undefined,
            comment: comment || undefined,
        };

        onSaveEntry(newEntry);
    };
    
    const inputClasses = "w-full p-3 rounded-lg border-4 border-comic-dark bg-white focus:outline-none focus:ring-4 focus:ring-comic-yellow transition-shadow disabled:bg-gray-200 disabled:cursor-not-allowed";
    const labelClasses = "block font-bold text-lg mb-1";

    return (
        <div className="bg-comic-cream p-6 rounded-xl border-4 border-comic-dark shadow-[8px_8px_0px_#2C2A29] mb-8">
            <h2 className="font-display text-3xl sm:text-4xl text-center mb-4 text-comic-green tracking-wider">
                {isEditing ? 'Eintrag bearbeiten' : 'Neuer Eintrag'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="date" className={labelClasses}>Datum</label>
                    <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} className={inputClasses} required disabled={isEditing} />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="steps" className={labelClasses}>Schritte</label>
                        <input type="number" id="steps" value={steps} onChange={e => setSteps(e.target.value)} className={inputClasses} placeholder="z.B. 20000" required/>
                    </div>
                     <div>
                        <label htmlFor="pushups" className={labelClasses}>Liegestütze</label>
                        <input type="number" id="pushups" value={pushups} onChange={e => setPushups(e.target.value)} className={inputClasses} placeholder="z.B. 320" required/>
                    </div>
                     <div>
                        <label htmlFor="pullups" className={labelClasses}>Klimmzüge</label>
                        <input type="number" id="pullups" value={pullups} onChange={e => setPullups(e.target.value)} className={inputClasses} placeholder="z.B. 75" required/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="opt-exercise" className={labelClasses}>Weitere Übung (Optional)</label>
                        <input type="text" id="opt-exercise" value={optionalExerciseName} onChange={e => setOptionalExerciseName(e.target.value)} className={inputClasses} placeholder="z.B. Squats"/>
                    </div>
                     <div>
                        <label htmlFor="opt-reps" className={labelClasses}>Wiederholungen</label>
                        <input type="number" id="opt-reps" value={optionalExerciseReps} onChange={e => setOptionalExerciseReps(e.target.value)} className={inputClasses} placeholder="z.B. 100"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className={labelClasses}>Tages Kommentar (Optional)</label>
                    <textarea id="comment" value={comment} onChange={e => setComment(e.target.value)} className={inputClasses} rows={3} placeholder="Wie war der Tag?"></textarea>
                </div>
                 <button type="submit" className="w-full bg-comic-green text-white font-display text-2xl px-6 py-2 rounded-lg border-4 border-comic-dark shadow-[4px_4px_0px_#2C2A29] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transform transition-all duration-150">
                    {isEditing ? 'Aktualisieren' : 'Speichern'}
                </button>
            </form>
        </div>
    );
};