import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/hr_souk_logo_2.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWhoOpen, setIsWhoOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const whoRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (whoRef.current && !whoRef.current.contains(event.target)) setIsWhoOpen(false);
      if (socialRef.current && !socialRef.current.contains(event.target)) setIsSocialOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const whoWeAreLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Services', href: '#industries' },
    { name: 'Team', href: '#team' },
  ];

  // Applying Calibri globally to the navigation links
  const getNavLinkClass = () => {
    const base = "text-[11px] uppercase font-black tracking-[0.2em] transition-all duration-500 relative group py-1 flex items-center gap-2 cursor-pointer hover:text-aurora-teal ";
    const contrast = isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]";      
    return base + contrast;
  };

  const calibriStyle = { fontFamily: 'Calibri, sans-serif' };

  return (
    <nav className="fixed w-full z-[100] px-6 py-4 transition-all duration-500" style={calibriStyle}>
      <div className={`max-w-7xl mx-auto px-8 py-1.5 flex items-center justify-between rounded-2xl transition-all duration-700 border ${
        isScrolled ? 'bg-white/40 backdrop-blur-3xl border-white/60 shadow-2xl scale-[0.99]' : 'bg-white/10 backdrop-blur-2xl border-white/20'
      }`}>
        
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="HR Souk" 
            className="h-16 md:h-20 w-auto object-contain z-50 filter brightness-125 contrast-110 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {/* Nav links inherit Calibri via the parent nav style */}
            <a href="#" className={getNavLinkClass()}>Home</a>

            {/* WHO WE ARE DROPDOWN */}
            <div className="relative" ref={whoRef}>
              <button onClick={() => {setIsWhoOpen(!isWhoOpen); setIsSocialOpen(false);}} className={getNavLinkClass()}>
                Who We Are
                <svg className={`w-3.5 h-3.5 transition-transform ${isWhoOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`absolute top-full right-0 mt-4 w-56 rounded-2xl overflow-hidden transition-all duration-500 origin-top border border-white/50 shadow-2xl ${isWhoOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-white/95 backdrop-blur-3xl p-3 flex flex-col gap-1">
                  {whoWeAreLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsWhoOpen(false)} className="text-[10px] uppercase font-black tracking-widest text-slate-900 hover:text-white hover:bg-aurora-teal px-4 py-3 rounded-xl transition-all">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* SOCIAL REACH DROPDOWN */}
            <div className="relative" ref={socialRef}>
              <button onClick={() => {setIsSocialOpen(!isSocialOpen); setIsWhoOpen(false);}} className={getNavLinkClass()}>
                Social Reach Out
                <svg className={`w-3.5 h-3.5 transition-transform ${isSocialOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 mt-4 w-56 rounded-2xl overflow-hidden transition-all duration-500 origin-top border border-white/50 shadow-2xl ${isSocialOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-white/95 backdrop-blur-3xl p-3 flex flex-col gap-1">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-black tracking-widest text-slate-900 hover:text-white hover:bg-[#0077b5] px-4 py-3 rounded-xl transition-all">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT BUTTON - Updated to inherit Calibri font */}
          <a href="#footer" className="bg-slate-900 text-white px-7 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-aurora-teal shadow-xl active:scale-95 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;