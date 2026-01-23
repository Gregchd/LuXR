
import React from 'react';
import { Rocket, Building2, Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const clientTypes = [
    {
      title: 'Startups Escalando',
      subtitle: 'De MVP a Producto Completo',
      description: 'Necesitas validar rápido, iterar constantemente y escalar sin límites. Te ayudamos a construir la base tecnológica que soportará tu crecimiento exponencial.',
      icon: <Rocket size={28} />,
      features: ['Desarrollo ágil', 'Arquitectura escalable', 'Time-to-market rápido'],
      gradient: 'from-blue-500 to-indigo-600',
      accentColor: 'blue'
    },
    {
      title: 'Empresas Transformándose',
      subtitle: 'Modernización Digital',
      description: 'Tu negocio necesita evolucionar digitalmente para mantenerse competitivo. Implementamos soluciones que optimizan operaciones y mejoran la experiencia del cliente.',
      icon: <Building2 size={28} />,
      features: ['Integración de sistemas', 'Automatización', 'Optimización de procesos'],
      gradient: 'from-indigo-500 to-purple-600',
      accentColor: 'indigo'
    },
    {
      title: 'Innovadores Liderando',
      subtitle: 'Tecnología de Vanguardia',
      description: 'Quieres estar a la vanguardia con XR, IA y tecnologías emergentes. Creamos experiencias que diferencian tu marca y generan impacto real.',
      icon: <Lightbulb size={28} />,
      features: ['XR/VR/AR', 'Experiencias inmersivas', 'Diferenciación de marca'],
      gradient: 'from-[#18d185] to-emerald-600',
      accentColor: 'green'
    }
  ];

  return (
    <section id="soluciones" className="min-h-screen flex items-center py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Construimos para empresas que{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-[#18d185]">
              no se conforman
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Desde startups disruptivas hasta corporaciones en transformación
          </motion.p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Gradient Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${client.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${client.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {client.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-white mb-2">{client.title}</h3>
                  <p className="text-sm font-semibold text-slate-400 mb-4">{client.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    {client.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {client.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Zap className={`text-${client.accentColor}-400`} size={14} fill="currentColor" />
                        <span className="text-xs text-slate-400 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-white transition-colors">
                    <TrendingUp size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Resultados Comprobados</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
