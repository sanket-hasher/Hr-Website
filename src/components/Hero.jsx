import React from "react";

const Hero = () => {
  const services = [
    {
      title: "Talent Acquisition & Workforce Planning",
      points: [
        "✅ AI-driven recruitment & sourcing to connect businesses with top talent effortlessly.",
        "✅ Data-powered hiring strategies to reduce time-to-fill and cost-per-hire.",
        "✅ Diversity hiring initiatives that foster an inclusive and innovative workforce.",
      ],
      borderColor: "border-pink-500",
      iconBg: "bg-pink-200",
      iconColor: "text-pink-700",
    },
    {
      title: "Employee Engagement & Culture Building",
      points: [
        "✅ Tailored engagement programs to enhance productivity and employee satisfaction.",
        "✅ Leadership development & succession planning to future-proof organizations.",
        "✅ Recognition & rewards frameworks to drive performance and workplace happiness.",
      ],
      borderColor: "border-green-500",
      iconBg: "bg-green-200",
      iconColor: "text-green-700",
    },
    {
      title: "HR Technology & Digital Transformation",
      points: [
        "✅ AI-powered HR automation for seamless and efficient HR processes.",
        "✅ Real-time workforce analytics to optimize performance and decision-making.",
        "✅ HRMS & cloud-based solutions for enterprise-wide agility and scalability.",
      ],
      borderColor: "border-blue-500",
      iconBg: "bg-blue-200",
      iconColor: "text-blue-700",
    },
    {
      title: "HR Compliance, Policies & Best Practices",
      points: [
        "✅ Global labor law compliance & risk mitigation for legal security.",
        "✅ Customized HR policies designed for evolving workplace needs.",
        "✅ Ethical HR governance frameworks that uphold integrity and trust.",
      ],
      borderColor: "border-yellow-500",
      iconBg: "bg-yellow-200",
      iconColor: "text-yellow-700",
    },
  ];

  return (
    <div className="bg-gradient-to-l from-black to-blue-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 md:px-8">
        
        {/* Left Section */}
        <div className="space-y-6 text-white w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">HRsouk</span>, we redefine Talent Acquisition, Workforce Planning, 
            and HR Strategy with a tech-driven, human-first approach. By integrating AI-powered recruitment, 
            data-driven decision-making, and digital transformation, we help organizations build agile, 
            inclusive, and future-ready workforces.
          </p>
          <img
            src="https://images.unsplash.com/photo-1738566495610-8385ed595473?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HRsouk Team"
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        {/* Right Section - Services */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-5 rounded-xl shadow-lg border-b-4 ${service.borderColor} transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-full ${service.iconBg}`}>
                  <span className={`text-xl ${service.iconColor}`}>📌</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
