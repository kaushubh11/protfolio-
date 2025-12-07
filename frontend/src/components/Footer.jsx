import React from 'react';
import { DATA } from '../data';

const Footer = () => (
    <footer className="bg-black border-t border-zinc-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-3">
                <a href={DATA.PERSONAL.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-aqua transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22V19c0-1.74-1.21-2.9-3-2.9S9 16.29 9 17.06v-3.75c0-1.89-1.2-2.5-3.03-2.88.24-.76.77-1.5 1.5-2.02.58-.4.73-.82.68-1.57.17-.4.27-1.3-.06-2.58-1.07 0-1.76.72-2.38 1.48C3.8 9.3 3 10.96 3 12.82c0 2.2 1.6 4 3.73 4.24.47.05.9.15 1.25.27.76.26 1.47 1.05 1.7 1.78.23.73.4 1.5.4 1.76V22" /><path d="M9 22V19c0-1.74-1.21-2.9-3-2.9S9 16.29 9 17.06v-3.75c0-1.89-1.2-2.5-3.03-2.88.24-.76.77-1.5 1.5-2.02.58-.4.73-.82.68-1.57.17-.4.27-1.3-.06-2.58-1.07 0-1.76.72-2.38 1.48C3.8 9.3 3 10.96 3 12.82c0 2.2 1.6 4 3.73 4.24.47.05.9.15 1.25.27.76.26 1.47 1.05 1.7 1.78.23.73.4 1.5.4 1.76V22Z" fill="white" opacity="0" /><path d="M12 22v-3.75c0-1.89-1.2-2.5-3.03-2.88.24-.76.77-1.5 1.5-2.02.58-.4.73-.82.68-1.57.17-.4.27-1.3-.06-2.58-1.07 0-1.76.72-2.38 1.48C3.8 9.3 3 10.96 3 12.82c0 2.2 1.6 4 3.73 4.24.47.05.9.15 1.25.27.76.26 1.47 1.05 1.7 1.78.23.73.4 1.5.4 1.76V22" fill="white" opacity="0" /><path d="M15 22V19c0-1.74-1.21-2.9-3-2.9S9 16.29 9 17.06v-3.75c0-1.89-1.2-2.5-3.03-2.88.24-.76.77-1.5 1.5-2.02.58-.4.73-.82.68-1.57.17-.4.27-1.3-.06-2.58-1.07 0-1.76.72-2.38 1.48C3.8 9.3 3 10.96 3 12.82c0 2.2 1.6 4 3.73 4.24.47.05.9.15 1.25.27.76.26 1.47 1.05 1.7 1.78.23.73.4 1.5.4 1.76V22" fill="white" opacity="0" /></svg></a>
                <a href={DATA.PERSONAL.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-aqua transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
            </div>
            <p className="text-sm font-inter">&copy; {new Date().getFullYear()} {DATA.PERSONAL.NAME}. Cyberpunk Interface v2.1</p>
        </div>
    </footer>
);

export default Footer;
