import React, { useState, useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const tabs = [
  {
    title: "Talent Acquisition & Workforce Planning",
    content: {
      content_1: `Effective HR begins with hiring the right people at the right time.`,
      content_2: `Talent Acquisition focuses on attracting skilled candidates through strategic sourcing, employer branding, and a smooth recruitment process.`,
      content_3: `Workforce Planning ensures alignment between business goals and staffing needs by analysing future skill requirements, forecasting talent gaps, and building a sustainable talent pipeline. Together, they help organizations grow with confidence and agility.`,
      content_4: `AI-driven recruitment sourcing to connect businesses with top talent eīortlessly.`,
      content_5: `Diversity hiring initiatives that foster an inclusive and innovative workforce`
    }

  },
  {
    title: "Employee Engagement & Culture Building",
    content: {
      content_1: `Tailored engagement programs to enhance productivity and employee satisfaction.`,
      content_2: `Leadership development succession planning to future-proof organizations`,
      content_3: `Recognition rewards frameworks to drive performance and workplace happiness.`,
      content_4: `Culture Building creates a shared sense of purpose, promotes collaboration, and strengthens organizational identity. These efforts reduce attrition, improve productivity, and foster long-term loyalty.`
    }

  },
  {
    title: "HR Technology & Digital Transformation",
    content: {
      content_1: `Modern HR services leverage technology to streamline processes and enhance the employee experience.`,
      content_2: `From HRMS and ATS platforms to analytics-driven dashboards, digital tools help automate routine tasks, improve decision-making, and empower employees with self-service solutions.`,
      content_3: `HR Digital Transformation enables smarter workflows, data-backed strategies, and an agile approach to managing the entire employee lifecycle.`
    }

  },
  {
    title: "HR Compliance, Policies & Best Practice",
    content: {
      content_1: `Compliance is the foundation of a responsible and ethical workplace. This includes developing clear HR policies, ensuring adherence to labour laws, and conducting regular audits to maintain organizational integrity.`,
      content_2: `Best practices such as transparent communication, fair performance management, and strong governance frameworks help minimize risk while creating a safe, inclusive, and compliant environment for all.`
    }

  }
];

const Services = ({ refProp, activeTab, setActiveTab }) => {
  const safeActiveTab = activeTab >= 0 && activeTab < tabs.length ? activeTab : 0;

  return (
    <div ref={refProp} className="min-h-screen bg-[#7A0F2A] text-[#D4AF37] flex justify-center items-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-center mb-4 text-4xl md:text-7xl font-semibold">Our Services</h1>
        <div className="hidden md:flex flex-col items-center text-center">
          <div className="flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-4 text-sm font-medium border-b-2 transition-all duration-300 ease-in-out ${safeActiveTab === index ? "border-#D4AF37 text-#D4AF37" : "border-transparent text-[#CFC6BC]"
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4 bg-gray-100 mt-4 rounded-md shadow-md w-full text-gray-700">
            <div className="space-y-2">
              {Object.values(tabs[safeActiveTab].content).map((text, i) => (
                <div className="flex gap-2 text-start items-center font-semibold" key={i}>
                  <p className="text-green-500"><FaCircleCheck /></p>
                  <p>{text}</p>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden bg-white text-gray-800"
            >
              <button
                className="w-full text-left px-4 py-3 font-medium border-b border-gray-200"
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
              {activeTab === index && (
                <div className="px-4 py-3 text-sm">
                  <div className="space-y-2">
                    {Object.values(tab.content).map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>


                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
