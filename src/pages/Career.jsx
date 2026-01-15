import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Career = () => {
  // Applying Calibri font stack for professional readability
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif' 
  };

  return (
    <div className='bg-transparent' style={calibriStyle}>
      <Navbar hideServices={true} />

      {/* Hero Section - Updated to match HR Souk Branding */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-[1.1]">
            <span className="text-aurora-teal italic font-light drop-shadow-[0_10px_30px_rgba(45,212,191,0.3)]">
              Careers
            </span>
          </h1>
        </div>
      </div>

      {/* Vacancies Section */}
      <div className="bg-white/95 backdrop-blur-3xl py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-aurora-teal"></div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold tracking-tight">
              Current <span className="italic text-aurora-teal font-light">Vacancies</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Job 1 */}
            <div className="group border-b border-slate-100 pb-10 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 transition-all hover:pl-4">
              <img
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop"
                alt="CTO Position"
                className="w-full md:w-40 h-40 object-cover rounded-[2rem] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  CTO <span className="text-aurora-teal text-lg ml-2 opacity-70 tracking-widest uppercase font-black text-[12px]">12-15 years experience</span>
                </h3>
                <p className="font-bold text-slate-700">Bachelor's degree in aerospace / mechanical / computer science, Electrical Engineering</p>
                <ul className="list-none space-y-2 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="text-aurora-teal">✦</span> Drone Expertise, Aerodynamics, Design, Sensors, Computer Vision, Autonomous Navigation, and Related Software
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-aurora-teal">✦</span> Rotor Craft, Fixed Wing UAVs from Scratch
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group border-b border-slate-100 pb-10 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 transition-all hover:pl-4">
              <img
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop"
                alt="Graphic Designer Position"
                className="w-full md:w-40 h-40 object-cover rounded-[2rem] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Graphic Designer <span className="text-aurora-teal text-lg ml-2 opacity-70 tracking-widest uppercase font-black text-[12px]">7-9 years experience</span>
                </h3>
                <p className="font-bold text-slate-700">Master/Bachelor's degree in designing or graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;