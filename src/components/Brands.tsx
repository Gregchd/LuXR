
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'TechCorp', initials: 'TC', color: 'from-blue-500 to-blue-700' },
  { name: 'Innovatek', initials: 'IN', color: 'from-indigo-500 to-indigo-700' },
  { name: 'NexusLab', initials: 'NL', color: 'from-violet-500 to-violet-700' },
  { name: 'Axiom', initials: 'AX', color: 'from-sky-500 to-sky-700' },
  { name: 'Vertex', initials: 'VX', color: 'from-cyan-500 to-cyan-700' },
  { name: 'PrimeAI', initials: 'PA', color: 'from-teal-500 to-teal-700' },
  { name: 'CoreSys', initials: 'CS', color: 'from-emerald-500 to-emerald-700' },
  { name: 'Orbitec', initials: 'OR', color: 'from-blue-400 to-indigo-600' },
];

// Duplicamos para el loop infinito
const allBrands = [...brands, ...brands];

export const Brands = () => {
  return (
    <section className="py-12 bg-slate-950 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
          Empresas que confían en LuXR
        </p>
      </div>

      {/* Track contenedor con máscara de fade en los bordes */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0 group hover:bg-white/10 transition-colors duration-300"
            >
              {/* Logo placeholder */}
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg shrink-0`}
              >
                <span className="text-white font-black text-xs">{brand.initials}</span>
              </div>
              <span className="text-white/60 font-semibold text-sm group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
