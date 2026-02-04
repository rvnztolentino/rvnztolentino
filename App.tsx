import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import LayoutOverlay from './components/LayoutOverlay';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-background text-white min-h-screen relative selection:bg-white selection:text-black">
      <LayoutOverlay scrollToSection={scrollToSection} />

      <Hero />
      <Portfolio scrollToSection={scrollToSection} />
      <Contact />

      {/* Simple Footer Credit */}
      <footer className="w-full pb-8 pt-8 md:pt-2 text-center text-xs text-gray-700 font-light uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Renz. All Rights Reserved.
      </footer>
    </main>
  );
}

export default App;