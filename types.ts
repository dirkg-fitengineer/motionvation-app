
import React from 'react';

export interface DailyEntry {
    id: string;
    date: string; // ISO string
    steps: number;
    pushups: number;
    pullups: number;
    comment?: string;
}

export enum AchievementId {
    FIRST_ENTRY = 'FIRST_ENTRY',
    SEVEN_DAY_STREAK = 'SEVEN_DAY_STREAK',
    STEPS_200K = 'STEPS_200K',
    PUSHUPS_1000 = 'PUSHUPS_1000',
}

export interface Achievement {
    id: AchievementId;
    name: string;
    description: string;
    unlocked: boolean;
    unlockedAt?: string; // ISO string
    icon: React.ReactNode;
}
