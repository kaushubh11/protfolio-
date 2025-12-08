import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Code2, Layers } from 'lucide-react';

const TiltCard = ({ title, description, tech, className, featured = false, links, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group h-full cursor-pointer ${className}`}
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 z-20"
            >
                <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-fit mb-6 shadow-lg shadow-black/20">
                    <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold text-white mb-2 shadow-black/50 drop-shadow-lg ${featured ? 'text-4xl' : 'text-2xl'}`}>
                    {title}
                </h3>
                <p className="text-zinc-200/90 text-sm md:text-base font-medium max-w-[90%] drop-shadow-md">
                    {description}
                </p>

                <div className="absolute bottom-0 left-0 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-bold text-black bg-white rounded-full shadow-lg">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links Layer */}
            <div
                style={{ transform: "translateZ(100px)" }}
                className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                {links?.github && (
                    <a href={links.github} target="_blank" rel="noreferrer" className="p-3 bg-black/80 text-white rounded-full hover:bg-black hover:scale-110 transition-all border border-zinc-700">
                        <Github size={20} />
                    </a>
                )}
                {links?.demo && (
                    <a href={links.demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 hover:scale-110 transition-all">
                        <ArrowUpRight size={20} />
                    </a>
                )}
            </div>

            {/* Card Background & Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-3xl border border-zinc-700/50 shadow-2xl">
                {/* Decorative Gradient Blob */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] rounded-3xl opacity-50" />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Secure Java Framework",
            description: "Enterprise security middleware. Shielding applications with next-gen JWT & RBAC protocols.",
            tech: ["Java", "Spring", "Redis"],
            featured: true,
            className: "md:col-span-2 md:row-span-2 min-h-[500px]",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Task Master Pro",
            description: "Real-time collaboration suite. Where teams sync at the speed of thought.",
            tech: ["React", "Socket.io"],
            featured: false,
            className: "md:col-span-1 md:row-span-1 min-h-[350px]",
            links: { github: "#", demo: "#" }

        },
        {
            title: "Data Analytics Engine",
            description: "Transforming chaos into clarity. High-performance Python data processing.",
            tech: ["Python", "Pandas"],
            featured: false,
            className: "md:col-span-1 md:row-span-1 min-h-[350px]",
            links: { github: "#" }
        },
    ];

    return (
        <section className="py-32 px-4 relative" id="projects">
            <div className="max-w-7xl mx-auto perspective-[2000px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Works</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl">
                        A showcase of technical depth and creative engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <TiltCard key={i} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
