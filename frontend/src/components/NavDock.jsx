import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Cpu, GraduationCap } from 'lucide-react';

const NavDock = () => {
    const sections = [
        { name: 'Home', id: 'hero', icon: Home },
        { name: 'About', id: 'about', icon: User },
        { name: 'Skills', id: 'skills', icon: Cpu },
        { name: 'Education', id: 'education', icon: GraduationCap },
        { name: 'Projects', id: 'projects', icon: Code },
        { name: 'Contact', id: 'contact', icon: Mail },
    ];

    const [activeId, setActiveId] = useState('hero');
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Adjust scroll position to account for fixed header if needed
            const offset = 0;
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -20% 0px',
                threshold: 0.1,
            }
        );

        sections.forEach(s => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    const dockWidthClass = isHovering || isScrolled ? 'w-auto' : 'w-auto md:w-16';

    const orientationClass = isScrolled
        ? 'flex-row rounded-full px-6 py-3 top-6 scale-90 inset-x-0 mx-auto w-fit'
        : 'flex-row space-x-3 p-2 rounded-full bottom-6 left-1/2 -translate-x-1/2 md:flex-col md:space-y-3 md:space-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 md:translate-x-0';

    return (
        <div
            className={`fixed z-50 transition-all duration-300 ease-out 
                        ${orientationClass} 
                        bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md shadow-lg shadow-black/20
                        ${dockWidthClass} flex`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`flex ${isScrolled ? 'space-x-2' : 'space-x-2 md:flex-col md:space-x-0 md:space-y-3'}`}>
                {sections.map((item) => {
                    const isActive = activeId === item.id;
                    const IconComponent = item.icon;
                    const shouldShowLabel = isHovering && !isScrolled; // Show label only on hover in vertical mode

                    return (
                        <div key={item.id} className="relative group">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 transform
                                    ${isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-110'
                                        : 'text-zinc-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <IconComponent size={20} />

                                {/* Label for Vertical Mode (Side) */}
                                {shouldShowLabel && (
                                    <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs rounded-md whitespace-nowrap opacity-100 transition-opacity">
                                        {item.name}
                                    </span>
                                )}

                                {/* Label for Horizontal Mode (Tooltip) */}
                                {isScrolled && (
                                    <span className="absolute top-full mt-2 px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
