import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-10 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-aurora-teal/30"></div>
            <span className="text-aurora-teal font-black tracking-[0.5em] uppercase text-[10px]">
              Strategic Intent
            </span>
            <div className="h-[1px] w-8 bg-aurora-teal/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
            Our Purpose & <span className="italic text-aurora-teal">Direction</span>
          </h2>
        </div>

        {/* TWO-COLUMN STRATEGIC GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* VISION BLOCK */}
          <div className="group relative p-12 rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-xl transition-all duration-700 hover:border-aurora-teal/30 hover:-translate-y-2">
            <div className="absolute top-8 right-10 text-aurora-teal/10 font-serif italic text-6xl">Vision</div>
            
            <div className="relative z-10 space-y-6">
              <span className="text-aurora-teal font-bold tracking-[0.3em] uppercase text-[10px] block">The Future</span>
              <h3 className="text-2xl font-serif text-slate-900 font-normal">Our Vision</h3>
              <div className="w-12 h-[2px] bg-aurora-teal/40 group-hover:w-full transition-all duration-700"></div>
              <p className="text-slate-600 text-lg font-light leading-relaxed italic">
                Workplaces where people are treated fairly, supported properly, and enabled to succeed.
              </p>
            </div>
          </div>

          {/* MISSION BLOCK */}
          <div className="group relative p-12 rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-xl transition-all duration-700 hover:border-aurora-teal/30 hover:-translate-y-2">
            <div className="absolute top-8 right-10 text-aurora-teal/10 font-serif italic text-6xl">Mission</div>
            
            <div className="relative z-10 space-y-6">
              <span className="text-aurora-teal font-bold tracking-[0.3em] uppercase text-[10px] block">The Action</span>
              <h3 className="text-2xl font-serif text-slate-900 font-normal">Our Mission</h3>
              <div className="w-12 h-[2px] bg-aurora-teal/40 group-hover:w-full transition-all duration-700"></div>
              <p className="text-slate-600 text-lg font-light leading-relaxed italic">
                We partner with organisations to reduce risk, improve people management, and support growth through expert, commercially focused HR advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;