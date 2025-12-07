import React, { useState, useEffect } from 'react';
import { Home, User, Code, Award, Gamepad2, Mail } from 'lucide-react';

const NavDock = ({ setRocketAnimationState, scrollY }) => {
    const sections = [
        { name: 'Home', id: 'hero', icon: Home },
        { name: 'About', id: 'about', icon: User },
        { name: 'Projects', id: 'projects', icon: Code },
        { name: 'Certifications', id: 'certs', icon: Award },
        { name: 'Playground', id: 'playground', icon: Gamepad2 },
        { name: 'Contact', id: 'contact', icon: Mail },
    ];

    const [activeId, setActiveId] = useState('hero');
    const [isHovering, setIsHovering] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const isHome = id === 'hero';
            const wasHome = activeId === 'hero';

            if (!wasHome && isHome) {
                setTimeout(() => { setRocketAnimationState('landing'); setTimeout(() => { setRocketAnimationState('idle'); }, 800); }, 10);
            } else if (wasHome && !isHome) {
                setRocketAnimationState('takeoff');
                setTimeout(() => { setRocketAnimationState('idle'); }, 500);
            }

            // Adjust scroll position if top bar is active to prevent content overlap
            const offset = document.body.classList.contains('scrolled-down-body') ? 64 : 0;
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        sections.forEach(s => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    // Determine state: true if scrolled past the hero section threshold
    const isTopBar = scrollY > 100;

    const dockWidthClass = isHovering || isTopBar ? 'w-full lg:w-auto' : 'w-16';
    const orientationClass = isTopBar ? 'flex-row rounded-none px-4 py-2 h-16' : 'flex-col space-y-3 p-2 rounded-full h-auto';

    // Calculate vertical offset relative to the scroll for the vertical dock
    const scrollFactor = 0.5; // Half the speed of scroll
    const offset = scrollY * scrollFactor;

    // Apply specific positioning and style based on state
    const positionClass = isTopBar
        ? 'top-0 left-0 right-0' // Fixed top bar
        : 'left-4 top-1/2 hidden lg:flex'; // Vertical dock (hidden on mobile)

    const verticalStyle = isTopBar
        ? {}
        : { transform: `translateY(calc(-50% + ${offset}px))` }; // Dynamic vertical movement

    return (
        <div
            style={verticalStyle}
            className={`fixed z-50 transition-all duration-300 ease-out 
                        ${positionClass} 
                        ${orientationClass} 
                        bg-purple-900/10 border-2 border-neon-purple/50 backdrop-blur-md shadow-lg shadow-purple-500/20 
                        ${dockWidthClass} ${isTopBar ? 'lg:flex' : 'hidden lg:flex'}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`flex ${isTopBar ? 'space-x-6 mx-auto' : 'flex-col space-y-3'}`}>
                {sections.map((item) => {
                    const isActive = activeId === item.id;
                    const IconComponent = item.icon;
                    const shouldShowLabel = isHovering || isTopBar;

                    return (
                        <div key={item.id} className="relative group">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center p-3 rounded-full transition-colors duration-300 transform hover:scale-[1.05]
                                    ${isTopBar ? 'px-4' : 'w-full'}
                                    ${isActive
                                        ? 'bg-neon-purple text-black shadow-neon shadow-purple-500/50'
                                        : 'text-neon-aqua hover:bg-purple-900/30 hover:text-white'
                                    }`}
                            >
                                <IconComponent size={20} className={isHovering ? 'mr-3' : (isTopBar ? 'mr-2' : '')} />
                                <span className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 font-orbitron 
                                    ${shouldShowLabel ? (isTopBar ? 'opacity-100 max-w-xs' : 'opacity-100 max-w-xs') : 'opacity-0 max-w-0'}`}
                                >
                                    {item.name}
                                </span>
                                {/* Small tooltip when collapsed, only necessary for vertical dock (not top bar) */}
                                {(!isHovering && isActive && !isTopBar) && (
                                    <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-neon-aqua text-black text-sm rounded-md whitespace-nowrap pointer-events-none shadow-neon-sm shadow-aqua-500/50 font-orbitron">
                                        {item.name}
                                    </span>
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavDock;
