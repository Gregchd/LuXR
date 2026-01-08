
import React from 'react';

export const Footer = () => {
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
