
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
