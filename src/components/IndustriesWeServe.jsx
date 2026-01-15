import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    { title: "Education", image: "https://images.unsplash.com/photo-1523050853023-8355af4c09a3?auto=format&fit=crop&q=80&w=400" },
    { title: "Logistics & Supply Chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" },
    { title: "Healthcare", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400" },
    { title: "IT & Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" }
  ];

  // Applying Calibri font stack with normal weight globally
  const calibriStyle = { 
    fontFamily: 'Calibri, sans-serif',
    fontWeight: '400' 
  };

  return (
    <section className="py-24 bg-transparent" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          {/* Heading set to font-light/normal weight */}
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light mb-4">
            Industries <span className="italic text-aurora-teal">We Serve</span>
          </h2>
          <div className="w-20 h-1 bg-aurora-teal mx-auto rounded-full"></div>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] cursor-pointer shadow-xl transition-all duration-700 hover:-translate-y-4">
              {/* IMAGE WITH HOVER ZOOM */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-90" 
              />
              
              {/* OVERLAY WITH NORMAL WEIGHT CALIBRI TEXT */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex items-end p-8">
                <div className="space-y-2">
                  <div className="w-8 h-[2px] bg-aurora-teal group-hover:w-full transition-all duration-500"></div>
                  {/* Changed font-bold to font-normal */}
                  <h3 className="text-white font-normal text-xl tracking-tight leading-tight group-hover:text-aurora-teal transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;