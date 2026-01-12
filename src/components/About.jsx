import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual with Blurry Overlay */}
          <div className="relative group">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Our Office"
              />
            </div>
            {/* Blurry Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-aurora-teal/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 text-obsidian">
              <p className="text-5xl font-black">10+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-aurora-teal font-black tracking-[0.3em] uppercase text-xs">About Us</h2>
            <h3 className="text-5xl font-black text-obsidian leading-tight">Company Overview</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              At HRSouk, we believe people are an organization's strongest asset. Our mission is to empower businesses with the right talent and streamlined HR systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-aurora-teal transition-colors">
                <h4 className="font-black text-obsidian mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500 italic">To be a trusted partner delivering smart, efficient solutions.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-aurora-teal transition-colors">
                <h4 className="font-black text-obsidian mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500 italic">Bridge the gap between talent and opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;