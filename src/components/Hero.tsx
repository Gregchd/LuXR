
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-grid-light">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-40">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Cube 1 - Blue */}
        <motion.div
          className="absolute top-20 right-[10%] w-32 h-32 md:w-78 md:h-78"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* Cube faces - Mobile: 64px (w-32), Desktop: 96px (w-48) */}
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'translateZ(64px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'rotateY(90deg) translateZ(64px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'rotateY(180deg) translateZ(64px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'rotateX(90deg) translateZ(64px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl md:rounded-3xl" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}></div>
          </div>
        </motion.div>

        {/* Floating Cube 2 - Green */}
        <motion.div
          className="absolute bottom-32 left-[15%] w-24 h-24 md:w-46 md:h-46"
          animate={{
            y: [0, 40, 0],
            rotateX: [0, -360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* Cube faces - Mobile: 48px (w-24), Desktop: 72px (w-36) */}
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'translateZ(48px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'rotateX(90deg) translateZ(48px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#18d185]/20 to-[#18d185]/30 backdrop-blur-sm border border-[#18d185]/30 rounded-2xl" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }}></div>
          </div>
        </motion.div>

        {/* Floating Cube 3 - Indigo */}
        <motion.div
          className="absolute top-1/2 right-[5%] w-20 h-20 md:w-38 md:h-38"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
            rotateZ: [0, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* Cube faces - Mobile: 40px (w-20), Desktop: 56px (w-28) */}
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'translateZ(40px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'rotateY(180deg) translateZ(40px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'rotateX(90deg) translateZ(40px)' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl md:rounded-2xl" style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}></div>
          </div>
        </motion.div>

        {/* Floating particles/dots */}
        <motion.div
          className="absolute top-1/3 left-[8%] w-3 h-3 bg-blue-500/60 rounded-full"
          animate={{ y: [0, -100, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[12%] w-2 h-2 bg-[#18d185]/60 rounded-full"
          animate={{ y: [0, 80, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-[25%] w-2.5 h-2.5 bg-indigo-500/60 rounded-full"
          animate={{ y: [0, -60, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-10"
          >
            <Sparkles className="text-indigo-600" size={14} />
            <span className="text-[10px] font-black tracking-[0.2em] text-indigo-700 uppercase">
              Excelencia Tecnológica LuXR
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter text-slate-900"
          >
            Ingeniería Digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 italic pr-2">de Alto Impacto.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
          >
            Creamos soluciones de software exclusivas para empresas que no aceptan menos que la perfección. VR/AR, Web y Mobile integrados en un solo núcleo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => scrollToSection('contacto')}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-green-200 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group hover:bg-[#18d185] hover:from-[#18d185] hover:to-[#18d185]"
            >
              Ver Paquetes
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('casos')}
              className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all text-center"
            >
              Casos de Éxito
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
