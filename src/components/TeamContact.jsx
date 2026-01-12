import React from 'react';

const TeamContact = () => {
  return (
    <section id="team" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/40 p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Fixed Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] lg:aspect-auto lg:h-[550px]">
              {/* Professional Team Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                alt="HR Souk Team Collaboration"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x800/e2e8f0/64748b?text=HR+Souk+Team";
                }}
              />
              {/* Elite Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-aurora-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl font-serif font-black text-slate-900 mb-2 uppercase tracking-tight">Meet Our Team</h2>
            <div className="w-20 h-1.5 bg-aurora-teal mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="font-bold text-lg text-slate-900">
                At HR Souk, our team is the backbone of everything we do. We are a diverse group of HR professionals, talent acquisition specialists, and workforce strategists who share a common vision — to simplify hiring and empower businesses with the right talent at the right time.
              </p>
              
              <p className="text-sm">
                Each member of our team brings deep domain expertise across industries such as IT, Engineering, Aviation, Healthcare, Finance, and other sector recruitment in the GCC region. With a blend of experience, precision, and people-first approach, we work closely with clients to understand their needs and deliver solutions that truly fit.
              </p>
              
              <p className="text-sm">
                What sets the HR Souk team apart is our commitment to integrity, transparency, and long-term partnerships. We believe in nurturing relationships, not transactions. Whether it's a challenging niche role, large-scale hiring, or strategic HR advisory, our team works with passion, agility, and attention to detail.
              </p>
              
              <p className="font-bold text-slate-900 italic border-l-4 border-aurora-teal pl-4 py-2">
                Together, we make HR Souk more than a recruitment service — we are your dedicated talent partners, helping your organization grow stronger every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;