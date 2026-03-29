
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'TechCorp',   initials: 'TC', color: 'from-blue-500 to-blue-700' },
  { name: 'Innovatek',  initials: 'IN', color: 'from-indigo-500 to-indigo-700' },
  { name: 'NexusLab',   initials: 'NL', color: 'from-violet-500 to-violet-700' },
  { name: 'Axiom',      initials: 'AX', color: 'from-sky-500 to-sky-700' },
  { name: 'Vertex',     initials: 'VX', color: 'from-cyan-500 to-cyan-700' },
  { name: 'PrimeAI',    initials: 'PA', color: 'from-teal-500 to-teal-700' },
  { name: 'CoreSys',    initials: 'CS', color: 'from-emerald-500 to-emerald-700' },
  { name: 'Orbitec',    initials: 'OR', color: 'from-blue-400 to-indigo-600' },
];

const doubled = [...brands, ...brands];


const edgeMask = {
  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
};

export const Brands = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#18d185]/8 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <span className="text-[#18d185] font-bold uppercase tracking-[0.4em] text-xs mb-6 italic block">
            Clientes
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Ya trabajan
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-[#18d185]">
              con nosotros
            </span>
          </h3>
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
            Un grupo selecto de empresas que apuestan por tecnología bien hecha.
          </p>
        </motion.div>

        {/* Carrusel — fila única, tarjetas grandes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden"
          style={edgeMask}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            {doubled.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-5 px-10 py-8 w-52 rounded-3xl bg-white/5 border border-white/10 shrink-0 group hover:bg-white/10 hover:border-[#18d185]/40 transition-all duration-300 cursor-default"
              >
                {/* Logo placeholder grande */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-xl`}>
                  <span className="text-white font-black text-2xl">{brand.initials}</span>
                </div>
                <span className="text-white/60 font-bold text-base group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};
