import React, { useRef, useState } from 'react';
import { Rocket } from 'lucide-react';
import { DATA } from '../data';
import ThreeDBg from './ThreeDBg';
import CyberStickman from './CyberStickman';
import TypingText from './TypingText';

const Hero = ({ animationState }) => {
    const heroRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const isAnimated = animationState !== 'idle';
    const tagline = DATA.PERSONAL.TITLE;

    const handleMouseMove = (e) => {
        const heroElement = heroRef.current;
        if (!heroElement || isAnimated) return;

        const centerX = heroElement.offsetWidth / 2;
        const centerY = heroElement.offsetHeight / 2;
        const moveX = (e.clientX - heroElement.getBoundingClientRect().left - centerX) / 35;
        const moveY = (e.clientY - heroElement.getBoundingClientRect().top - centerY) / 35;
        setCoords({ x: moveX, y: moveY });

        const blobX = e.clientX - heroElement.getBoundingClientRect().left;
        const blobY = e.clientY - heroElement.getBoundingClientRect().top;

        heroElement.style.setProperty('--mouse-x', `${blobX}px`);
        heroElement.style.setProperty('--mouse-y', `${blobY}px`);
    };

    const rocketClass =
        animationState === 'takeoff' ? 'rocket-takeoff' :
            animationState === 'landing' ? 'rocket-landing' :
                '';

    const rocketStyle = {
        transform: animationState === 'idle' ? `translate(${coords.x}px, ${coords.y}px) rotate(-15deg)` : undefined,
        transition: 'transform 0.1s ease-out',
    };

    return (
        <div
            id="hero"
            ref={heroRef}
            className="min-h-screen relative flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ease-in-out overflow-hidden hero-blob-container"
            onMouseMove={handleMouseMove}
        >
            <ThreeDBg animationState={animationState} />
            <CyberStickman />

            {/* Dynamic Background Blob Element (Neon Aqua) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <div className="hero-blob" style={{ background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)' }} />
            </div>

            {/* Content */}
            <div className="z-20 flex flex-col items-center max-w-2xl mx-auto">
                <Rocket
                    size={80}
                    className={`text-neon-purple mb-6 transition-all duration-300 transform ${rocketClass} neon-text-purple`}
                    style={rocketStyle}
                />
                <p className="text-xl text-purple-400 mb-3 font-orbitron tracking-widest">DIGITAL LAUNCHPAD</p>
                <h2 className="text-7xl sm:text-8xl font-extrabold text-white mb-4 leading-tight font-orbitron">
                    {DATA.PERSONAL.NAME}
                </h2>

                <TypingText text={tagline} />

                <p className="text-lg text-gray-400 max-w-xl mb-10">
                    {DATA.PERSONAL.BIO}
                </p>
                <div className="flex space-x-4 mb-10">
                    <a href="#projects" className="px-8 py-3 text-lg font-medium text-black bg-neon-aqua rounded-lg shadow-neon shadow-aqua-500/50 hover:bg-aqua-400 transition duration-300 transform hover:scale-105 font-orbitron">
                        Explore Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
