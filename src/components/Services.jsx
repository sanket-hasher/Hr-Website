import React from 'react'
import { useState } from "react";

const tabs = [
    {
      title: "Talent Management and Hiring",
      content: `We take pride in our dedicated team of over 70 recruiters catering to Pan India and Global recruitment needs. Specializing in leadership, executive, and niche hiring, we focus on industry-specific expertise. Our services serve clients in IT and Product Engineering, covering diverse sectors such as Sales, BFSI, Media Entertainment, Telecom, E-commerce/Internet, Analytics, Security, Aerospace, Semiconductor, Automotive, Consumer, and beyond.
  
  Campus Recruitment: Our dedicated team specializes in assisting organizations with Campus Recruitment, focusing on hiring fresh and diverse candidates.
  
  HR Engagement: Our HR Engagement team is committed to working decisively for clients, establishing a strategic platform for Performance Management, Succession Planning, Compensation & Benefits, Employee Relations Building, Policy and Guidelines Management, and Employee Rewards Programs.`
    },
    {
      title: "HRMS Software People Analytics",
      content: `Our tailored HRMS software caters to clients with headcounts between 100 and 5000+, offering comprehensive solutions from Recruitment to Employee Lifecycle Management, Onboarding, Background Verification, and Learning Management. While our initial focus is on Pan India, we plan to expand into the Global market soon. Additionally, we excel in people analytics, providing structured market and industry mapping from a data-driven viewpoint.`
    },
    {
      title: "Payroll and Compliance",
      content: "Our Payroll and Compliance Services encompass a range of activities, including Data Migration and Verification, Monthly Payroll Processing, Monthly Interns Payout Processing, Employee Self-Help Portal and Help-Desk, FFS Process, TDS, ETDS Returns, Issuing Form No.16, MIS and Reports, and many more"
    },
    {
      title: "Learning & Development",
      content: "Our Learning and Development (L&D) team excels in offering training across five modules. We specialize in…."
    },
    {
      title: "Transformation and Engagement",
      content: "We constantly help organisation to ace the space of employee growth apart from Learning capabilities. Employee engagement is one of the important factors for organisation development. Have helped organisation is setting Value Awards, Passion Club, Orators Club where an individual can transform self and look forward in achieving their goal in alignment to Organisation goals. Created teams like LGBTQ and Physical groups to add diversity ."
    }
  ];

const Services = () => {

    const [activeTab, setActiveTab] = useState(0);

  
  return (
    <div className='min-h-[70vh] flex justify-center items-center  bg-black'>
        <div className='flex flex-col justify-center items-center  text-center'>
        <div className="max-w-4xl mx-auto p-4">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition-all duration-300 ease-in-out ${
              activeTab === index ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-100 mt-4 rounded-md shadow-md">
        <p className="text-gray-700 whitespace-pre-line">{tabs[activeTab].content}</p>
      </div>
    </div>
        </div>
       
    </div>
  )
}

export default Services