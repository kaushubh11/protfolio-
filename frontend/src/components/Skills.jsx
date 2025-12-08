import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, CheckCircle } from 'lucide-react';

const SkillBar = ({ name, level }) => {
    // Level is 1-5
    return (
        <div className="flex items-center justify-between mb-3 group">
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors w-32 truncate">
                {name}
            </span>
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className={`w-4 h-8 rounded-sm transition-all duration-300 ${i < level
                            ? 'bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                            : 'bg-zinc-800/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

const SkillCategory = ({ title, icon: Icon, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-500 group"
        >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-zinc-800/50">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">{title}</h3>
            </div>

            <div className="space-y-1">
                {skills.map((skill, i) => (
                    <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming & Web",
            icon: Layout,
            skills: [
                { name: "JavaScript", level: 3 },
                { name: "HTML & CSS", level: 3 },
                { name: "Java", level: 3 },
                { name: "Python", level: 3 },
                { name: "React", level: 2 }
            ]
        },
        {
            title: "Analysis & Tooling",
            icon: Database,
            skills: [
                { name: "Data Analysis", level: 3 },
                { name: "Technical Literacy", level: 5 },
                { name: "Research", level: 4 },
                { name: "Multitasking", level: 3 }
            ]
        },
        {
            title: "Languages",
            icon: Terminal,
            skills: [
                { name: "English (Native)", level: 5 },
                { name: "Hindi (Native)", level: 5 },
                { name: "Nepali (Native)", level: 5 }
            ]
        },
        {
            title: "Core Competencies",
            icon: Cpu,
            skills: [
                { name: "Learning Agility", level: 4 },
                { name: "Communication", level: 4 },
                { name: "Sales (Intern)", level: 3 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Proficiency</span>
                    </h2>
                    <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        A transparent overview of my technical capabilities.
                        Each bar represents a milestone in my journey of continuous learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} {...category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
