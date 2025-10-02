import React from 'react';
import type { SummaryData } from '../types';

interface SummaryCardProps {
    title: string;
    steps: number;
    pushups: number;
    pullups: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, steps, pushups, pullups }) => (
    <div className="bg-comic-cream p-6 rounded-xl border-4 border-comic-dark shadow-[8px_8px_0px_#2C2A29]">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-4 text-comic-green tracking-wider">{title}</h2>
        <div className="space-y-3 font-semibold text-lg">
            <div className="flex justify-between items-baseline">
                <span>Schritte:</span>
                <span className="font-bold text-2xl">{steps.toLocaleString('de-DE')}</span>
            </div>
            <div className="flex justify-between items-baseline">
                <span>Liegestütze:</span>
                <span className="font-bold text-2xl">{pushups.toLocaleString('de-DE')}</span>
            </div>
            <div className="flex justify-between items-baseline">
                <span>Klimmzüge:</span>
                <span className="font-bold text-2xl">{pullups.toLocaleString('de-DE')}</span>
            </div>
        </div>
    </div>
);

interface SummaryDashboardProps {
    summary: SummaryData;
}

export const SummaryDashboard: React.FC<SummaryDashboardProps> = ({ summary }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-8">
            <SummaryCard title="Diese Woche" {...summary.weekly} />
            <SummaryCard title="Insgesamt" {...summary.total} />
        </div>
    );
};