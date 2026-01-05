import React from "react";

const About = () => {
  const services = [
    {
      title: "Talent Acquisition & Workforce Planning",
      points: [
        "AI-driven recruitment & sourcing to connect businesses with top talent.",
        "Data-powered hiring strategies to reduce time-to-fill and cost-per-hire.",
        "Diversity hiring initiatives that foster inclusive workplaces.",
      ],
      borderColor: "border-pink-500",
      iconBg: "bg-pink-200",
      iconColor: "text-pink-700",
    },
    {
      title: "Employee Engagement & Culture Building",
      points: [
        "Tailored engagement programs to enhance productivity.",
        "Leadership development & succession planning.",
        "Recognition & rewards frameworks for high performance.",
      ],
      borderColor: "border-green-500",
      iconBg: "bg-green-200",
      iconColor: "text-green-700",
    },
    {
      title: "HR Technology & Digital Transformation",
      points: [
        "AI-powered HR automation.",
        "Real-time workforce analytics.",
        "HRMS & cloud-based HR solutions.",
      ],
      borderColor: "border-blue-500",
      iconBg: "bg-blue-200",
      iconColor: "text-blue-700",
    },
    {
      title: "HR Compliance, Policies & Best Practices",
      points: [
        "Global labor law compliance.",
        "Customized HR policies.",
        "Ethical HR governance frameworks.",
      ],
      borderColor: "border-yellow-500",
      iconBg: "bg-yellow-200",
      iconColor: "text-yellow-700",
    },
  ];

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          About Us
        </h1>

        {/* Image + Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="HRSouk Team"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 leading-relaxed">
            <p>
              <span className="text-[#D4AF37] font-semibold">HRSouk</span> is a
              dedicated HR solutions partner focused on simplifying and
              strengthening how organizations manage their people.
            </p>
            <p>
              Built on a foundation of expertise, trust, and efficiency, we
              deliver comprehensive HR services tailored to modern businesses
              across industries.
            </p>
            <p>
              We act as an extension of your in-house team—ensuring seamless
              hiring workflows, structured HR processes, and consistent support
              for employers and candidates alike.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <section>
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Company Overview
          </h2>
          <p>
            At HRSouk, we believe people are an organization’s strongest asset.
            Our mission is to empower businesses with the right talent,
            streamlined HR systems, and actionable insights that enable growth
            with confidence.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#7A0F2A] p-6 rounded-xl border-l-4 border-[#D4AF37]">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-[#CFC6BC]">
              To be a trusted HR partner delivering smart, efficient, and
              people-centric workforce solutions where talent thrives.
            </p>
          </div>

          <div className="bg-[#7A0F2A] p-6 rounded-xl border-l-4 border-[#D4AF37]">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Mission
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[#CFC6BC]">
              <li>Deliver reliable and tailored HR services.</li>
              <li>Bridge the gap between talent and opportunity.</li>
              <li>Leverage technology to enhance HR operations.</li>
              <li>Build long-term partnerships based on trust.</li>
            </ul>
          </div>
        </section>

        {/* Approach & Values */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-5">
              Our Approach
            </h3>
            <ul className="space-y-3">
              <li>✔ Client-Centric Solutions</li>
              <li>✔ Transparent & Ethical Processes</li>
              <li>✔ Quality-Driven Execution</li>
              <li>✔ Agile & Responsive Support</li>
              <li>✔ Technology-Enabled HR</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-5">
              Our Values
            </h3>
            <div className="grid grid-cols-2 gap-4 text-[#CFC6BC]">
              {[
                "Integrity",
                "Excellence",
                "Commitment",
                "Respect",
                "Innovation",
                "Partnership Mindset",
              ].map((value, index) => (
                <span
                  key={index}
                  className="bg-[#7A0F2A] px-4 py-2 rounded-lg text-center"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="grid sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border-b-4 ${service.borderColor}
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${service.iconBg}`}>
                  <span className={`text-xl ${service.iconColor}`}>📌</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>
              </div>

              <ul className="space-y-2 text-gray-700 text-sm">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

      </div>
    </section>
  );
};

export default About;
