
import React from 'react';
import { Box, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      title: 'Inmersión (VR/AR)',
      description: 'Interfaces espaciales de próxima generación. Gemelos digitales y showrooms interactivos de lujo.',
      icon: <Box size={32} />,
      tag: 'Ecosistemas VR'
    },
    {
      title: 'Desarrollo Web Premium',
      description: 'Estructuras escalables con diseño cinematográfico. Rendimiento extremo y seguridad empresarial.',
      icon: <Globe size={32} />,
      tag: 'Ingeniería Web'
    },
    {
      title: 'Apps Móviles Nativa',
      description: 'Experiencias de usuario sin fricciones. Desarrollamos el core de su presencia móvil.',
      icon: <Smartphone size={32} />,
      tag: 'Arquitectura Mobile'
    }
  ];

  return (
    <section id="soluciones" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 italic">Soluciones Especializadas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Capacidades LuXR</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[2.5rem] soft-shadow border border-slate-100 group transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-colors"></div>
              <div className="mb-8 w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block">{service.tag}</span>
              <h4 className="text-2xl font-black mb-5 text-slate-900">{service.title}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
