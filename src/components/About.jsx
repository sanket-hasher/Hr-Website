import React from 'react';

const About = () => {
  const pillars = ["Trust", "Innovation", "Efficiency", "People"];

  // Applying Calibri font stack for professional body content
  const calibriStyle = { 
    fontFamily: 'Calibri, sans-serif', 
    fontSize: '14px', 
    color: '#1e293b' 
  };

  return (
    <section className="py-12 bg-transparent font-['Calibri']">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT: NARRATIVE CORE */}
          <div className="lg:w-3/5 space-y-10">
            <div className="space-y-4">
              <span className="text-aurora-teal font-semibold tracking-[0.5em] uppercase text-[10px] block">
                The Foundation
              </span>
              {/* Heading keeps serif for branding */}
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
                Built on four <span className="italic text-aurora-teal">powerful pillars</span>
              </h2>
            </div>
            
            {/* Body text strictly in Calibri */}
            <div className="max-w-xl space-y-6 text-slate-700 leading-relaxed" style={calibriStyle}>
              <p className="text-lg text-slate-900 font-bold leading-snug">
                HRSouk is a dedicated HR solutions platform delivering streamlined, practical, and people-centric services for modern businesses.
              </p>
              <p className="opacity-90">
                Guided by the belief that the right talent transforms organizations, we provide efficient Recruitment Support, HR Consulting, Onboarding Assistance, and Workforce Management.
              </p>
              <p className="opacity-90">
                With a strong focus on reliability and transparency, HRSouk partners with startups and SMEs to build stronger teams.
              </p>
            </div>
          </div>

          {/* RIGHT: PILLAR LIST */}
          <div className="lg:w-2/5 w-full pt-12 lg:pt-4">
            <div className="flex flex-col divide-y divide-slate-300/60 border-t border-slate-300/60">
              {pillars.map((pillar, index) => (
                <div key={index} className="group py-7 flex items-center transition-all duration-500 hover:pl-8">
                  <div className="flex items-center gap-10">
                    <span className="text-aurora-teal/60 font-bold text-[10px] tracking-widest">0{index + 1}</span>
                    <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[12px] group-hover:text-aurora-teal transition-all duration-300">
                      {pillar}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="border-b border-slate-300/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;