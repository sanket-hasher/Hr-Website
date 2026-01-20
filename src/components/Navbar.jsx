import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/hr_souk_logo_2.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWhoOpen, setIsWhoOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  // Professional body font (Plus Jakarta Sans)
  const navFontStyle = { fontFamily: 'var(--font-body)', fontWeight: '500' };

  const getNavLinkClass = () => {
    const base = "text-[11px] uppercase tracking-[0.2em] transition-all duration-500 relative group py-1 flex items-center gap-2 cursor-pointer hover:text-aurora-teal ";
    const contrast = isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]";      
    return base + contrast;
  };

  return (
    <nav className="fixed w-full z-[100] px-4 md:px-6 py-4 transition-all duration-500">
      {/* TRANSPARENCY UPDATES:
          - Scrolled: bg-white/40 -> bg-white/25 (More transparent)
          - Initial: bg-white/10 -> bg-white/5 (Ultra transparent)
          - Reduced border opacity for better blending
      */}
      <div className={`max-w-7xl mx-auto px-4 md:px-8 py-1.5 flex items-center justify-between rounded-2xl transition-all duration-700 border ${
        isScrolled 
          ? 'bg-white/25 backdrop-blur-3xl border-white/40 shadow-2xl scale-[0.99]' 
          : 'bg-white/5 backdrop-blur-xl border-white/10'
      }`}>
        
        {/* LOGO */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="HR Souk" 
            className="h-14 md:h-20 w-auto object-contain filter brightness-125 contrast-110 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10" style={navFontStyle}>
          <div className="flex items-center gap-10">
            <a href="#" className={getNavLinkClass()}>Home</a>

            {/* WHO WE ARE DROPDOWN */}
            <div className="relative" ref={whoRef}>
              <button onClick={() => {setIsWhoOpen(!isWhoOpen); setIsSocialOpen(false);}} className={getNavLinkClass()}>
                Who We Are
                <svg className={`w-3 h-3 transition-transform ${isWhoOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`absolute top-full right-0 mt-4 w-56 rounded-2xl overflow-hidden transition-all duration-500 border border-white/50 shadow-2xl ${isWhoOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-white/90 backdrop-blur-3xl p-3 flex flex-col gap-1">
                  {whoWeAreLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsWhoOpen(false)} className="text-[10px] uppercase font-semibold tracking-widest text-slate-900 hover:text-white hover:bg-aurora-teal px-4 py-3 rounded-xl transition-all">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* SOCIAL REACH DROPDOWN */}
            <div className="relative" ref={socialRef}>
              <button onClick={() => {setIsSocialOpen(!isSocialOpen); setIsWhoOpen(false);}} className={getNavLinkClass()}>
                Connect
                <svg className={`w-3 h-3 transition-transform ${isSocialOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 mt-4 w-56 rounded-2xl overflow-hidden transition-all duration-500 border border-white/50 shadow-2xl ${isSocialOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-white/90 backdrop-blur-3xl p-3 flex flex-col gap-1">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-semibold tracking-widest text-slate-900 hover:text-white hover:bg-[#0077b5] px-4 py-3 rounded-xl transition-all">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#footer" className="bg-slate-900 text-white px-7 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-widest hover:bg-aurora-teal shadow-xl active:scale-95 transition-all">
            Contact Us
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 transition-all"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white/95 backdrop-blur-3xl shadow-2xl transition-transform duration-500 p-10 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button className="self-end text-slate-400 hover:text-slate-900 text-2xl mb-12" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          
          <div className="flex flex-col gap-8" style={navFontStyle}>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-slate-900 uppercase tracking-widest">Home</a>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-aurora-teal">Who We Are</span>
              {whoWeAreLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-slate-600">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="https://linkedin.com" target="_blank" className="text-xl text-slate-900 uppercase tracking-widest">LinkedIn</a>
            <a href="#footer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-slate-900 text-white py-4 rounded-xl text-center uppercase tracking-widest text-xs">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;