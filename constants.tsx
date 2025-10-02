
import React from 'react';
import { Achievement, AchievementId } from './types';
import { BookOpenCheck, Medal, Footprints, Dumbbell } from 'lucide-react';

export const PASSWORD = "held";

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: AchievementId.FIRST_ENTRY,
        name: "Quest gestartet!",
        description: "Trage deine allererste tägliche Mission ein.",
        unlocked: false,
        icon: <BookOpenCheck className="w-12 h-12" />
    },
    {
        id: AchievementId.SEVEN_DAY_STREAK,
        name: "Beständiger Held",
        description: "Schließe 7 Tage in Folge Missionen ab.",
        unlocked: false,
        icon: <Medal className="w-12 h-12" />
    },
    {
        id: AchievementId.STEPS_200K,
        name: "Club der Wanderer",
        description: "Gehe insgesamt 200.000 Schritte.",
        unlocked: false,
        icon: <Footprints className="w-12 h-12" />
    },
    {
        id: AchievementId.PUSHUPS_1000,
        name: "Liegestütz-Meister",
        description: "Mache insgesamt 1.000 Liegestütze.",
        unlocked: false,
        icon: <Dumbbell className="w-12 h-12" />
    },
];