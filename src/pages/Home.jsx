import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  const servicesRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // Function to scroll and update tab
  const scrollToServices = (tabIndex) => {
    setActiveTab(tabIndex);
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  
    <div className='bg-gradient-to-l from-black to-blue-900'>
    <Navbar scrollToServices={scrollToServices} />
      <Hero />
      <Services refProp={servicesRef} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
};

export default Home;
