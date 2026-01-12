import React from 'react';

const TeamSection = () => {
  const team = [
    { name: "Sanket Hasher", role: "Managing Partner", img: "https://i.pravatar.cc/300?img=12" },
    { name: "Sarah Jenkins", role: "Lead Recruiter", img: "https://i.pravatar.cc/300?img=45" },
    { name: "Michael Chen", role: "Strategy Director", img: "https://i.pravatar.cc/300?img=53" },
    { name: "Emma Rodriguez", role: "Operations Lead", img: "https://i.pravatar.cc/300?img=32" },
  ];

  return (
    <section className="bg-slate-50 py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900">Meet the Experts Behind Your Success</h3>
          </div>
          <p className="text-slate-500 max-w-xs text-sm">Our team consists of industry veterans with over a decade of experience in Indian and global markets.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Team Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form with Professional Elevation */}
          <div className="bg-slate-900 p-10 rounded-2xl shadow-2xl h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-2">Schedule Now</h3>
            <p className="text-slate-400 text-sm mb-8">Request a callback from our consultants within 24 hours.</p>
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Business Email" className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <textarea placeholder="Tell us about your needs" rows="4" className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-500/10">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;