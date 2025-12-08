import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import NavDock from './components/NavDock';

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
    <main className="bg-background min-h-screen text-white selection:bg-purple-500/30">
      <NavDock scrollY={scrollY} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Simple Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Kaushubh Chaudhary. Built with React & Tailwind.</p>
      </footer>
    </main>
  );
}

export default App;
