
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Smartphone, 
  Box, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  MessageCircle,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  Sparkles,
  Search,
  Code2,
  Rocket,
  Palette,
  Layers,
  BarChart3,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Phone,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Hook para detectar la sección activa ---
const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Soluciones', id: 'soluciones' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'Portafolio', id: 'casos' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const activeSection = useActiveSection(navLinks.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-light py-3 soft-shadow' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center soft-shadow">
            <span className="text-white font-black text-xl italic">L</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">Lu<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">XR</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2
                ${activeSection === link.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-900'}
              `}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-light border-b border-slate-200"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-lg font-bold transition-colors ${activeSection === link.id ? 'text-indigo-600' : 'text-slate-800'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 italic">de Alto Impacto.</span>
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
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-indigo-200 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
            >
              Consultar Proyecto
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

const Services = () => {
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

const Process = () => {
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

const Portfolio = () => {
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

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
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
                  <img 
                    src={c.img} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all soft-shadow"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4 block italic">Estudio de Caso LuXR</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight leading-none">
                  {selectedProject.title}
                </h3>

                <div className="space-y-10">
                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <Search size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">El Desafío</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">La Solución</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Impacto</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t: string) => (
                        <span key={t} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                          {t}
                        </span>
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

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 relative overflow-hidden text-white shadow-2xl flex flex-col items-center text-center">
          {/* Decorative gradients con el nuevo color Indigo */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px]"></div>
          
          <div className="max-w-4xl w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-600/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-10 italic border border-indigo-500/30"
            >
              Consultoría Estratégica
            </motion.div>
            
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 leading-[0.9]">
              Potencie su <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 italic">Visión Tecnológica.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-16">
              {/* WhatsApp Profile Card - Focus on direct project depth with CEO */}
              <motion.a 
                href="https://wa.me/34900LUXR" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative group block md:col-span-2 mx-auto w-full max-w-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-center gap-8 bg-slate-800/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-left">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 via-indigo-500 to-indigo-400 rounded-3xl flex items-center justify-center text-4xl font-black italic shadow-lg">MJ</div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 border-4 border-slate-800 rounded-full animate-pulse shadow-md"></div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Inquiry Directo de Proyectos</h4>
                    <p className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">Línea Ejecutiva - CEO</p>
                    <div className="flex items-center gap-2 mt-3 text-slate-400">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Contacto directo con Marcelo Jara para profundidad técnica</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                    <MessageCircle size={32} className="text-indigo-400 group-hover:text-white" />
                  </div>
                </div>
              </motion.a>

              {/* Social Connect Icons - Explicit LuXR branding */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                {[
                  { icon: Linkedin, name: 'LinkedIn', label: 'LuXR Corporativo' },
                  { icon: Twitter, name: 'X / Twitter', label: 'Ecosistema LuXR' },
                  { icon: Instagram, name: 'Instagram', label: 'Showroom Digital' }
                ].map((item, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: '#4f46e5' }}
                    className="flex items-center gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/5 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                      <item.icon size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{item.name}</h5>
                      <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] italic">
              Ingeniería Exclusiva para Visionarios Tecnológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-slate-100 pb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl italic">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Lu<span className="text-indigo-600">XR</span></span>
          </div>
          <div className="flex gap-12">
            {['Privacidad', 'Condiciones', 'Prensa'].map((link) => (
               <a key={link} href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-indigo-600 transition-colors">
                 {link}
               </a>
            ))}
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase gap-4 text-center">
          <p>© {new Date().getFullYear()} LUXR TECHNOLOGIES. INGENIERÍA DE ÉLITE.</p>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span>Sistemas Operativos LuXR Core</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
