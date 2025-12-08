import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationItem = ({ degree, school, year, location, description, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-8 pb-12 last:pb-0 border-l-2 border-zinc-800 last:border-transparent ml-4"
    >
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

        <div className="relative -top-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{degree}</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
                    <Calendar className="w-3 h-3" /> {year}
                </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                <GraduationCap className="w-4 h-4" />
                <span>{school}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {location}
                </span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-2xl">
                {description}
            </p>
        </div>
    </motion.div>
);

const Education = () => {
    // Placeholder Data - To be replaced with User's CV
    const educationData = [
        {
            degree: "BSc (Hons) Computing",
            school: "Islington College",
            year: "Oct 2024 – Dec 2026",
            location: "Kamalpokhari, Kathmandu",
            description: "Developing comprehensive knowledge in software engineering, data structures, and computer systems. Currently maintaining a strong academic record."
        },
        {
            degree: "Java & React Essentials",
            school: "LinkedIn Learning",
            year: "Nov 2024 – Nov 2025",
            location: "Online",
            description: "Completed rigorous courses in Java and React development, enhancing core programming skills and understanding of modern web frameworks."
        }
    ];

    return (
        <section className="py-32 px-4 relative max-w-4xl mx-auto" id="education">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Academic <span className="text-zinc-500">History</span>
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                    The foundations of my technical knowledge and intellectual growth.
                </p>
            </motion.div>

            <div className="relative">
                {educationData.map((edu, index) => (
                    <EducationItem key={index} {...edu} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;
