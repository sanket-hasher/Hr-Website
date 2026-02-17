import React from 'react';

const VisionMission = () => {
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400' 
  };

  return (
    <section id="vision-mission" className="pt-24 pb-12 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light tracking-tight">
            Our Purpose & <span className="text-aurora-teal">Direction</span>
          </h2>
        </div>

        {/* CORE FIX: Added 'items-stretch' to the grid container. 
            This forces all child cards to match the height of the tallest card. 
        */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* VISION CARD */}
          <div className="group relative flex flex-col cursor-default">
            {/* Soft shadow layer */}
            <div className="absolute inset-0 bg-teal-900/10 rounded-[3.5rem] translate-x-4 translate-y-4 blur-sm"></div>
            
            {/* 'flex-1' ensures the inner gradient div fills the entire height 
                of the stretched grid item. 
            */}
            <div className="relative flex-1 p-14 rounded-[3.5rem] bg-gradient-to-br from-[#14b8a6] via-[#0d9488] to-[#0f172a] text-white shadow-2xl transition-all duration-700 hover:-translate-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 mb-5 block">The Future</span>
              <h3 className="text-4xl font-serif mb-2">Our Vision</h3>
              
              <div className="w-14 h-[1px] bg-white/30 mb-10"></div>
              
              <p className="text-white/95 leading-relaxed text-xl font-light">
                Workplaces where people are treated fairly, supported properly, and enabled to succeed.
              </p>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="group relative flex flex-col cursor-default">
            {/* Soft shadow layer */}
            <div className="absolute inset-0 bg-slate-900/10 rounded-[3.5rem] translate-x-4 translate-y-4 blur-sm"></div>
            
            {/* 'flex-1' ensures this card matches the height of the Vision card
                even if the text content length is different.
            */}
            <div className="relative flex-1 p-14 rounded-[3.5rem] bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#14b8a6] text-white shadow-2xl transition-all duration-700 hover:-translate-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 mb-5 block">The Action</span>
              <h3 className="text-4xl font-serif mb-2">Our Mission</h3>
              
              <div className="w-14 h-[1px] bg-white/30 mb-10"></div>
              
              <p className="text-white/95 leading-relaxed text-xl font-light">
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