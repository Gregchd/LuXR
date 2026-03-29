
import React from 'react';
import { motion } from 'framer-motion';

const row1 = [
  { name: 'TechCorp',   initials: 'TC', color: 'from-blue-500 to-blue-700' },
  { name: 'Innovatek',  initials: 'IN', color: 'from-indigo-500 to-indigo-700' },
  { name: 'NexusLab',   initials: 'NL', color: 'from-violet-500 to-violet-700' },
  { name: 'Axiom',      initials: 'AX', color: 'from-sky-500 to-sky-700' },
  { name: 'Vertex',     initials: 'VX', color: 'from-cyan-500 to-cyan-700' },
  { name: 'PrimeAI',    initials: 'PA', color: 'from-teal-500 to-teal-700' },
];

const row2 = [
  { name: 'CoreSys',    initials: 'CS', color: 'from-emerald-500 to-emerald-700' },
  { name: 'Orbitec',    initials: 'OR', color: 'from-blue-400 to-indigo-600' },
  { name: 'Stratum',    initials: 'ST', color: 'from-indigo-400 to-violet-600' },
  { name: 'Helixware',  initials: 'HW', color: 'from-sky-400 to-blue-600' },
  { name: 'Quantex',    initials: 'QX', color: 'from-violet-400 to-purple-600' },
  { name: 'Zenith',     initials: 'ZN', color: 'from-cyan-400 to-teal-600' },
];

const stats = [
  { value: '12+', label: 'Clientes activos' },
  { value: '98%', label: 'Retención' },
  { value: '5', label: 'Países' },
];

const edgeMask = {
  maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
};

interface Brand { name: string; initials: string; color: string; }

const BrandCard = ({ brand }: { brand: Brand }) => (
  <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0 group hover:bg-white/10 hover:border-[#18d185]/40 transition-all duration-300 cursor-default">
    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg shrink-0`}>
      <span className="text-white font-black text-xs">{brand.initials}</span>
    </div>
    <span className="text-white/50 font-semibold text-sm group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
      {brand.name}
    </span>
  </div>
);

const InfiniteRow = ({ brands, direction = 1, duration = 30 }: { brands: Brand[]; direction?: number; duration?: number }) => {
  const doubled = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden" style={edgeMask}>
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </motion.div>
    </div>
  );
};

export const Brands = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden py-20 md:py-28">

      {/* Background orbs — mismo estilo que Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#18d185]/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-6 mb-16"
        >
          <span className="text-[#18d185] font-bold uppercase tracking-[0.4em] text-xs mb-6 italic block">
            Confianza Empresarial
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Marcas que eligen
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-[#18d185]">
              ingeniería de élite
            </span>
          </h3>
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
            Empresas líderes confían en LuXR para construir sus soluciones digitales más críticas.
          </p>
        </motion.div>

        {/* Carruseles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5"
        >
          <InfiniteRow brands={row1} direction={1} duration={32} />
          <InfiniteRow brands={row2} direction={-1} duration={28} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-20 px-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:text-[#18d185] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-slate-500 font-semibold text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
