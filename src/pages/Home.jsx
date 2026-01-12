import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import TeamSection from '@/components/TeamSection';

const Home = () => {
  const servicesRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // Function to scroll and update tab
  const scrollToServices = (tabIndex) => {
    setActiveTab(tabIndex);
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  
    <div>
    <Navbar scrollToServices={scrollToServices} />
      <Hero/>
      <About />
      <WhyChooseUs/>
      <Services refProp={servicesRef} activeTab={activeTab} setActiveTab={setActiveTab} />
       <IndustriesWeServe/>
       <TeamSection/>
      <Footer />
    </div>
  );
};

export default Home;
