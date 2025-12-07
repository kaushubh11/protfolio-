import React, { useState, useEffect, useRef } from 'react';

const CyberStickman = () => {
    const [keyboardState, setKeyboardState] = useState('typing');
    const [isFloating, setIsFloating] = useState(false);
    const floatRef = useRef(null);

    useEffect(() => {
        const floatInterval = setInterval(() => {
            setIsFloating(p => !p);
        }, 3000); // Toggle floating every 3 seconds

        const typingInterval = setInterval(() => {
            setKeyboardState('typing');
            setTimeout(() => setKeyboardState('idle'), 500);
        }, 1500);

        return () => {
            clearInterval(floatInterval);
            clearInterval(typingInterval);
        };
    }, []);

    const floatClass = isFloating ? 'translate-y-1' : '-translate-y-1';
    const keyClass = keyboardState === 'typing' ? 'key-press' : '';

    return (
        <div ref={floatRef} className={`absolute bottom-0 right-0 h-40 w-40 transform transition-all duration-1000 ease-in-out ${floatClass} hidden sm:block z-20`}>
            {/* Holographic Keyboard Projection (Static SVG for structure) */}
            <svg viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-full h-full opacity-60">
                <rect x="15" y="80" width="70" height="15" rx="2" className="fill-none stroke-neon-aqua stroke-2 neon-glow-aqua-sm" />
                {/* Simulated keys */}
                {[20, 30, 40, 50, 60, 70].map(x => (
                    <rect key={x} x={x} y="83" width="8" height="9" rx="1" className={`fill-none stroke-neon-aqua ${keyClass}`} />
                ))}
                {/* Screen / Body */}
                <circle cx="50" cy="50" r="10" className="fill-purple-500/20 stroke-neon-purple stroke-2 neon-glow-purple" />
                {/* Legs */}
                <line x1="50" y1="60" x2="40" y2="78" className="stroke-neon-aqua stroke-2" />
                <line x1="50" y1="60" x2="60" y2="78" className="stroke-neon-aqua stroke-2" />
                {/* Arms - always 'typing' position */}
                <line x1="50" y1="40" x2="40" y2="80" className="stroke-neon-purple stroke-2" />
                <line x1="50" y1="40" x2="60" y2="80" className="stroke-neon-purple stroke-2" />
            </svg>
        </div>
    );
};

export default CyberStickman;
