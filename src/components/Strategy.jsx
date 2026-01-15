import React from 'react';

const Strategy = () => {
  const approach = [
    "Client-Centric Solutions",
    "Transparent & Ethical Processes",
    "Quality-Driven Execution",
    "Agile & Responsive Support",
    "Technology-Enabled HR"
  ];

  // Applying Calibri globally to the component
  const calibriStyle = { fontFamily: 'Calibri, sans-serif' };

  return (
    <section className="py-24 bg-transparent" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: NARRATIVE CORE */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-[10px] font-black tracking-[0.4em] text-aurora-teal uppercase mb-3">
              Strategy
            </h2>
            {/* Keeping Serif for the main heading for brand consistency */}
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 font-light tracking-tight">
              Our <span className="italic text-aurora-teal">Approach</span>
            </h3>
          </div>
          
          <ul className="space-y-5">
            {approach.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700 font-normal text-[15px]">
                <span className="w-6 h-6 rounded-full bg-aurora-teal/10 flex items-center justify-center text-aurora-teal">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: CORE VALUES GLASS BOX */}
        <div className="bg-white/40 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/60 shadow-2xl">
          <h3 className="text-2xl font-serif text-slate-900 mb-8 text-left">
            Core <span className="italic text-aurora-teal">Values</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {["Integrity", "Excellence", "Commitment", "Respect", "Innovation", "Partnership"].map((v) => (
              <div 
                key={v} 
                className="bg-white/50 border border-white/80 py-4 rounded-2xl text-[12px] font-bold uppercase tracking-widest text-slate-800 text-center shadow-sm transition-all duration-500 hover:bg-white hover:border-aurora-teal hover:-translate-y-1"
              >
                {v}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Strategy;