import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const industries = [
  {
    title: "Information Technology",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Consulting",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Finance",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Logistics & Supply Chain",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Brand & Marketing",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Health Care",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop",
  },
];

const IndustriesWeServeSlider = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Industries We Serve
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative group">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* What We Provide */}
        <section className="bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#D4AF37]">
            What We Provide
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700 text-center">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-3">
                Operational Efficiency
              </h4>
              <p>
                We support organizations in strengthening operational efficiency
                through structured HR processes, streamlined workflows, and
                reliable execution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-3">
                Strategic Growth Support
              </h4>
              <p>
                We collaborate closely with businesses to ensure they remain
                future-ready and competitive in an evolving market landscape.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-3">
                Market & Brand Enablement
              </h4>
              <p>
                Our services extend to empowering organizations to enhance their
                market presence and achieve sustainable, long-term success.
              </p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default IndustriesWeServeSlider;
