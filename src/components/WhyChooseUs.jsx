import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality",
      desc: "Reliable and professional services tailored to your specific organizational needs.",
    },
    {
      title: "Global Reach",
      desc: "Comprehensive reach ensuring top-tier talent acquisition across borders.",
    },
    {
      title: "Agility",
      desc: "Agile processes that deliver results with precision and speed.",
    }
  ];

  return (
    <section id="why-us" className="py-10 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-aurora-teal font-black tracking-[0.5em] uppercase text-[10px] block mb-4">
            Superiority
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light">
            Why <span className="italic text-aurora-teal">Choose Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-xl hover:bg-white/50 transition-all duration-700 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-aurora-teal/10 flex items-center justify-center mb-8 group-hover:bg-aurora-teal transition-colors duration-500">
                <span className="text-aurora-teal font-bold group-hover:text-white transition-colors">0{i + 1}</span>
              </div>
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-4">{f.title}</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">{f.desc}</p>
              <div className="mt-8 h-[1px] w-6 bg-slate-300 group-hover:w-full group-hover:bg-aurora-teal/40 transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;