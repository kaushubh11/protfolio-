import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-colors group"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-primary/50 transition-colors">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-full hover:text-white hover:border-zinc-700 transition-all cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: Layout,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
        },
        {
            title: "Backend",
            icon: Database,
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Firebase"]
        },
        {
            title: "DevOps & Tools",
            icon: Terminal,
            skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Vercel"]
        },
        {
            title: "Core Concepts",
            icon: Cpu,
            skills: ["Data Structures", "Algorithms", "System Design", "OOP", "REST API", "GraphQL"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical <span className="text-primary">Arsenal</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life. Always learning, always evolving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} {...category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
