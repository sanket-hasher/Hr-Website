import React from 'react';
import { ShieldCheck, Target, Heart, Award, Lightbulb, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    { 
      title: "Partnership", 
      icon: <Users size={32} />, 
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Integrity", 
      icon: <ShieldCheck size={32} />, 
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Excellence", 
      icon: <Award size={32} />, 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Respect", 
      icon: <Heart size={32} />, 
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      title: "Commitment", 
      icon: <Target size={32} />, 
      /* NEW IMAGE: Added specific professional commitment/handshake image */
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=400" 
    },
    
    { 
      title: "Evoluation", 
      icon: <Lightbulb size={32} />, 
      /* UPDATED IMAGE: Professional high-tech collaboration image for Innovation */
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
    }
    
  ];

  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400'
  };

  return (
    /* Maintained pt-12 and pb-12 for consistent section rhythm */
    <section id="core-values" className="pt-12 pb-12 bg-transparent scroll-mt-24" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light tracking-tight uppercase">
            Our Core <span className="text-aurora-teal">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="group relative h-56 cursor-default rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2">
              
              {/* Background Image Layer with Grayscale Transition */}
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-aurora-teal/20 transition-colors duration-700"></div>
              </div>

              {/* Content Overlay - Centered horizontally and vertically */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-aurora-teal mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                  {v.icon}
                </div>
                
                <h4 className="text-white uppercase tracking-[0.4em] text-[16px] font-bold group-hover:text-aurora-teal transition-colors duration-500">
                  {v.title}
                </h4>
                
                {/* Accent bar that expands on hover */}
                <div className="mt-4 w-8 h-[1px] bg-white/30 group-hover:w-16 group-hover:bg-white transition-all duration-700"></div>
              </div>

              {/* Subtle Glowing Border on Hover */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-aurora-teal/50 rounded-[2rem] transition-colors duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;