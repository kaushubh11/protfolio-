import React from 'react';
import { Award } from 'lucide-react';
import { DATA } from '../data';
import SectionContainer from './SectionContainer';

const Certifications = () => (
    <SectionContainer id="certs" title="Certified Knowledge" icon={Award}>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            {DATA.CERTIFICATIONS.map((cert, index) => {
                const Icon = cert.icon;
                return (
                    <div key={index} className="cert-card p-6 bg-zinc-900/70 rounded-xl border-2 border-neon-purple/30 shadow-lg shadow-purple-500/10 transition duration-500 hover:border-neon-purple transform hover:shadow-neon-lg">
                        <div className="flex items-center mb-3">
                            <Icon size={32} className="text-neon-purple mr-4 neon-text-purple" />
                            <div>
                                <h3 className="text-xl font-bold text-white font-orbitron">{cert.title}</h3>
                                <p className="text-sm text-gray-400 font-inter">{cert.issuer}</p>
                            </div>
                        </div>
                        <p className="text-sm text-neon-aqua font-orbitron">Issued: {cert.year}</p>
                    </div>
                );
            })}
        </div>
    </SectionContainer>
);

export default Certifications;
