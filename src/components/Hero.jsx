import React from "react";

const Hero = () => {
  return (
    <div className="bg-black min-h-[80vh] py-16 px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6 text-white">
          <h1 className="text-6xl font-bold ">About Us</h1>
          <p className="text-xl  leading-relaxed">
            At <span className="font-semibold">HRsouk</span>, we redefine Talent Acquisition, Workforce Planning, 
            and HR Strategy with a tech-driven, human-first approach. By integrating AI-powered recruitment, 
            data-driven decision-making, and digital transformation, we help organizations build agile, 
            inclusive, and future-ready workforces.
          </p>
          <img
            src="https://images.unsplash.com/photo-1738566495610-8385ed595473?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HRsouk Team"
            className="w-full max-w-[450px] rounded-lg shadow-xl"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-gray-900">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🎯 Talent Acquisition & Workforce Planning
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ AI-driven recruitment & sourcing to connect businesses with top talent effortlessly.</li>
              <li>✅ Data-powered hiring strategies to reduce time-to-fill and cost-per-hire.</li>
              <li>✅ Diversity hiring initiatives that foster an inclusive and innovative workforce.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🌟 Employee Engagement & Culture Building
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Tailored engagement programs to enhance productivity and employee satisfaction.</li>
              <li>✅ Leadership development & succession planning to future-proof organizations.</li>
              <li>✅ Recognition & rewards frameworks to drive performance and workplace happiness.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📈 HR Technology & Digital Transformation
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ AI-powered HR automation for seamless and efficient HR processes.</li>
              <li>✅ Real-time workforce analytics to optimize performance and decision-making.</li>
              <li>✅ HRMS & cloud-based solutions for enterprise-wide agility and scalability.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ⚖ HR Compliance, Policies & Best Practices
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Global labor law compliance & risk mitigation for legal security.</li>
              <li>✅ Customized HR policies designed for evolving workplace needs.</li>
              <li>✅ Ethical HR governance frameworks that uphold integrity and trust.</li>
            </ul>
          </div>

          <p className="text-lg font-medium text-gray-800">
            🚀 <span className="font-semibold">Our Mission and Vision</span> content will be added later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
