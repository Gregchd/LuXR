
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, X, Search, Layers, BarChart3, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const allCases = [
    { 
      title: 'Plataforma 3D Industrial', 
      category: 'Inmobiliaria Premium', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Un gigante inmobiliario necesitaba una forma de vender propiedades de lujo aún no construidas a inversores internacionales sin requerir viajes físicos.',
      solution: 'Desarrollamos un gemelo digital interactivo en WebGL capaz de renderizar interiores en tiempo real con iluminación fotorrealista directamente en el navegador.',
      impact: 'Reducción del ciclo de venta en un 40% y captación de inversores en 12 países diferentes durante el primer mes.',
      tech: ['React', 'Three.js', 'WebGL', 'Node.js']
    },
    { 
      title: 'Showroom AR Alta Gama', 
      category: 'E-commerce Luxury', 
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Una marca de muebles de diseñador quería eliminar la duda del cliente sobre si el producto encajaría físicamente en sus espacios.',
      solution: 'Implementamos una solución de Realidad Aumentada basada en la web que permite previsualizar muebles a escala 1:1 con precisión milimétrica.',
      impact: 'Incremento del 25% en la tasa de conversión y una disminución del 15% en devoluciones de productos.',
      tech: ['8th Wall', 'WebAR', 'React Native', 'AWS']
    },
    { 
      title: 'Ecosistema Operativo Pro', 
      category: 'Manufactura 4.0', 
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Controlar líneas de producción masivas con software heredado fragmentado que causaba cuellos de botella informativos.',
      solution: 'Creamos un dashboard centralizado de alto rendimiento con visualización de datos en tiempo real y alertas predictivas basadas en IA.',
      impact: 'Mejora de la eficiencia operativa en un 32% y eliminación total de paradas no programadas por falta de datos.',
      tech: ['Python', 'Golang', 'Kubernetes', 'D3.js']
    },
    { 
      title: 'Seguridad Financiera App', 
      category: 'Fintech Elite', 
      img: 'https://images.unsplash.com/photo-1551288049-bbdaef8a28a1?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Garantizar transacciones de alto valor para una banca privada con los máximos estándares de privacidad y velocidad.',
      solution: 'Arquitectura móvil nativa con cifrado de extremo a extremo y autenticación biométrica multinivel integrada en el hardware.',
      impact: 'Cero brechas de seguridad reportadas en 2 años y una satisfacción del usuario de 4.9/5 en el segmento VIP.',
      tech: ['Swift', 'Kotlin', 'Blockchain Core', 'Biometrics API']
    },
    { 
      title: 'Portal Aeroespacial XR', 
      category: 'Tecnología Avanzada', 
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Entrenamiento técnico para ensamblaje de satélites sin riesgo de dañar componentes multimillonarios.',
      solution: 'Sistema de entrenamiento en Realidad Virtual con feedback háptico y tutoriales asistidos por IA para precisión quirúrgica.',
      impact: 'Reducción de errores humanos en un 60% durante la fase de ensamblaje real.',
      tech: ['Unity', 'C#', 'OpenXR', 'Azure AI']
    },
    { 
      title: 'Logística Inteligente 5G', 
      category: 'Infraestructura', 
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Optimización de rutas de distribución global en un entorno de cadena de suministro volátil.',
      solution: 'Motor de optimización heurística que utiliza datos en tiempo real de flotas conectadas por 5G para re-rutado dinámico.',
      impact: 'Ahorro del 18% en costos de combustible y mejora del 22% en tiempos de entrega final.',
      tech: ['TypeScript', 'GraphQL', 'TensorFlow', 'PostgreSQL']
    }
  ];

  const visibleCases = showAll ? allCases : allCases.slice(0, 4);

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
                onClick={() => setSelectedProject(c)}
                className="group relative rounded-[3rem] overflow-hidden bg-white soft-shadow cursor-pointer border border-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-10 flex justify-between items-center bg-white">
                  <div>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 block">{c.category}</span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{c.title}</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
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
            
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all soft-shadow">
                <X size={20} />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
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
                  <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:shadow-lg transition-all flex items-center justify-center gap-3">
                    Solicitar Demo de Proyecto <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
