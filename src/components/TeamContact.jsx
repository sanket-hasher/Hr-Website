import React from 'react';

const TeamContact = () => {
  // Calibri font stack for elite professional consistency
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif', 
    fontWeight: '400',
    color: '#1e293b'
  };

  return (
    <section id="team" className="py-24 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: NARRATIVE CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-aurora-teal rounded-full"></div>
              <h2 className="text-5xl md:text-6xl uppercase tracking-tighter text-slate-900 leading-none font-normal">
                Meet Our <span className="italic font-light text-aurora-teal">Team</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-slate-900 text-2xl font-normal leading-snug">
                  Aliya Ray is the Founder at HR Souk.
                </p>
                <p className="text-[18px] text-slate-600 leading-snug">
                  At HR Souk, we believe that people are the heart of every successful business.  We're dedicated to helping you build engaged, productive, and thriving workplaces through tailored, innovative HR solutions. With decades of collective HR experience, we partner with organizations of all sizes to cultivate a strong company culture that drives results.
                </p>
              </div>

              <div className="pl-8 border-l-2 border-aurora-teal/30 py-2">
                <p className="italic text-slate-500 text-xl font-normal leading-tight">
                  HR Souk: People-Centered Solutions 
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REIMAGINED VIBRANT FORM */}
          <div className="lg:col-span-5 relative group">
            {/* Background Offset Card (Depth effect matching Vision/Mission cards) */}
            <div className="absolute inset-0 bg-aurora-teal/20 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>
            
            {/* Main Gradient Form Card */}
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900 shadow-2xl overflow-hidden border border-white/10">
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-aurora-teal/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-serif text-white font-normal mb-2">Start a Conversation</h3>
              </div>

              <form className="relative z-10 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-aurora-teal/50 focus:bg-white/10 transition-all" 
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-aurora-teal/50 focus:bg-white/10 transition-all" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Official Email" 
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-aurora-teal/50 focus:bg-white/10 transition-all" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-aurora-teal/50 focus:bg-white/10 transition-all" 
                />
                
                <button 
                  type="submit"
                  className="w-full py-5 mt-4 rounded-xl bg-aurora-teal text-slate-900 tracking-[0.3em] uppercase text-[10px] font-bold hover:bg-white transition-all duration-500 shadow-[0_15px_30px_-10px_rgba(45,212,191,0.5)] active:scale-[0.98]"
                >
                  Schedule a Consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamContact;