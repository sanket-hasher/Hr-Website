import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-10 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-aurora-teal font-black tracking-[0.5em] uppercase text-[10px] block mb-4">Strategic Intent</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light">Our Purpose & <span className="italic text-aurora-teal">Direction</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative p-12 rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute top-8 right-10 text-aurora-teal/10 font-serif italic text-6xl">Vision</div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-serif text-slate-900">Our Vision</h3>
              <div className="w-12 h-[2px] bg-aurora-teal/40 group-hover:w-full transition-all duration-700"></div>
              <p className="text-slate-600 text-lg font-light leading-relaxed italic">"To be a trusted partner delivering smart, efficient solutions."</p>
            </div>
          </div>

          <div className="group relative p-12 rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute top-8 right-10 text-aurora-teal/10 font-serif italic text-6xl">Mission</div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-serif text-slate-900">Our Mission</h3>
              <div className="w-12 h-[2px] bg-aurora-teal/40 group-hover:w-full transition-all duration-700"></div>
              <p className="text-slate-600 text-lg font-light leading-relaxed italic">"Bridge the gap between talent and opportunity."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;