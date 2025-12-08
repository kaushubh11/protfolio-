import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const BentoCard = ({ title, description, tech, className, featured = false }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`group relative overflow-hidden bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-8 transition-all duration-300 ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                        {tech.map((t) => (
                            <span key={t} className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-full border border-zinc-700/50">
                                {t}
                            </span>
                        ))}
                    </div>
                    <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className={`font-bold text-white mb-2 ${featured ? 'text-3xl' : 'text-xl'}`}>
                    {title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Optional: Add image preview area here for later */}
            <div className={`mt-8 rounded-xl bg-zinc-950/50 border border-zinc-800/50 overflow-hidden ${featured ? 'h-64' : 'h-32'}`}>
                <div className="w-full h-full flex items-center justify-center text-zinc-700 text-sm">
                    Project Preview
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Secure Java Framework",
            description: "Enterprise-grade security layer with enhanced JWT validation and RBAC controls.",
            tech: ["Java", "Spring", "Security"],
            featured: true,
            className: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Task Master Pro",
            description: "A collaborative productivity suite built for remote teams.",
            tech: ["React", "Node.js"],
            featured: false,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Data Analytics Engine",
            description: "Python-based processing unit taking raw data to visual insights.",
            tech: ["Python", "Pandas"],
            featured: false,
            className: "md:col-span-1 md:row-span-1"
        },
    ];

    return (
        <section className="py-32 px-4 bg-background relative" id="projects">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
                    <p className="text-zinc-400 max-w-xl">
                        A collection of projects exploring the boundaries of security, performance, and user interaction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project, i) => (
                        <BentoCard key={i} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
