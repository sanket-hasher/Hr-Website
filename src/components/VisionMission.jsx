import React from 'react';

const VisionMission = () => {
  // Calibri font stack for professional consistency
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400' 
  };

  return (
    <section id="vision-mission" className="py-20 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
            Our Purpose & <span className="italic text-aurora-teal">Direction</span>
          </h2>
        </div>

        {/* TWO-COLUMN VIBRANT GRID */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* VISION BLOCK - VIBRANT STYLE */}
          <div className="relative group cursor-default">
            {/* Background Offset Card (Shadow effect) */}
            <div className="absolute inset-0 bg-aurora-teal/20 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>
            
            {/* Main Gradient Card */}
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-aurora-teal via-[#0D9488] to-slate-900 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>

              <div className="space-y-4">
                <span className="text-white/60 font-normal tracking-[0.3em] uppercase text-[10px] block">
                  The Future
                </span>
                <h3 className="text-3xl font-serif text-white font-normal">Our Vision</h3>
                <div className="w-12 h-[1px] bg-white/30"></div>
                
                <p className="text-white text-xl md:text-2xl font-normal leading-tight">
                  Workplaces where people are treated fairly, supported properly, and enabled to succeed.
                </p>
              </div>

              {/* Hashtags as per reference style */}
              <div className="pt-8 flex gap-4 text-[12px] text-white/50 tracking-wider">
                <span>#EmployeeCentric</span>
                <span>#FutureOfWork</span>
              </div>
            </div>
          </div>

          {/* MISSION BLOCK - VIBRANT STYLE */}
          <div className="relative group cursor-default">
            {/* Background Offset Card (Shadow effect) */}
            <div className="absolute inset-0 bg-slate-900/10 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>
            
            {/* Main Gradient Card (Inverted Direction) */}
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-[#1E293B] to-aurora-teal shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-aurora-teal/10 rounded-full blur-3xl group-hover:bg-aurora-teal/20 transition-colors"></div>

              <div className="space-y-4">
                <span className="text-white/60 font-normal tracking-[0.3em] uppercase text-[10px] block">
                  The Action
                </span>
                <h3 className="text-3xl font-serif text-white font-normal">Our Mission</h3>
                <div className="w-12 h-[1px] bg-white/30"></div>
                
                <p className="text-white text-lg md:text-xl font-normal leading-snug">
                  We partner with organisations to reduce risk, improve people management, and support growth through expert, commercially focused HR advice.
                </p>
              </div>

              {/* Hashtags as per reference style */}
              <div className="pt-8 flex gap-4 text-[12px] text-white/40 tracking-wider">
                <span>#StrategicHR</span>
                <span>#BusinessGrowth</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;