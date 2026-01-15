import React from 'react';

const Hero = () => {
  // Maintaining non-bold Calibri for the description
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400'
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE - Balanced Opacity */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Office background" 
          className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
        />
        {/* Adjusted Gradient to be less "heavy" */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/20"></div>
      </div>

      {/* CONTENT CORE */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-12">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tighter leading-[1.1]">
          <div className="mb-2 font-light">Enabling</div>
          <span className="text-aurora-teal italic font-light drop-shadow-[0_10px_30px_rgba(45,212,191,0.35)]">
            Talent Excellence
          </span>
        </h1>

        <p 
          className="max-w-2xl mx-auto text-slate-200 text-base md:text-lg leading-relaxed drop-shadow-md"
          style={calibriStyle}
        >
          A dedicated HR solutions partner focused on simplifying and strengthening 
          how global organizations manage their most valuable asset.
        </p>
      </div>

      {/* Subtle Ambient Contrast */}
      <div className="absolute inset-0 pointer-events-none bg-white/[0.02] backdrop-contrast-110"></div>
    </section>
  );
};

export default Hero;