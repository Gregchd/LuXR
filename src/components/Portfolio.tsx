
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, X, Search, Layers, BarChart3, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [showAll, setShowAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 👇 CONFIGURA TUS IMÁGENES Y VIDEOS AQUÍ - Agrega las rutas en el array 'media'
  // IMPORTANTE: Debes importar los assets arriba primero, luego usarlos aquí
  const allCases = [
    { 
      title: 'VR Manager', 
      category: 'Sistema de Control Centralizado',
      platform: 'Realidad Virtual',
      media: [
        yuyai1,
        yuyai2,
        yuyai3,
        yuyai4,
      ],
      challenge: 'Empresas necesitaban una forma de gestionar y monitorear múltiples experiencias de realidad virtual simultáneas a gran escala sin perder control centralizado.',
      solution: 'Plataforma de gestión y monitoreo remoto con control maestro para inicio, pausa y control centralizado de múltiples visores VR. Incluye telemetría en vivo de batería, conexión y progreso del usuario en tiempo real, más capa social con feedback integrado.',
      impact: 'Control total sobre experiencias VR masivas con monitoreo en tiempo real y conectividad social integrada.',
      tech: ['VR Networking', 'Real-time Monitoring', 'Multi-user Sync']
    },
    { 
      title: 'XR Museum', 
      category: 'Preservación Cultural Inmersiva',
      platform: 'Realidad Extendida',
      media: [
        museum1,
        museum2,
        museum3,
      ],
      challenge: 'Preservar y exhibir el patrimonio arqueológico de la cultura Mochica de forma accesible y atractiva para el público masivo.',
      solution: 'Experiencia inmersiva itinerante que digitaliza y exhibe artefactos con reconstrucción digital de alta precisión mediante fotogrametría. Presentado en el MALI (Museo de Arte de Lima) y Hay Festival.',
      impact: 'Impacto comprobado en cientos de usuarios en ferias culturales a nivel nacional, democratizando el acceso al patrimonio cultural.',
      tech: ['Photogrammetry', 'Mobile XR', 'Cultural Heritage']
    },
    { 
      title: 'OCT MR', 
      category: 'Gemelo Digital Médico',
      platform: 'Realidad Mixta',
      media: [
        oct1,
        oct2,
        oct3,
        oct4,
        oct5,
        oct6,
      ],
      challenge: 'Capacitar personal técnico en el uso de Tomógrafos de Coherencia Óptica sin riesgo de daño a equipos médicos costosos.',
      solution: 'Gemelo digital interactivo en Realidad Mixta con desglose mecánico interactivo y simulación educativa. Permite visualización de principios de funcionamiento del hardware en entorno seguro.',
      impact: 'Ganador de la Medalla de Oro 2025 en la Feria de Inventos de Ginebra. Entrenamiento sin riesgo de daño al equipo real.',
      tech: ['Mixed Reality', 'Digital Twin', 'Medical Simulation']
    },
    { 
      title: 'Horizon VR', 
      category: 'Entrenamiento Inmersivo',
      platform: 'Realidad Virtual',
      media: [
        horizon2,
        horizon1,
        horizon3,
      ],
      challenge: 'Formar técnicos en procedimientos operativos estándar de equipos médicos complejos sin acceso constante al hardware real.',
      solution: 'Entorno de entrenamiento inmersivo en VR standalone con interacción háptica para simulación de procedimientos. Incluye exploración interna del tomógrafo mediante capas de visualización VR.',
      impact: 'Formación técnica segura y efectiva con simulación de procedimientos operativos estándar en entorno controlado.',
      tech: ['Oculus/Meta Quest', 'Procedural Training', 'Industrial VR']
    },
    { 
      title: 'ChaskaSat', 
      category: 'Dashboard Satelital',
      platform: 'Web & Mobile',
      media: [
        cansat1,
        cansat2,
        cansat3,
      ],
      challenge: 'Monitorear y diagnosticar el estado de nanosatélites en tiempo real con datos técnicos complejos de forma accesible.',
      solution: 'Aplicación móvil/web con panel de control y tarjetas informativas para sensores de presión, temperatura y posición. Incluye monitoreo de salud de sistemas críticos y centro de ayuda integrado para interpretación de datos técnicos.',
      impact: 'Diagnóstico continuo del estado satelital con visualización de datos en tiempo real y soporte UX integrado.',
      tech: ['Real-time Data', 'Telemetry Dashboard', 'Mobile App']
    }
  ];

  const visibleCases = showAll ? allCases : allCases.slice(0, 4);

  // Helper function to check if media is a video
  const isVideo = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image when opening
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="casos" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 italic">Portafolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Proyectos de Impacto</h3>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all soft-shadow flex items-center gap-3 group"
          >
            {showAll ? 'Ver Menos' : 'Ver Todo'} 
            {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />}
          </button>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence>
            {visibleCases.map((c, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={c.title}
                whileHover={{ y: -8 }}
                onClick={() => handleProjectClick(c)}
                className="group relative rounded-[3rem] overflow-hidden bg-white soft-shadow cursor-pointer border border-slate-100"
              >
                <div className="aspect-[16/12] overflow-hidden relative">
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border ${
                      c.platform === 'Realidad Virtual' ? 'bg-blue-500/90 text-white border-blue-400/50' :
                      c.platform === 'Realidad Mixta' ? 'bg-purple-500/90 text-white border-purple-400/50' :
                      c.platform === 'Realidad Extendida' ? 'bg-indigo-500/90 text-white border-indigo-400/50' :
                      'bg-[#18d185]/90 text-white border-[#18d185]/50'
                    }`}>
                      {c.platform}
                    </span>
                  </div>
                  {isVideo(c.media[0]) ? (
                    <video src={c.media[0]} className="w-full h-full object-cover" muted loop playsInline />
                  ) : (
                    <img src={c.media[0]} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  )}
                </div>
                <div className="p-10 flex justify-between items-center bg-white">
                  <div>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 block">{c.category}</span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{c.title}</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#18d185] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all soft-shadow">
                <X size={20} />
              </button>
              
              {/* Carousel de imágenes y videos */}
              <div className="md:w-3/5 h-96 md:h-auto overflow-hidden relative group bg-slate-100">
                {isVideo(selectedProject.media[currentImageIndex]) ? (
                  <video 
                    src={selectedProject.media[currentImageIndex]} 
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img 
                    src={selectedProject.media[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`} 
                    className="w-full h-full object-contain" 
                  />
                )}
                
                {/* Controles del carousel - solo si hay más de 1 media */}
                {selectedProject.media.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Indicadores de media */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.media.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="md:w-2/5 p-8 md:p-12 overflow-y-auto">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4 block italic">Estudio de Caso LuXR</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight leading-none">{selectedProject.title}</h3>
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600"><Search size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">El Desafío</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600"><Layers size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">La Solución</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600"><BarChart3 size={18} /></div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Impacto</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t: string) => (
                        <span key={t} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  {/* <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-3 hover:from-[#18d185] hover:to-blue-600">
                    Solicitar Demo de Proyecto <ExternalLink size={14} />
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
