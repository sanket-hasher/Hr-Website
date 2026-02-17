import React from 'react';

const About = () => {
  // Professional body font style (Plus Jakarta Sans)
  const bodyStyle = { 
    fontFamily: 'var(--font-body), sans-serif', 
    fontWeight: '400',
    color: '#1e293b'
  };

  // Specific style for "The Foundation" in Calibri
  const calibriBodyStyle = {
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400'
  };

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="lg:w-[60%] space-y-8">
            <div className="space-y-4">
              {/* "The Foundation" with reduced letter spacing */}
              <span 
                className="text-aurora-teal tracking-[0.1em] uppercase text-[18px] block" 
                style={calibriBodyStyle}
              >
                The Foundation
              </span>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight">
                Built on our <span className="text-aurora-teal">Core Values</span>
              </h2>
            </div>
            
            {/* Body text in Plus Jakarta Sans */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-[16px] md:text-[17px]" style={bodyStyle}>
              <p className="opacity-90">
                HRSouk is a dedicated HR solutions platform delivering streamlined, practical, and people-centric services for modern businesses.
              </p>
              
              <p className="opacity-90">
                Guided by the belief that the right talent transforms organizations, we provide efficient Recruitment Support, HR Consulting, Onboarding Assistance, and Workforce Management.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE - Size reduced to match content height */}
          <div className="lg:w-[35%] w-full mt-10 lg:mt-0">
            <div className="relative group">
              {/* Decorative background depth layer */}
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[2rem] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700"></div>
              
              {/* Main Image Container - Reduced aspect ratio and rounding to scale with text */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[5/4] shadow-xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern architectural pillars" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;