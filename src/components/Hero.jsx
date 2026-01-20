import React from 'react';

const Hero = () => {
  // Using Plus Jakarta Sans for a professional, "cool" body font
  const bodyStyle = { 
    fontFamily: 'var(--font-body)',
    fontWeight: '400'
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      {/* FIXED BACKGROUND LAYER: Prevents image stretching */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Office" 
          className="w-full h-full object-cover opacity-40 select-none"
        />
        {/* Deep gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-900/20"></div>
      </div>

      {/* CONTENT LAYER: Fixed syntax and positioned lower */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center h-full flex flex-col justify-start pt-32 md:pt-44">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-[1.1]">
          <div className="mb-2 font-light">Enabling</div>
          <span className="text-aurora-teal italic font-light drop-shadow-2xl">
            Talent Excellence
          </span>
        </h1>

        <p 
          className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl leading-relaxed opacity-90"
          style={bodyStyle}
        >
          A dedicated HR solutions partner focused on simplifying and strengthening 
          how global organizations manage their most valuable asset.
        </p>
      </div>
    </section>
  );
};

export default Hero;