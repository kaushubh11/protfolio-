import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import InteractiveText from './InteractiveText';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <div ref={targetRef} id="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden perspective-[1000px]">
            {/* Spotlight Effect - Kept as local highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 animate-spotlight pointer-events-none z-0 gpu-accelerated" />

            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 max-w-5xl mx-auto px-4 text-center"
            >
                <MagneticButton className="inline-block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md cursor-pointer hover:bg-zinc-800/80 transition-colors"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm text-zinc-400 font-medium group-hover:text-white">Available for work</span>
                    </motion.div>
                </MagneticButton>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    <InteractiveText text="Building digital" className="block mb-2" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block hover:scale-105 transition-transform duration-300 origin-center cursor-default">
                        experiences.
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed flex flex-col items-center justify-center gap-2"
                >
                    <p>I'm <InteractiveText text="Kaushubh Chaudhary" className="text-zinc-200 text-2xl font-bold hover:text-primary cursor-pointer" />.</p>
                    <p>A full-stack engineer and interface designer.</p>
                    <p>I build accessible, pixel-perfect, and performant web apps.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <MagneticButton>
                        <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </MagneticButton>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com" },
                            { icon: Linkedin, href: "https://linkedin.com" },
                            { icon: Mail, href: "mailto:kaushubh3@gmail.com" }
                        ].map((item, index) => (
                            <MagneticButton key={index}>
                                <a href={item.href} target="_blank" rel="noreferrer" className="block p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                                    <item.icon className="w-5 h-5" />
                                </a>
                            </MagneticButton>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
