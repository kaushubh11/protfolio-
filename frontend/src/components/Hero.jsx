import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <div id="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Spotlight Effect - Kept as local highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 animate-spotlight pointer-events-none z-0 gpu-accelerated" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm text-zinc-400 font-medium">Available for work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Building digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        experiences.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I'm Kaushubh. A full-stack engineer and interface designer.
                    I build accessible, pixel-perfect, and performant web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:email@example.com" className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
