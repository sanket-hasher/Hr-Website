import React from 'react';

const Strategy = () => {
  const approach = [
    "Client-Centric Solutions",
    "Transparent & Ethical Processes",
    "Quality-Driven Execution",
    "Agile & Responsive Support",
    "Technology-Enabled HR"
  ];

  return (
    <section className="py-24"> {/* Removed bg-white to keep page color */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">Strategy</h2>
            <h3 className="text-4xl font-bold text-slate-900">Our Approach</h3>
          </div>
          <ul className="space-y-5">
            {approach.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-left">Core Values</h3>
          <div className="grid grid-cols-2 gap-4">
            {["Integrity", "Excellence", "Commitment", "Respect", "Innovation", "Partnership"].map((v) => (
              <div key={v} className="bg-slate-50 border border-slate-100 py-4 rounded-xl text-sm font-bold text-slate-700 text-center">
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;