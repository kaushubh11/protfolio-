import React from 'react';

const SectionContainer = ({ id, title, icon: Icon, children, className = '' }) => (
    <section id={id} className={`min-h-screen pt-24 pb-16 bg-void-black text-white flex flex-col items-center justify-center border-t-2 border-zinc-900 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neon-aqua mb-12 text-center flex items-center justify-center font-orbitron tracking-wider">
                {Icon && <Icon size={40} className="mr-3 neon-text-aqua" />} {title}
            </h2>
            {children}
        </div>
    </section>
);

export default SectionContainer;
