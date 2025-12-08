import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';
import NavDock from './components/NavDock';
import ThreeDBg from './components/ThreeDBg';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background min-h-screen text-white selection:bg-purple-500/30 relative">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeDBg animationState="idle" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
        {/* Scanning Line Effect */}
        <div className="scanline"></div>
      </div>

      <div className="relative z-10">
        <NavDock scrollY={scrollY} />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />

        {/* Simple Footer */}
        <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
          <p>© {new Date().getFullYear()} Kaushubh Chaudhary. Built with React & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
