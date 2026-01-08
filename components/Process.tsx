
import React from 'react';
import { Search, Palette, Code2, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Process = () => {
  const steps = [
    { 
      id: '01', 
      title: 'Inmersión Inicial', 
      desc: 'Analizamos el ADN de su negocio para trazar una estrategia tecnológica a medida.',
      icon: <Search className="text-indigo-600" size={24} />
    },
    { 
      id: '02', 
      title: 'Blueprint Digital', 
      desc: 'Diseño de la experiencia y arquitectura técnica con enfoque en la exclusividad.',
      icon: <Palette className="text-indigo-600" size={24} />
    },
    { 
      id: '03', 
      title: 'Ingeniería LuXR', 
      desc: 'Desarrollo ágil bajo los estándares más estrictos de calidad y seguridad mundial.',
      icon: <Code2 className="text-indigo-600" size={24} />
    },
    { 
      id: '04', 
      title: 'Evolución Continua', 
      desc: 'Lanzamiento controlado y acompañamiento estratégico para escalar su solución.',
      icon: <Rocket className="text-indigo-600" size={24} />
    }
  ];

  return (
    <section id="proceso" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 italic">Nuestra Ruta</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Viaje hacia la Innovación</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-10">
              En LuXR, el proceso es tan importante como el resultado. Aplicamos un rigor técnico implacable en cada fase del desarrollo.
            </p>
            <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100/50">
              <div className="flex items-center gap-3 text-indigo-700 font-bold mb-2">
                <ShieldCheck size={20} />
                <span>Garantía de Calidad</span>
              </div>
              <p className="text-sm text-indigo-600/80 font-medium">Auditorías de código internas y externas en cada sprint de desarrollo.</p>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 font-black group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all duration-500">
                    {step.id}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-grow bg-slate-100 my-4"></div>}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2.5 bg-indigo-50 rounded-xl">{step.icon}</div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h4>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
