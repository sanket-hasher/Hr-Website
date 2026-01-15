import React from 'react';

const TeamContact = () => {
  // Calibri font stack with strictly normal weight for professional clarity
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif', 
    fontWeight: '400',
    color: '#1e293b'
  };

  return (
    <section id="team" className="py-24 bg-transparent scroll-mt-20" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Adjusted Grid: 60/40 split for better content-to-form ratio */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: NARRATIVE CONTENT (6 columns) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-aurora-teal rounded-full"></div>
              <h2 className="text-5xl md:text-6xl uppercase tracking-tighter text-slate-900 leading-none">
                Meet Our <span className="italic font-light text-aurora-teal">Team</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-slate-900 text-2xl font-normal leading-snug">
                  Aliya Ray is the Founder & Principal Consultant at HR Souk.
                </p>
                <p className="text-[18px] text-slate-600 leading-snug">
                  With 15+ years of experience across HR consulting, talent acquisition, and HR business partnering, Aliya advises organizations across IT, Engineering, Analytics, and Research on bespoke talent and people strategies, combining deep market insight with execution excellence.
                </p>
              </div>

              <p className="text-[18px] text-slate-600 leading-snug">
                At HR Souk, our team is the backbone of everything we do. We share a common vision — to simplify hiring and empower businesses with the right talent at the right time.
              </p>

              <div className="pl-8 border-l-2 border-aurora-teal/30 py-2">
                <p className="italic text-slate-500 text-xl font-normal leading-tight">
                  "Together, we make HR Souk more than a recruitment service — we are your dedicated talent partners."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PROFESSIONAL GLASS FORM (5 columns) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle ambient glow behind form */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-aurora-teal/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-3xl border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:-translate-y-2">
                <div className="mb-8">
                  <h3 className="text-xl font-normal text-slate-900 mb-2">Start a Conversation</h3>
                  <p className="text-sm text-slate-500">Respond within 24 business hours.</p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-teal/30 focus:bg-white transition-all" 
                      />
                      <input 
                        type="text" 
                        placeholder="Company" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-teal/30 focus:bg-white transition-all" 
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Official Email" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-teal/30 focus:bg-white transition-all" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-teal/30 focus:bg-white transition-all" 
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-5 mt-4 rounded-xl bg-slate-900 text-white tracking-[0.3em] uppercase text-[10px] font-normal hover:bg-aurora-teal hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.3)] transition-all duration-500 active:scale-[0.98]"
                  >
                    Schedule a Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamContact;