import React, { useState, useEffect, useRef } from 'react';

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        const typingInterval = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText(prev => prev + text.charAt(indexRef.current));
                indexRef.current++;
            } else {
                clearInterval(typingInterval);
                const cursorInterval = setInterval(() => {
                    setCursorVisible(prev => !prev);
                }, 500);
                return () => clearInterval(cursorInterval);
            }
        }, 70);

        return () => clearInterval(typingInterval);
    }, [text]);

    return (
        <h3 className="text-3xl sm:text-4xl font-semibold text-neon-purple mb-6 min-h-[4rem] font-orbitron">
            {displayedText}
            <span className={`typing-cursor ${cursorVisible ? 'visible' : ''} neon-text-purple`}>|</span>
        </h3>
    );
};

export default TypingText;
