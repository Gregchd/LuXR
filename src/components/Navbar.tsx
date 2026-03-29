
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import logoSvg from '../assets/logo.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Clientes', id: 'clientes' },
    { name: 'Soluciones', id: 'soluciones' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'Portafolio', id: 'casos' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const activeSection = useActiveSection(navLinks.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-light py-3 soft-shadow' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={logoSvg} alt="LuXR Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2
                ${activeSection === link.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-900'}
              `}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-light border-b border-slate-200"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-lg font-bold transition-colors ${activeSection === link.id ? 'text-indigo-600' : 'text-slate-800'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
