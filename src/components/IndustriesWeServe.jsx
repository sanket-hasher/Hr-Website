import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    { title: "Education", image: "https://images.unsplash.com/photo-1523050853023-8355af4c09a3?auto=format&fit=crop&q=80&w=400" },
    { title: "Logistics & Supply Chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" },
    { title: "Healthcare", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400" },
    { title: "IT & Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;