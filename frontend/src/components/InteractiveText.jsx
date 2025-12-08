import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const InteractiveText = ({ text, className }) => {
    const letters = Array.from(text);

    return (
        <span className={`inline-flex whitespace-nowrap overflow-hidden ${className}`}>
            {letters.map((letter, index) => (
                <Letter key={index} letter={letter} index={index} />
            ))}
        </span>
    );
};

const Letter = ({ letter, index }) => {
    const controls = useSpring(0, { stiffness: 200, damping: 10 });
    const y = useTransform(controls, [0, 1], [0, -10]);
    const scale = useTransform(controls, [0, 1], [1, 1.2]);
    const color = useTransform(controls, [0, 1], ["#a1a1aa", "#3b82f6"]); // Zinc-400 to Primary Blue

    return (
        <motion.span
            style={{ y, scale, color, display: 'inline-block' }}
            onMouseEnter={() => controls.set(1)}
            onMouseLeave={() => controls.set(0)}
            className="cursor-default font-bold transition-colors"
        >
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    );
};

export default InteractiveText;
