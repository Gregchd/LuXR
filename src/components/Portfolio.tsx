
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X, Search, Layers, BarChart3, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all project assets
import yuyai1 from '../assets/yuyai1.png';
import yuyai2 from '../assets/yuyai2.png';
import yuyai3 from '../assets/yuyai3.png';
import yuyai4 from '../assets/yuyai4.png';

import museum1 from '../assets/museum1.png';
import museum2 from '../assets/museum2.png';
import museum3 from '../assets/museum3.png';

import oct1 from '../assets/oct1.png';
import oct2 from '../assets/oct2.png';
import oct3 from '../assets/oct3.png';
import oct4 from '../assets/oct4.png';
import oct5 from '../assets/oct5.mp4';
import oct6 from '../assets/oct6.mp4';

import horizon1 from '../assets/horizon1.png';
import horizon2 from '../assets/horizon2.png';
import horizon3 from '../assets/horizon3.png';

import cansat1 from '../assets/cansat1.png';
import cansat2 from '../assets/cansat2.png';
import cansat3 from '../assets/cansat3.png';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const allCases = [
    { 
      title: 'VR Manager', 
      category: 'Sistema de Control Centralizado',
      platform: 'Realidad Virtual',
      gradient: 'from-blue-600 to-indigo-600',
      media: [yuyai1, yuyai2, yuyai3, yuyai4],
      challenge: 'Empresas necesitaban una forma de gestionar y monitorear múltiples experiencias de realidad virtual simultáneas a gran escala sin perder control centralizado.',
      solution: 'Plataforma de gestión y monitoreo remoto con control maestro para inicio, pausa y control centralizado de múltiples visores VR. Incluye telemetría en vivo de batería, conexión y progreso del usuario en tiempo real, más capa social con feedback integrado.',
      impact: 'Control total sobre experiencias VR masivas con monitoreo en tiempo real y conectividad social integrada.',
      tech: ['VR Networking', 'Real-time Monitoring', 'Multi-user Sync']
    },
    { 
      title: 'XR Museum', 
      category: 'Preservación Cultural Inmersiva',
      platform: 'Realidad Extendida',
      gradient: 'from-indigo-600 to-purple-600',
      media: [museum1, museum2, museum3],
      challenge: 'Preservar y exhibir el patrimonio arqueológico de la cultura Mochica de forma accesible y atractiva para el público masivo.',
      solution: 'Experiencia inmersiva itinerante que digitaliza y exhibe artefactos con reconstrucción digital de alta precisión mediante fotogrametría. Presentado en el MALI (Museo de Arte de Lima) y Hay Festival.',
      impact: 'Impacto comprobado en cientos de usuarios en ferias culturales a nivel nacional, democratizando el acceso al patrimonio cultural.',
      tech: ['Photogrammetry', 'Mobile XR', 'Cultural Heritage']
    },
    { 
      title: 'OCT MR', 
      category: 'Gemelo Digital Médico',
      platform: 'Realidad Mixta',
      gradient: 'from-purple-600 to-pink-600',
      media: [oct1, oct2, oct3, oct4, oct5, oct6],
      challenge: 'Capacitar personal técnico en el uso de Tomógrafos de Coherencia Óptica sin riesgo de daño a equipos médicos costosos.',
      solution: 'Gemelo digital interactivo en Realidad Mixta con desglose mecánico interactivo y simulación educativa. Permite visualización de principios de funcionamiento del hardware en entorno seguro.',
      impact: 'Ganador de la Medalla de Oro 2025 en la Feria de Inventos de Ginebra. Entrenamiento sin riesgo de daño al equipo real.',
      tech: ['Mixed Reality', 'Digital Twin', 'Medical Simulation']
    },
    { 
      title: 'Horizon VR', 
      category: 'Entrenamiento Inmersivo',
      platform: 'Realidad Virtual',
      gradient: 'from-cyan-500 to-blue-600',
      media: [horizon2, horizon1, horizon3],
      challenge: 'Formar técnicos en procedimientos operativos estándar de equipos médicos complejos sin acceso constante al hardware real.',
      solution: 'Entorno de entrenamiento inmersivo en VR standalone con interacción háptica para simulación de procedimientos. Incluye exploración interna del tomógrafo mediante capas de visualización VR.',
      impact: 'Formación técnica segura y efectiva con simulación de procedimientos operativos estándar en entorno controlado.',
      tech: ['Oculus/Meta Quest', 'Procedural Training', 'Industrial VR']
    },
    { 
      title: 'ChaskaSat', 
      category: 'Dashboard Satelital',
      platform: 'Web & Mobile',
      gradient: 'from-[#18d185] to-emerald-600',
      media: [cansat1, cansat2, cansat3],
      challenge: 'Monitorear y diagnosticar el estado de nanosatélites en tiempo real con datos técnicos complejos de forma accesible.',
      solution: 'Aplicación móvil/web con panel de control y tarjetas informativas para sensores de presión, temperatura y posición. Incluye monitoreo de salud de sistemas críticos y centro de ayuda integrado para interpretación de datos técnicos.',
      impact: 'Diagnóstico continuo del estado satelital con visualización de datos en tiempo real y soporte UX integrado.',
      tech: ['Real-time Data', 'Telemetry Dashboard', 'Mobile App']
    }
  ];

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        const currentScroll = carouselRef.current.scrollLeft;
        
        // If at the end, scroll back to start
        if (currentScroll + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next item (approximately 550px per card + gap)
          carouselRef.current.scrollBy({ left: 570, behavior: 'smooth' });
        }
      }
    }, 5000); // 5 seconds

    return () => clearInterval(autoScroll);
  }, []);

  const isVideo = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === selectedProject.media.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === 0 ? selectedProject.media.length - 1 : prev - 1);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="casos" className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6"
            >
              <Sparkles className="text-indigo-400" size={14} />
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Portafolio</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Proyectos de{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Impacto
              </span>
            </motion.h3>
          </div>
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollCarousel('left')}
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollCarousel('right')}
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-12 lg:px-24 pb-10 snap-x snap-mandatory scrollbar-hide relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allCases.map((c, i) => (
          <motion.div 
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => handleProjectClick(c)}
            className="group relative flex-shrink-0 w-[85vw] md:w-[550px] cursor-pointer snap-center"
          >
            {/* Card Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${c.gradient} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
            
            {/* Card */}
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10">
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-20 group-hover:opacity-40 transition-opacity z-10`}></div>
                {isVideo(c.media[0]) ? (
                  <video src={c.media[0]} className="w-full h-full object-cover" muted loop playsInline />
                ) : (
                  <img src={c.media[0]} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                
                {/* Platform Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${c.gradient} text-white shadow-lg`}>
                    {c.platform}
                  </span>
                </div>
                
                {/* View Button */}
                <div className="absolute bottom-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-xl">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-indigo-300 transition-colors mb-2">
                  {c.title}
                </h4>
                <span className={`text-[10px] font-black uppercase tracking-widest block bg-clip-text text-transparent bg-gradient-to-r ${c.gradient}`}>
                  {c.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="w-6 md:w-12 lg:w-24 flex-shrink-0" />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="relative w-full max-w-7xl max-h-[95vh] bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <X size={20} />
              </button>
              
              {/* Media Carousel */}
              <div className="md:w-3/5 h-80 md:h-auto overflow-hidden relative group bg-slate-950">
                {isVideo(selectedProject.media[currentImageIndex]) ? (
                  <video src={selectedProject.media[currentImageIndex]} className="w-full h-full object-contain" controls autoPlay loop muted />
                ) : (
                  <img src={selectedProject.media[currentImageIndex]} alt={`${selectedProject.title} - ${currentImageIndex + 1}`} className="w-full h-full object-contain" />
                )}
                
                {selectedProject.media.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
                      <ChevronRight size={20} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.media.map((_: any, idx: number) => (
                        <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="md:w-2/5 p-8 md:p-12 overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-4 block bg-clip-text text-transparent bg-gradient-to-r ${selectedProject.gradient}`}>Estudio de Caso LuXR</span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight leading-none">{selectedProject.title}</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${selectedProject.gradient} rounded-xl flex items-center justify-center text-white`}><Search size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">El Desafío</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${selectedProject.gradient} rounded-xl flex items-center justify-center text-white`}><Layers size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">La Solución</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${selectedProject.gradient} rounded-xl flex items-center justify-center text-white`}><BarChart3 size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Impacto</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t: string) => (
                        <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white/70 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
