import React, { useState, useEffect } from 'react';
import NavDock from './components/NavDock';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [rocketAnimationState, setRocketAnimationState] = useState('idle');
  const [scrollY, setScrollY] = useState(0);

  // Effect to update scroll Y and body class for padding
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Manage body padding for fixed top bar
    const bodyClassList = document.body.classList;
    if (scrollY > 100) {
      bodyClassList.add('scrolled-down-body');
    } else {
      bodyClassList.remove('scrolled-down-body');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);


  return (
    <div className="min-h-screen bg-black antialiased text-white overflow-x-hidden">

      {/* The Nav Dock Component */}
      <NavDock setRocketAnimationState={setRocketAnimationState} scrollY={scrollY} />

      <main className={scrollY > 100 ? 'lg:ml-0 transition-all' : 'lg:ml-20 transition-all'}> {/* Offset removed for top bar */}
        {/* All sections are rendered sequentially for scrollability */}
        <Hero animationState={rocketAnimationState} />
        <About />
        <Projects />
        <Certifications />
        <Playground />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
