import React from 'react';

const About = () => {
  const pillars = ["Trust", "Innovation", "Efficiency", "People"];

  // Professional body font
  const bodyStyle = { 
    fontFamily: 'var(--font-body)', // Plus Jakarta Sans
    fontWeight: '400',
    color: '#1e293b'
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-3/5 space-y-10">
            <div className="space-y-4">
              {/* Restored Original Tag Style */}
              <span className="text-aurora-teal tracking-[0.5em] uppercase text-[10px] block font-medium" 
                    style={{ fontFamily: 'var(--font-heading)' }}>
                The Foundation
              </span>
              {/* RESTORED SERIF HEADING */}
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
                Built on four <span className="italic text-aurora-teal">powerful pillars</span>
              </h2>
            </div>
            
            <div className="max-w-xl space-y-6 text-slate-700 leading-relaxed text-[16px]" style={bodyStyle}>
              <p className="text-xl text-slate-900 leading-snug font-medium">
                HRSouk is a dedicated HR solutions platform delivering streamlined, practical, and people-centric services for modern businesses.
              </p>
              <p className="opacity-90">
                Guided by the belief that the right talent transforms organizations, we provide efficient Recruitment Support, HR Consulting, Onboarding Assistance, and Workforce Management.
              </p>
            </div>
          </div>

          <div className="lg:w-2/5 w-full pt-12">
            <div className="flex flex-col divide-y divide-slate-300/40 border-t border-slate-300/40">
              {pillars.map((pillar, index) => (
                <div key={index} className="group py-8 flex items-center transition-all duration-700 hover:pl-8">
                  <div className="flex items-center gap-10">
                    <span className="text-aurora-teal/60 text-[12px] tracking-widest font-semibold" style={bodyStyle}>
                      0{index + 1}
                    </span>
                    {/* RESTORED PILLAR TITLES TO SERIF/SYNE MIX */}
                    <h4 className="text-slate-900 uppercase tracking-[0.3em] text-[13px] group-hover:text-aurora-teal transition-all duration-500 font-bold"
                        style={{ fontFamily: 'var(--font-heading)' }}>
                      {pillar}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;