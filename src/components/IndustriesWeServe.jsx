import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    { 
      title: "Finance & Tech", 
      tag: "#FinTech",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Logistics & Supply Chain", 
      tag: "#SupplyChain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Tech & AI Consulting", 
      tag: "#Innovation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Research & Analytics", 
      tag: "#DataInsights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Real Estate", 
      tag: "#Property",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" 
    }
  ];

  const bodyStyle = { 
    fontFamily: 'var(--font-body)',
    fontWeight: '400' 
  };

  return (
    <section className="py-24 bg-transparent scroll-mt-20">
      {/* Expanded max-width to allow all 5 cards to breathe */}
      <div className="max-w-[1536px] mx-auto px-6">
        
        {/* HEADER SECTION - Left Aligned */}
        <div className="text-left mb-20 ml-2">
          <div className="flex justify-start items-center gap-4 mb-4">
            <span className="text-aurora-teal tracking-[0.5em] uppercase text-[10px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Expertise
            </span>
            <div className="h-[1px] w-12 bg-aurora-teal/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
            Industries <span className="text-aurora-teal">We Serve</span>
          </h2>
        </div>

        {/* 5-COLUMN GRID: Responsive for Mobile/Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((item, idx) => (
            <div key={idx} className="group relative h-[420px] xl:h-[450px] cursor-pointer">
              
              {/* Depth Shadow Layer */}
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[2.5rem] translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700"></div>

              {/* Main Card Container */}
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl transition-all duration-700 group-hover:-translate-y-2">
                
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-50 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-30" 
                />
                
                {/* Dynamic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:from-aurora-teal/80 group-hover:via-slate-900/60 transition-all duration-700"></div>
                
                {/* Content Overlay - Optimized Padding for 5-column layout */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                  <div className="relative z-10 space-y-3">
                    <span className="text-aurora-teal text-[9px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-bold">
                      {item.tag}
                    </span>
                    
                    <div className="w-10 h-[1px] bg-white group-hover:w-full transition-all duration-700"></div>
                    
                    <h3 className="text-white text-lg xl:text-xl font-serif tracking-tight leading-tight transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/0 group-hover:text-white/80 text-[11px] xl:text-[12px] leading-snug transition-all duration-700 overflow-hidden h-0 group-hover:h-10 opacity-0 group-hover:opacity-100" style={bodyStyle}>
                      Talented talent solutions for {item.title}.
                    </p>
                  </div>
                </div>

                {/* Decorative Shine */}
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