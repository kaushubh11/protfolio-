import React from 'react';
import { Code } from 'lucide-react';
import { DATA } from '../data';
import SectionContainer from './SectionContainer';

const Projects = () => (
    <SectionContainer id="projects" title="Showcase & Prototypes" icon={Code}>
        <p className="text-gray-300 mb-10 text-xl text-center font-inter">
            Prototypes showcasing core skills in Java, React, and Python as part of my computing studies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            {DATA.PROJECTS.map((project) => (
                <div key={project.id} className="bg-zinc-900/70 p-6 rounded-xl shadow-lg shadow-aqua-500/10 transition duration-300 hover:shadow-neon transform hover:scale-[1.03] border border-neon-aqua/20 project-card">
                    <h3 className="text-2xl font-bold text-neon-purple mb-3 font-orbitron">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm font-inter">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 text-xs font-medium bg-neon-aqua/20 text-neon-aqua rounded-full font-inter">
                                {t}
                            </span>
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-white font-semibold transition flex items-center font-orbitron">
                        Launch Link &rarr;
                    </a>
                </div>
            ))}
        </div>
    </SectionContainer>
);

export default Projects;
