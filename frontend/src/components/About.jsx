import React from 'react';
import { User, Code } from 'lucide-react';
import { DATA } from '../data';
import SectionContainer from './SectionContainer';

const SkillBar = ({ name, level }) => {
    const bars = [];
    for (let i = 1; i <= 4; i++) {
        const isFilled = i <= level;
        const barClass = isFilled ? 'bg-neon-purple shadow-neon-sm shadow-purple-500/70' : 'bg-zinc-700/50';
        bars.push(
            <div key={i} className={`h-2 w-1/4 rounded-full ${barClass} transition-all duration-500`}></div>
        );
    }

    return (
        <div className="flex flex-col space-y-2 p-3 bg-zinc-900/50 rounded-lg border border-neon-aqua/20 shadow-lg hover:shadow-aqua-500/20 transition duration-300 transform hover:scale-[1.02]">
            <span className="text-sm font-medium text-neon-aqua font-orbitron">{name}</span>
            <div className="flex space-x-1 h-2 w-full rounded-full bg-zinc-800/50 overflow-hidden">
                {bars}
            </div>
        </div>
    );
};

const About = () => (
    <SectionContainer id="about" title="Skill Matrix" icon={User}>
        <div className="p-8 bg-zinc-900/70 rounded-xl shadow-lg shadow-purple-500/10 border border-neon-purple/20">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed border-b border-zinc-800 pb-6 font-inter">
                {DATA.PERSONAL.BIO}
            </p>

            <h3 className="text-3xl font-semibold text-neon-aqua mt-8 mb-6 flex items-center font-orbitron">
                <Code size={24} className="mr-3 neon-text-aqua" /> Core Stack Proficiency
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DATA.SKILLS.map(skill => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>

        </div>
    </SectionContainer>
);

export default About;
