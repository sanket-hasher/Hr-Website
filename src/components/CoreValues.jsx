import React from 'react';
/* Lucide icons provide a clean, professional look that matches modern HR branding */
import { ShieldCheck, Target, Heart, Award, Lightbulb, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    { title: "Integrity", icon: <ShieldCheck size={42} strokeWidth={1.5} /> },
    { title: "Excellence", icon: <Award size={42} strokeWidth={1.5} /> },
    { title: "Commitment", icon: <Target size={42} strokeWidth={1.5} /> },
    { title: "Respect", icon: <Heart size={42} strokeWidth={1.5} /> },
    { title: "Innovation", icon: <Lightbulb size={42} strokeWidth={1.5} /> },
    { title: "Partnership", icon: <Users size={42} strokeWidth={1.5} /> }
  ];

  // Calibri font stack for professional clarity
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400'
  };

  return (
    /* ADDED ID AND SCROLL MARGIN FOR NAVBAR LINKS */
    <section 
      id="core-values" 
      className="py-24 bg-transparent border-t border-white/10 scroll-mt-24" 
      style={calibriStyle}
    >
      <div className="max-w-7xl mx-auto px-8">
        
        {/* COMPACT HEADER WITH BRANDED SPAN */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light tracking-tight">
            Our Core <span className="text-aurora-teal">Values</span>
          </h2>
        </div>

        {/* GRID WITH ORIGINAL BOX SIZING (h-48) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative h-48 cursor-default"
            >
              {/* Background Accent Card (Offset shadow effect) */}
              <div className="absolute inset-0 bg-slate-900/5 rounded-[2rem] translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700"></div>
              
              {/* Main Content Card */}
              <div className="relative h-full p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-[#0D9488] group-hover:-translate-y-2">

                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* ICON CONTAINER: Increased size for better visual weight */}
                  <div className="text-aurora-teal mb-4 transition-all duration-700 group-hover:text-white group-hover:scale-110">
                    {v.icon}
                  </div>

                  {/* VALUE TITLE */}
                  <h4 className="text-slate-900 uppercase tracking-[0.4em] text-[16px] transition-colors duration-700 group-hover:text-white font-normal">
                    {v.title}
                  </h4>
                </div>

                {/* SLOWED MIRROR SHINE EFFECT (2000ms) */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;