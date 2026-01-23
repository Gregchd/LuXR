
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// 👇 CONFIGURA TUS LINKS AQUÍ
const CONTACT_CONFIG = {
  whatsapp: {
    url: 'https://wa.me/51946411109', // Cambia este número de WhatsApp
    name: 'Marcelo Jara',
    initials: 'MJ',
    title: 'Contacto Directo',
    description: 'Conversemos sobre tu proyecto'
  }
};

export const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen flex items-center bg-slate-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-5xl mx-auto bg-slate-900 p-12 md:p-20 relative overflow-hidden text-white shadow-2xl rounded-3xl flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px]"></div>
          
          <div className="max-w-3xl w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-8 italic border border-indigo-500/30"
            >
              Consultoría Estratégica
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9]">
              Potencie su <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 italic pl-3 pr-3">Visión</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 italic pr-3">Tecnológica.</span>
            </h3>
            
            <div className="w-full mb-12">
              <motion.a 
                href={CONTACT_CONFIG.whatsapp.url}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative group block mx-auto w-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-center gap-6 bg-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 text-left">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">{CONTACT_CONFIG.whatsapp.initials}</div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-slate-800 rounded-full animate-pulse shadow-md"></div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] mb-1">{CONTACT_CONFIG.whatsapp.name}</h4>
                    <p className="text-2xl md:text-3xl font-black text-white tracking-wide mb-2">{CONTACT_CONFIG.whatsapp.title}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-sm font-medium">{CONTACT_CONFIG.whatsapp.description}</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#18d185] transition-all">
                    <MessageCircle size={28} className="text-indigo-400 group-hover:text-white" />
                  </div>
                </div>
              </motion.a>
            </div>
            
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] italic">Ingeniería Exclusiva para Visionarios Tecnológicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
