import React from 'react';
import aliyaImg from '../assets/aliya.jpeg';

const TeamContact = () => {
  const bodyStyle = { 
    fontFamily: 'var(--font-body), sans-serif', 
    fontWeight: '400', 
    color: '#1e293b' 
  };

  return (
    <section id="team" className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* TOP SECTION: CONTENT LEFT | IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-16">
          
          <div className="lg:w-3/5">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight uppercase">
                Meet Our <span className="text-aurora-teal">Team</span>
              </h2>
            </div>

            <div className="space-y-6" style={bodyStyle}>
              <p className="text-xl text-slate-900 font-medium leading-snug">
                Aliya Ray is the Founder at HR Souk.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-[17px] opacity-90">
                At HR Souk, we believe that people are the heart of every successful business. We're dedicated to helping you build engaged, productive, and thriving workplaces through tailored, innovative HR solutions.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-[17px] opacity-90">
                With decades of collective HR experience, we partner with organizations of all sizes to cultivate a strong company culture that drives results.
              </p>

              <div className="pt-4 border-l-4 border-aurora-teal pl-6">
                <p className="italic text-slate-500 text-base tracking-wide">
                  HR Souk: People-Centered Solutions
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="lg:w-[32%] w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[2.5rem] translate-x-2 translate-y-2"></div>
              
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border border-white/20 aspect-[4/5] bg-slate-50/50">
                <img 
                  src={aliyaImg} 
                  alt="Aliya Ray" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pt-12 pb-6 px-6 text-right">
                  <p className="text-white text-lg font-serif tracking-wide leading-none mb-1">
                    Aliya Ray
                  </p>
                  <p className="text-aurora-teal text-[9px] font-bold tracking-[0.2em] uppercase opacity-90">
                    Founder of HR Souk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REFINED COMPACT CONTACT FORM */}
        <div className="relative">
          <div className="absolute inset-0 bg-slate-900 rounded-[3rem] shadow-2xl"></div>
          
          {/* Reduced vertical padding from p-16 to py-10 to decrease height */}
          <div className="relative p-8 md:py-10 md:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl text-white font-serif mb-2">Start a Conversation</h3>
                <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase">Collaborate with us</p>
              </div>

              {/* Tighter grid and reduced spacing */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Company"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Official Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500"
                  />
                </div>

                <textarea 
                  placeholder="How can we help?"
                  rows="3"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all resize-none placeholder:text-slate-500"
                ></textarea>
                
                <div className="flex justify-center pt-2">
                  <button className="bg-aurora-teal hover:bg-white text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] px-10 py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-aurora-teal/20">
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TeamContact;
