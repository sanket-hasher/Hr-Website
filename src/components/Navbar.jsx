import React, { useState, useEffect } from 'react';
import logo from '@/assets/hr_souk_logo_2.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className="fixed w-full z-[100] px-6 py-4 transition-all duration-500">
      <div className={`max-w-7xl mx-auto px-8 py-3 flex items-center justify-between rounded-2xl transition-all duration-700 border ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-3xl border-white/40 shadow-2xl scale-[0.99]' 
          : 'bg-white/5 backdrop-blur-2xl border-white/20'
      }`}>
        
        {/* LOGO ILLUMINATION SECTION */}
        <div className="flex items-center">
          <div className="relative flex items-center group">
            <div className="absolute inset-0 bg-white/25 blur-2xl rounded-full scale-150 pointer-events-none"></div>
            <img 
              src={logo} 
              alt="HR Souk Logo" 
              className="h-20 md:h-24 w-auto object-contain z-50 transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ marginTop: '-4px', marginBottom: '-4px' }}
            />
            
            <div className="ml-3 flex flex-col z-50">
              <span className={`text-2xl font-serif font-black uppercase tracking-tighter leading-none drop-shadow-md ${isScrolled ? 'text-slate-100' : 'text-white'}`}>
                HR SOUK
              </span>
              <span className="text-[10px] uppercase tracking-[0.45em] font-black mt-1.5 text-aurora-teal brightness-125">
                Premium HR Marketplace
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase font-black tracking-[0.25em] transition-all relative group py-2 text-white hover:text-aurora-teal"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-aurora-teal transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>
          <a href="#footer" className="bg-slate-900 text-white px-9 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-aurora-teal transition-all shadow-xl">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;