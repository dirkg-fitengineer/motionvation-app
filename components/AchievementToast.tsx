
import React, { useEffect } from 'react';
import { Achievement } from '../types';
import { X } from 'lucide-react';

interface AchievementToastProps {
    achievement: Achievement;
    onClose: () => void;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ achievement, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="w-80 bg-comic-yellow border-4 border-comic-dark shadow-comic flex items-start p-4 animate-fade-in-down">
            <div className="text-comic-green mr-4 flex-shrink-0">{achievement.icon}</div>
            <div className="flex-grow">
                <h3 className="font-bangers text-2xl text-comic-dark">BAM! Freigeschaltet!</h3>
                <p className="font-bold text-comic-dark">{achievement.name}</p>
                <p className="text-sm text-comic-dark/80">{achievement.description}</p>
            </div>
            <button onClick={onClose} className="ml-2 text-comic-dark hover:text-comic-red">
                <X size={20} />
            </button>
        </div>
    );
};

export default AchievementToast;