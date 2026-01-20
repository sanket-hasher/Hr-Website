import React from 'react';

const CoreValues = () => {
  const values = [
    { title: "Integrity", num: "01" },
    { title: "Excellence", num: "02" },
    { title: "Commitment", num: "03" },
    { title: "Respect", num: "04" },
    { title: "Innovation", num: "05" },
    { title: "Partnership", num: "06" }
  ];

  // Calibri font stack with strictly normal weight for professional clarity
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400'
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/10" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* COMPACT HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-aurora-teal/40"></div>
            <span className="text-aurora-teal tracking-[0.6em] uppercase text-[9px] opacity-80">
              The DNA of HRSouk
            </span>
            <div className="h-[1px] w-6 bg-aurora-teal/40"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light tracking-tight">
            Our Core <span className="italic text-aurora-teal">Values</span>
          </h2>
        </div>

        {/* VIBRANT DYNAMIC GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative h-48 cursor-default"
            >
              {/* Background Accent Card (Offset shadow effect) */}
              <div className="absolute inset-0 bg-slate-900/5 rounded-[2rem] translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-500"></div>
              
              {/* Main Content Card */}
              <div className="relative h-full p-8 rounded-[2rem] bg-white border border-white shadow-xl flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-[#0D9488] group-hover:-translate-y-2">
                
                {/* LARGE BACKGROUND NUMBER (Metallic effect) */}
                <span className="absolute -bottom-4 -right-2 text-slate-100 font-serif italic text-8xl transition-colors duration-500 group-hover:text-white/5 pointer-events-none">
                  {v.num}
                </span>

                <div className="relative z-10 flex flex-col items-center">
                  {/* ACCENT ICON LINE */}
                  <div className="w-6 h-[2px] bg-aurora-teal mb-4 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>

                  {/* VALUE TITLE (Calibri Normal) */}
                  <h4 className="text-slate-900 uppercase tracking-[0.4em] text-[13px] transition-colors duration-500 group-hover:text-white font-normal">
                    {v.title}
                  </h4>

                  {/* SUB-TAG (Optional detail for extra "eye-catching" feel) */}
                  <span className="mt-2 text-[10px] text-aurora-teal/0 group-hover:text-white/60 uppercase tracking-widest transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    Core Pillar
                  </span>
                </div>

                {/* DYNAMIC SHINE OVERLAY */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;