import React from 'react';

const ServicesGrid = () => {
  const services = [
    {
      title: "Talent Acquisition",
      desc: "AI-driven recruitment and data-powered hiring strategies to find elite talent.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#2dd4bf" strokeWidth="2"/>
          <path d="M11 8C12.1046 8 13 8.89543 13 10C13 11.1046 12.1046 12 11 12C9.89543 12 9 11.1046 9 10C9 8.89543 9.89543 8 11 8Z" fill="#0f1115" opacity="0.4"/>
          <path d="M7 15.5C7 13.567 8.79086 12 11 12C13.2091 12 15 13.567 15 15.5" stroke="#0f1115" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          <path d="M20 20L16 16" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Employee Engagement",
      desc: "Tailored programs to enhance productivity and leadership development frameworks.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0f1115" strokeWidth="1.5" opacity="0.2"/>
          <path d="M12 18V12M12 12L15 9M12 12L9 9" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="1" fill="#2dd4bf"/>
        </svg>
      )
    },
    {
      title: "HR Technology",
      desc: "Real-time workforce analytics and cloud-based HRMS automation solutions.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="12" rx="2" stroke="#0f1115" strokeWidth="2" opacity="0.3"/>
          <path d="M2 20H22" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 10L11 12L15 8" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "HR Compliance",
      desc: "Global labor law compliance and ethical HR governance frameworks.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L4 6V11C4 16.55 7.41 21.74 12 23C16.59 21.74 20 16.55 20 11V6L12 3Z" stroke="#0f1115" strokeWidth="1.5" opacity="0.2"/>
          <path d="M9 12L11 14L15 10" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Applying Calibri font stack for professional consistency
  const calibriStyle = { fontFamily: 'Calibri, sans-serif' };

  return (
    <section className="py-6 bg-transparent" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-aurora-teal font-black tracking-[0.4em] uppercase text-[10px] mb-2">
          Solutions
        </h2>
        
        {/* Main Heading keeps Serif for branding */}
        <h3 className="text-4xl font-serif text-slate-900 mb-8 tracking-tight">
          Comprehensive HR Services
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              
              {/* Calibri Bold for Service Titles */}
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {s.title}
              </h4>
              
              {/* Calibri for Descriptions at 14px equivalent */}
              <p className="text-slate-600 leading-relaxed text-[13px] mb-6">
                {s.desc}
              </p>
              
              <button className="text-aurora-teal font-black text-[9px] uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;