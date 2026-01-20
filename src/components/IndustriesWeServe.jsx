import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    { 
      title: "Education", 
      tag: "#Learning",
      image: "https://images.unsplash.com/photo-1523050853023-8355af4c09a3?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Logistics", 
      tag: "#SupplyChain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Healthcare", 
      tag: "#Wellness",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Technology", 
      tag: "#Innovation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" 
    }
  ];

  // Professional body font style (Plus Jakarta Sans as defined in index.css)
  const bodyStyle = { 
    fontFamily: 'var(--font-body)',
    fontWeight: '400' 
  };

  return (
    <section className="py-24 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION - Restored Serif Branding */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-aurora-teal/30"></div>
            <span className="text-aurora-teal tracking-[0.5em] uppercase text-[10px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Expertise
            </span>
            <div className="h-[1px] w-8 bg-aurora-teal/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light">
            Industries <span className="italic text-aurora-teal">We Serve</span>
          </h2>
        </div>

        {/* REIMAGINED DYNAMIC GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="group relative h-[450px] cursor-pointer">
              
              {/* Offset Background Layer (Depth Effect) */}
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[2.5rem] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700"></div>

              {/* Main Industry Card */}
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-50 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-30" 
                />
                
                {/* Vibrant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:from-aurora-teal/80 group-hover:via-slate-900/60 transition-all duration-700"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="relative z-10 space-y-4">
                    <span className="text-aurora-teal text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-bold">
                      {item.tag}
                    </span>
                    
                    <div className="w-12 h-[2px] bg-white group-hover:w-full transition-all duration-700"></div>
                    
                    <h3 className="text-white text-2xl font-serif tracking-tight leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/0 group-hover:text-white/80 text-sm leading-snug transition-all duration-700 overflow-hidden h-0 group-hover:h-12" style={bodyStyle}>
                      Delivering tailored talent solutions for the {item.title.toLowerCase()} sector.
                    </p>
                  </div>
                </div>

                {/* Corner Decorative Shine */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;