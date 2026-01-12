import React from 'react';
import logo from '@/assets/hr_souk_logo_2.png';

const Footer = () => {
  return (
    <footer id="footer" className="relative mt-20 pb-12 pt-24 overflow-hidden scroll-mt-24">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl border-t border-white/60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <img src={logo} alt="HR Souk" className="h-16 w-auto object-contain" />
              <div className="flex flex-col text-slate-900">
                <span className="text-2xl font-serif font-black uppercase tracking-tighter">HR SOUK</span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-aurora-teal">Elite HR Solutions</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md italic">
              Empowering organizations through innovative recruitment strategies and technology-driven human resource management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-slate-900">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Why Us', 'Services', 'Team'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs font-bold text-slate-500 hover:text-aurora-teal transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-slate-900">Contact</h4>
            <p className="text-xs font-bold text-slate-600">
              <span className="text-aurora-teal block mb-1">Support:</span>
              Pan-India & Global Coverage
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">© 2026 HR SOUK.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <a href="#" className="hover:text-aurora-teal">Privacy</a>
            <a href="#" className="hover:text-aurora-teal">Terms</a>
            <a href="#" className="hover:text-aurora-teal">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;