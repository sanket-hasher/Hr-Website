import React from 'react';

const Industries = () => {
  const features = [
    { title: "Operational Efficiency", desc: "Strengthening operational efficiency through structured HR processes." },
    { title: "Strategic Growth Support", desc: "Collaborating closely to ensure businesses remain future-ready." },
    { title: "Market & Brand Enablement", desc: "Empowering organizations to enhance their market presence." }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Industries We Serve */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-serif text-slate-900 mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {["Education", "Logistics & Supply Chain"].map((name, i) => (
              <div key={i} className="relative group h-64 rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
                <img 
                  src={i === 0 ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80" : "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80"} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={name}
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all"></div>
                <h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">{name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* What We Provide */}
        <div className="text-center">
          <h2 className="text-4xl font-serif text-slate-900 mb-12">What We Provide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/30 backdrop-blur-lg border border-white/50 shadow-lg text-left">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;