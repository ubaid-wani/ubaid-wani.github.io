import React from 'react';
import { Navbar } from './components/Navbar';
import { GrainOverlay } from './components/GrainOverlay';
import { Hero } from './sections/Hero';
import { Impact } from './sections/Impact';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-hidden">
      {/* Film Grain */}
      <GrainOverlay />

      {/* Navbar */}
      <Navbar />

      {/* Page */}
      <main>
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
