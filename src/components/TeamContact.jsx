import React from 'react';

const TeamContact = () => {
  // Applying Calibri font at 14px for body text and Slate-800 for professional readability
  const calibriStyle = { 
    fontFamily: 'Calibri, sans-serif', 
    fontSize: '14px', 
    color: '#1e293b' 
  };

  return (
    <section id="team" className="py-10 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT COLUMN: TEAM CONTENT */}
          <div className="lg:w-1/2 space-y-8">
            <div className="w-12 h-[3px] bg-aurora-teal"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-bold uppercase tracking-tight">
              Meet Our <span className="italic font-light text-aurora-teal">Team</span>
            </h2>
            
            <div className="space-y-6 leading-relaxed">
              {/* FOUNDER BIO */}
              <div className="space-y-4">
                <p className="font-bold text-slate-900 text-lg leading-snug">
                  Aliya Ray is the Founder & Principal Consultant at HR Souk.
                </p>
                <p className="opacity-90">
                  With 15+ years of experience across HR consulting, talent acquisition, and HR business partnering, Aliya advises organizations across IT, Engineering, Analytics, and Research on bespoke talent and people strategies, combining deep market insight with execution excellence.
                </p>
              </div>

              {/* GENERAL TEAM MISSION */}
              <p className="opacity-90">
                At HR Souk, our team is the backbone of everything we do. We share a common vision — to simplify hiring and empower businesses with the right talent at the right time.
              </p>

              {/* QUOTE BLOCK */}
              <div className="pl-6 border-l-4 border-aurora-teal py-2 bg-aurora-teal/5">
                <p className="italic font-bold text-slate-900">
                  "Together, we make HR Souk more than a recruitment service — we are your dedicated talent partners."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:w-1/2 w-full pt-10 lg:pt-0">
            <div className="p-10 md:p-12 rounded-[3rem] bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200/40 text-sm focus:outline-none focus:border-aurora-teal/50 transition-all" 
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200/40 text-sm focus:outline-none focus:border-aurora-teal/50 transition-all" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Official Email" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200/40 text-sm focus:outline-none focus:border-aurora-teal/50 transition-all" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone No" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200/40 text-sm focus:outline-none focus:border-aurora-teal/50 transition-all" 
                />
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black tracking-[0.4em] uppercase text-[10px] hover:bg-aurora-teal transition-all duration-500 shadow-lg"
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