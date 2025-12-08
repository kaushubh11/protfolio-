import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800 backdrop-blur-md"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Avatar / Icon */}
                        <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-lg shrink-0">
                            <User className="w-12 h-12 text-primary" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                                I am <strong className="text-white">Kaushubh Chaudhary</strong>, a dedicated Computing student at Islington College (Oct 2024 – Dec 2026).
                                My journey is driven by a passion for technology and a commitment to continuous learning.
                            </p>

                            <p className="text-zinc-400 leading-relaxed mb-8">
                                With a foundation in <span className="text-primary">HTML, CSS, JavaScript, and Java</span>, I am currently expanding my expertise in React and Data Analysis.
                                Beyond coding, I pride myself on my advanced research skills, learning agility, and effective communication.
                                My recent internship at ING Skill Academy in the sales department has further honed my multitasking and professional teamwork abilities.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 rounded-full border border-zinc-800 text-sm font-medium text-zinc-300">
                                    <Briefcase className="w-4 h-4 text-purple-400" />
                                    <span>Sales Intern Experience</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 rounded-full border border-zinc-800 text-sm font-medium text-zinc-300">
                                    <Rocket className="w-4 h-4 text-green-400" />
                                    <span>Advanced Learning Agility</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
