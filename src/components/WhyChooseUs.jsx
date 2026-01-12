import React from 'react';

/**
 * WhyChooseUs Component - Professional SVG Edition
 * Features custom vector icons that align with the HR Souk premium brand identity.
 */
const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced HR Professionals",
      desc: "Reliable and professional services tailored to your specific organizational needs.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="#2dd4bf" strokeWidth="2"/>
          <path d="M23 21V19C23 16.7909 21.2091 15 19 15" stroke="#0f1115" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
          <circle cx="19" cy="7" r="4" stroke="#0f1115" strokeWidth="2" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: "Pan-India & Global Support",
      desc: "Comprehensive reach ensuring top-tier talent acquisition across borders.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#0f1115" strokeWidth="1.5" opacity="0.2"/>
          <path d="M12 2C12 2 15 7 15 12C15 17 12 22 12 22" stroke="#2dd4bf" strokeWidth="2"/>
          <path d="M12 2C12 2 9 7 9 12C9 17 12 22 12 22" stroke="#2dd4bf" strokeWidth="2"/>
          <path d="M2 12H22" stroke="#2dd4bf" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Quick Turnaround",
      desc: "Agile processes that deliver results with precision and speed.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#2dd4bf" stroke="#0f1115" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-aurora-teal font-black tracking-[0.4em] uppercase text-[10px] mb-4">Superiority</h2>
        <h3 className="text-5xl font-serif text-slate-900 mb-16 tracking-tight">Why Choose Us</h3>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;