import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-zinc-500 h-[70vh]">
      <div className="flex items-center h-full">
        <div className="flex flex-col">
          <h1 className="text-7xl font-semibold mb-8">About us</h1>
          <div className="flex ">
            <img
              src="/path-to-your-image.jpg"
              alt="HRsouk Team"
              className="w-[350px] h-[250px] object-cover rounded-lg shadow-lg"
            />
            <div>
              <p className=" text-2xl font-medium">
                At HRsouk, we redefine Talent Acquisition, Workforce Planning,
                and HR Strategy with a tech-driven, human-first approach. By
                integrating AI-powered recruitment, data-driven decision-making,
                and digital transformation, we help organizations build agile,
                inclusive, and future-ready workforces.
              </p>
              <ul>
                <h1>Talent Acquisition & Workforce Planning</h1>
                <li>
                  AI-driven recruitment & sourcing to connect businesses with
                  top talent effortlessly. Data-powered hiring strategies to
                  reduce time-to-fill and cost-per-hire. Diversity hiring
                  initiatives that foster an inclusive and innovative workforce.
                </li>
                <h1>Employee Engagement & Culture Building</h1>
                <li>
                Tailored engagement programs to enhance productivity and employee satisfaction.
                </li>
                <li>
                  📈 HR Technology & Digital Transformation ✅ AI-powered HR
                  automation for seamless and efficient HR processes. ✅
                  Real-time workforce analytics to optimize performance and
                  decision-making. ✅ HRMS & cloud-based solutions for
                  enterprise-wide agility and scalability.
                </li>
                ⚖ HR Compliance, Policies & Best Practices ✅ Global labor law
                compliance & risk mitigation for legal security. ✅ Customized
                HR policies designed for evolving workplace needs. ✅ Ethical HR
                governance frameworks that uphold integrity and trust.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
