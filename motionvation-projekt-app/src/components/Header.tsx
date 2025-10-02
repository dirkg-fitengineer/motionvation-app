import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="text-center py-8">
            <div className="relative inline-block">
                <div className="absolute -top-8 -left-12 text-comic-yellow animate-pulse">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0L61.226 29.286L90.451 38.774L70.711 59.549L76.545 89.226L50 75L23.455 89.226L29.289 59.549L9.549 38.774L38.774 29.286L50 0Z" stroke="#2C2A29" strokeWidth="4"/>
                    </svg>
                </div>
                <h1 className="font-display text-6xl sm:text-8xl text-comic-yellow text-center drop-shadow-[4px_4px_0_rgba(0,0,0,0.75)] tracking-wider">
                    MOTIONvation
                </h1>
            </div>
            <p className="font-display text-2xl sm:text-3xl text-comic-cream mt-2 tracking-wide">
                Jeder Schritt lädt deinen Akku auf
            </p>
        </header>
    );
};