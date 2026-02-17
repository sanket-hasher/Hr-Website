import React from 'react';
import { Users, Scale, CheckCircle2, Zap, MonitorSmartphone } from 'lucide-react';
import handshakeImg from '../assets/img1.jpg.jpeg';

const WhyChooseUs = () => {
  const features = [
    { title: "Client-Centric Solutions", icon: <Users size={40} strokeWidth={1.2} />, bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400" },
    { title: "Transparent & Ethical Processes", icon: <Scale size={40} strokeWidth={1.2} />, bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400" },
    { title: "Quality-Driven Execution", icon: <CheckCircle2 size={40} strokeWidth={1.2} />, bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
    { title: "Agile & Responsive Support", icon: <Zap size={40} strokeWidth={1.2} />, bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" },
    { title: "Technology-Enabled HR", icon: <MonitorSmartphone size={40} strokeWidth={1.2} />, bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" }
  ];

  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400' 
  };

  return (
    /* REDUCED pb-24 to pb-0 TO ELIMINATE THE GAP */
    <section id="why-us" className="pt-4 pb-0 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* REDUCED mb-24 to mb-12 TO BRING CARDS UP */}
        <div className="relative mb-12 py-20 text-center overflow-hidden rounded-[3.5rem] shadow-2xl group">
          <div className="absolute inset-0 z-0">
            <img 
              src={handshakeImg} 
              alt="Professional Handshake"
              className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif text-white font-light tracking-tight">
              Why <span className="text-aurora-teal">Choose Us</span>
            </h2>
            <div className="mt-6 w-24 h-[2px] bg-aurora-teal mx-auto rounded-full group-hover:w-48 transition-all duration-700"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group relative h-[320px] cursor-pointer">
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[2.5rem] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700"></div>
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl transition-all duration-700 group-hover:-translate-y-3 border border-white/10">
                <img src={f.bgImage} alt={f.title} className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:from-aurora-teal/80 group-hover:via-slate-900/60 transition-all duration-700"></div>
                
                {/* CHANGED justify-end TO justify-center FOR CENTERING */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                  <div className="relative z-10 space-y-4">
                    <div className="text-aurora-teal group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 flex justify-center">{f.icon}</div>
                    <div className="w-12 h-[2px] bg-white group-hover:w-full transition-all duration-700 mx-auto"></div>
                    <h4 className="text-white text-[16px] uppercase tracking-[0.2em] leading-tight transition-colors font-medium">{f.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;