import React from 'react';

const Services = () => {
  const solutions = [
    { title: "Recruitment Tech", icon: "🤝" },
    { title: "Payroll Systems", icon: "📊" },
    { title: "Employee Wellness", icon: "🌱" },
    { title: "Training & Compliance", icon: "🎓" },
    { title: "Performance Management", icon: "📈" },
    { title: "Workforce Planning", icon: "🗓️" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-10">Discover Your Solutions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutions.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-sm font-bold text-slate-700 leading-tight">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;