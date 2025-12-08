import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
// We might keep other components or phase them out for consistency
// For the renovation, we focus on the core high-impact sections first.

function App() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-purple-500/30">
      <Hero />
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
