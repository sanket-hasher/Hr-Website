import React from 'react';

/**
 * Hero Component - Darkened Background Edition
 * Features a deeper overlay for better text readability and a premium cinematic feel.
 */
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover"
          alt="Modern Professional Workspace"
        />
        
        {/* Darker Overlay: Increased to 60% opacity for better contrast */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        
        {/* Bottom Transition: Fades into the Silver Mesh background of the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f1f5f9]/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-20">
        <div className="inline-block px-4 py-1 border border-aurora-teal/40 rounded-full mb-6 bg-white/5 backdrop-blur-md">
          <span className="text-aurora-teal text-[10px] uppercase tracking-[0.45em] font-black">
            Elite HR Solutions
          </span>
        </div>
        
        <h1 className="text-white font-serif text-6xl md:text-8xl leading-[1.1] mb-6 drop-shadow-2xl">
          Enabling <br />
          <span className="text-aurora-teal italic">Talent Excellence</span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed drop-shadow-lg">
          A dedicated HR solutions partner focused on simplifying and strengthening 
          how global organizations manage their most valuable asset.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-aurora-teal text-slate-950 px-10 py-4 rounded-xl text-[10px] uppercase font-black tracking-widest hover:brightness-110 transition-all shadow-xl shadow-teal-500/20 active:scale-95">
            Explore Services
          </button>
          <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-xl text-[10px] uppercase font-black tracking-widest hover:bg-white/20 transition-all active:scale-95">
            Our Vision
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;