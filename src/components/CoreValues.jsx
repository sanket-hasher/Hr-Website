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

  return (
    <section className="py-16 bg-transparent border-t border-white/20">
      <div className="max-w-6xl mx-auto px-8">
        {/* COMPACT HEADER */}
        <div className="text-center mb-12">
          <span className="text-aurora-teal font-black tracking-[0.6em] uppercase text-[8px] block mb-2 opacity-80">
            The DNA of HRSouk
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-light tracking-tight">
            Our Core <span className="italic text-aurora-teal">Values</span>
          </h2>
        </div>

        {/* COMPACT ENHANCED GLASS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[1.8rem] bg-white/40 backdrop-blur-3xl border border-white/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden transition-all duration-500 hover:bg-white/60 hover:border-aurora-teal/40 hover:-translate-y-1.5"
            >
              {/* ENHANCED GLASS GLOW */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* HIGH-VISIBILITY NUMBERING */}
                <span className="text-aurora-teal font-bold text-[10px] tracking-[0.3em] mb-4 block group-hover:scale-110 transition-transform">
                  {v.num}
                </span>

                {/* SHARPER TYPOGRAPHY */}
                <h4 className="text-slate-900 font-black uppercase tracking-[0.4em] text-[11px] group-hover:text-aurora-teal transition-colors duration-300">
                  {v.title}
                </h4>

                {/* REFINED ANCHOR */}
                <div className="mt-5 h-[2px] w-4 bg-slate-300 group-hover:w-12 group-hover:bg-aurora-teal/60 transition-all duration-500"></div>
              </div>

              {/* DYNAMIC AMBIENT REFLECTION */}
              <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;