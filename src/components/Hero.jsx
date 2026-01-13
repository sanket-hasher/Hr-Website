import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE - Now more condensed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-transparent"></div>
      </div>

      {/* CONTENT CORE - Shifted upward */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-12">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tighter leading-[1.1]">
          <div className="mb-2">Enabling</div>
          <span className="text-aurora-teal italic font-light drop-shadow-[0_10px_30px_rgba(45,212,191,0.3)]">
            Talent Excellence
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg font-light leading-relaxed drop-shadow-md">
          A dedicated HR solutions partner focused on simplifying and strengthening 
          how global organizations manage their most valuable asset.
        </p>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-white/[0.02] backdrop-contrast-125"></div>
    </section>
  );
};

export default Hero;