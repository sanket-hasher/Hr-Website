import React from 'react';
import aliyaImg from '../assets/aliya.jpeg';

const TeamContact = () => {
  const bodyStyle = { 
    fontFamily: 'var(--font-body), sans-serif', 
    fontWeight: '400', 
    color: '#1e293b' 
  };

  return (
    <section id="team" className="pt-12 pb-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Text Content + Form */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <div className="mb-4">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-light leading-tight uppercase">
                  Meet Our <span className="text-aurora-teal">Team</span>
                </h2>
              </div>

              <div className="space-y-4" style={bodyStyle}>
                <p className="text-slate-700 leading-relaxed text-[17px] opacity-90">
                  At HR Souk, we believe that people are the heart of every successful business. We're dedicated to helping you build engaged, productive, and thriving workplaces through tailored, innovative HR solutions.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-[17px] opacity-90">
                  With decades of collective HR experience, we partner with organizations of all sizes to cultivate a strong company culture that drives results.
                </p>

                <div className="pt-2 border-l-4 border-aurora-teal pl-6">
                  <p className="italic text-slate-500 text-base tracking-wide">
                    HR Souk: People-Centered Solutions
                  </p>
                </div>
              </div>

              {/* CONTACT FORM - Adjusted padding and vertical spacing for better alignment */}
              <div className="relative mt-8 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden p-6 md:py-10 md:px-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl text-white font-serif mb-0.5">Start a Conversation</h3>
                  <p className="text-aurora-teal text-[9px] tracking-[0.3em] uppercase">Collaborate with us</p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-2.5 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500" />
                    <input type="text" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-2.5 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="email" placeholder="Official Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-2.5 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-2.5 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all placeholder:text-slate-500" />
                  </div>
                  <textarea placeholder="How can we help?" rows="1" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-2.5 text-white text-sm focus:outline-none focus:border-aurora-teal transition-all resize-none placeholder:text-slate-500"></textarea>
                  
                  <div className="flex justify-center pt-2">
                    <button className="w-full bg-aurora-teal hover:bg-white text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] py-3.5 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-aurora-teal/20">
                      Schedule Consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CROPPED IMAGE FROM BOTTOM */}
          <div className="lg:w-2/5 w-full">
            <div className="relative group max-h-[580px]">
              {/* Depth Shadow */}
              <div className="absolute inset-0 bg-aurora-teal/10 rounded-[3rem] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-700 blur-sm"></div>
              
              <div className="relative h-full overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img 
                  src={aliyaImg} 
                  alt="Aliya Ray" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Name Tag Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent pt-20 pb-8 px-8 text-right">
                  <p className="text-white text-2xl font-serif tracking-wide leading-none mb-1">
                    Aliya Ray
                  </p>
                  <p className="text-aurora-teal text-[10px] font-bold tracking-[0.3em] uppercase opacity-90">
                    Founder of HR Souk
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamContact;