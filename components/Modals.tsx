
import React, { useState, useEffect } from 'react';
import { DailyEntry } from '../types';
import { X } from 'lucide-react';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const ModalWrapper: React.FC<ModalProps> = ({ onClose, children, title }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40 p-4" onClick={onClose}>
        <div className="bg-comic-cream border-4 border-comic-dark shadow-comic w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center bg-comic-blue text-comic-cream p-3 border-b-4 border-comic-dark">
                <h2 className="font-bangers text-3xl tracking-wide">{title}</h2>
                <button onClick={onClose} className="p-1 hover:text-comic-yellow transition-colors">
                    <X size={28} />
                </button>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    </div>
);

// --- Auth Modal ---
interface AuthModalProps {
    onClose: () => void;
    onSuccess: () => void;
    password: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess, password }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input === password) {
            onSuccess();
        } else {
            setError('Falsches Passwort. Kein Zutritt für Schurken!');
        }
    };

    return (
        <ModalWrapper onClose={onClose} title="Helden-Identifikation">
            <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="password" className="block font-bold">Geheimes Passwort:</label>
                <input
                    id="password"
                    type="password"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="w-full p-2 border-4 border-comic-dark shadow-comic-inset focus:outline-none focus:ring-2 focus:ring-comic-yellow"
                    autoFocus
                />
                {error && <p className="text-comic-red font-bold">{error}</p>}
                <button type="submit" className="w-full bg-comic-green text-comic-cream font-bangers text-2xl p-2 border-4 border-comic-dark shadow-comic-sm hover:bg-comic-dark transition-colors">
                    Hauptquartier betreten
                </button>
            </form>
        </ModalWrapper>
    );
};

// --- Entry Form Modal ---
interface EntryFormModalProps {
    onClose: () => void;
    onSave: (entry: DailyEntry) => void;
    entry: DailyEntry | null;
}

export const EntryFormModal: React.FC<EntryFormModalProps> = ({ onClose, onSave, entry }) => {
    const [date, setDate] = useState(entry ? entry.date.split('T')[0] : new Date().toISOString().split('T')[0]);
    const [steps, setSteps] = useState(entry ? entry.steps : 0);
    const [pushups, setPushups] = useState(entry ? entry.pushups : 0);
    const [pullups, setPullups] = useState(entry ? entry.pullups : 0);
    const [comment, setComment] = useState(entry ? entry.comment ?? '' : '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEntry: DailyEntry = {
            id: entry ? entry.id : new Date().toISOString(),
            date: new Date(date).toISOString(),
            steps: Number(steps),
            pushups: Number(pushups),
            pullups: Number(pullups),
            comment,
        };
        onSave(newEntry);
    };
    
    const InputField = ({ label, type, value, onChange }: { label: string, type: string, value: any, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => (
        <div>
            <label className="block font-bold mb-1">{label}</label>
            {type === 'textarea' ? (
                 <textarea value={value} onChange={onChange} rows={3} className="w-full p-2 border-4 border-comic-dark shadow-comic-inset focus:outline-none focus:ring-2 focus:ring-comic-yellow" />
            ) : (
                <input type={type} value={value} onChange={onChange} required={type !== 'textarea'} className="w-full p-2 border-4 border-comic-dark shadow-comic-inset focus:outline-none focus:ring-2 focus:ring-comic-yellow" />
            )}
        </div>
    );

    return (
        <ModalWrapper onClose={onClose} title={entry ? "Mission bearbeiten" : "Neue tägliche Mission"}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField label="Datum" type="date" value={date} onChange={e => setDate(e.target.value)} />
                <InputField label="Schritte" type="number" value={steps} onChange={e => setSteps(Number(e.target.value))} />
                <InputField label="Liegestütze" type="number" value={pushups} onChange={e => setPushups(Number(e.target.value))} />
                <InputField label="Klimmzüge" type="number" value={pullups} onChange={e => setPullups(Number(e.target.value))} />
                <InputField label="Kommentar (Optional)" type="textarea" value={comment} onChange={e => setComment(e.target.value)} />

                <button type="submit" className="w-full bg-comic-yellow text-comic-dark font-bangers text-2xl p-2 border-4 border-comic-dark shadow-comic-sm hover:bg-comic-dark hover:text-comic-yellow transition-colors">
                    Mission speichern
                </button>
            </form>
        </ModalWrapper>
    );
};