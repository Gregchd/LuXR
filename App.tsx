
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
