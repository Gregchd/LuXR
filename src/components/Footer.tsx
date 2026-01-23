import React from 'react';
import { Linkedin, Instagram, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import logoSvg from '../assets/logo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="border-t border-white/5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <img src={logoSvg} alt="LuXR Logo" className="h-10 w-auto" />
              </motion.div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Construimos sistemas digitales de alto impacto que impulsan el crecimiento empresarial. 
                Web, Mobile y XR integrados en soluciones que generan resultados reales.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 flex items-center gap-2">
                  <Zap className="text-blue-400" size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-slate-300">Web Apps</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 flex items-center gap-2">
                  <Rocket className="text-indigo-400" size={14} />
                  <span className="text-xs font-bold text-slate-300">Mobile</span>
                </div>
                <div className="px-3 py-1.5 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="text-xs">🥽</span>
                  <span className="text-xs font-bold text-slate-300">XR/VR</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/company/luxrdotpe/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/luxr.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-600 transition-all"
                >
                  <Instagram size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3"
            >
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', id: 'inicio' },
                  { name: 'Soluciones', id: 'soluciones' },
                  { name: 'Proceso', id: 'proceso' },
                  { name: 'Portafolio', id: 'casos' }
                ].map((item) => (
                  <li key={item.id}>
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4"
            >
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Recursos</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Blog', href: '#' },
                  { name: 'Documentación', href: '#' },
                  { name: 'Casos de Estudio', href: '#' },
                  { name: 'FAQ', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-indigo-500 group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/5 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-500">
              <p>© {currentYear} LUXR TECHNOLOGIES SAC. Todos los derechos reservados.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                <span>·</span>
                <a href="#" className="hover:text-white transition-colors">Términos</a>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
              </div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Sistemas Operativos
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
