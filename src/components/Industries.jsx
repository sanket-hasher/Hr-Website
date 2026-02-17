import React from 'react';

const Industries = () => {
  const industryList = [
    { name: "Finance & Tech", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
    { name: "Logistics & Supply Chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" },
    { name: "Tech & AI Consulting", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" },
    { name: "Research & Analytics", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80" },
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" }
  ];

  const calibriStyle = { 
    fontFamily: 'Calibri, sans-serif' 
  };

  return (
    /* UPDATED: pt-12 and pb-12 for consistent spacing across all sections */
    <section id="industries" className="pt-12 pb-12 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light">
            Industries <span className="text-aurora-teal">We Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industryList.map((industry, index) => (
            <div key={index} className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4">
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              
              {/* CONTENT OVERLAY: Maintained center alignment as requested */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-aurora-teal transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;