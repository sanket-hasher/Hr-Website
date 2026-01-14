import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { title: "Client-Centric Solutions" },
    { title: "Transparent & Ethical Processes" },
    { title: "Quality-Driven Execution" },
    { title: "Agile & Responsive Support" },
    { title: "Technology-Enabled HR" }
  ];

  return (
    <section id="why-us" className="py-10 bg-transparent scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* REFINED HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-aurora-teal"></div>
            <span className="text-aurora-teal font-black tracking-[0.6em] uppercase text-[10px]">
              Superiority
            </span>
            <div className="h-[2px] w-12 bg-aurora-teal"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-bold tracking-tight">
            Why <span className="italic text-aurora-teal font-light">Choose Us</span>
          </h2>
        </div>

        {/* HIGH-CONTRAST SINGLE-ROW GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] bg-slate-900/5 backdrop-blur-3xl border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-700 hover:bg-white hover:border-aurora-teal hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(45,212,191,0.2)]"
            >
              {/* VIBRANT HOVER GLOW */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-aurora-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* BOLD NUMBERING */}
                <span className="text-aurora-teal font-black text-[14px] tracking-[0.2em] mb-6 block group-hover:scale-125 transition-transform duration-500">
                  0{i + 1}
                </span>

                {/* HIGH-VISIBILITY TYPOGRAPHY */}
                <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[12px] leading-relaxed group-hover:text-aurora-teal transition-all duration-500 h-12 flex items-center">
                  {f.title}
                </h4>

                {/* ACTIVE ANCHOR LINE */}
                <div className="mt-8 h-[2px] w-8 bg-slate-200 group-hover:w-full group-hover:bg-aurora-teal transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;