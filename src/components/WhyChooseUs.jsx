import React from "react";

const features = [
  {
    title: "Experienced HR Professionals",
    description:
      "Our team consists of experienced HR professionals delivering reliable and professional services tailored to your needs.",
    icon: "👥",
  },
  {
    title: "Pan-India & Global Support",
    description:
      "We provide seamless HR support across India and globally, ensuring consistency and compliance everywhere.",
    icon: "🌍",
  },
  {
    title: "Quick Turnaround with Quality",
    description:
      "We ensure fast delivery without compromising on quality, helping you stay ahead in a competitive market.",
    icon: "⚡",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-7xl text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-black">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
