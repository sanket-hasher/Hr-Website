import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import VisionMission from './components/VisionMission';
import Industries from './components/Industries';
import CoreValues from './components/CoreValues';
import TeamContact from './components/TeamContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-aurora-teal/30">
      <Navbar />
      {/* Reduced vertical gaps globally */}
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <WhyChooseUs />
        <VisionMission />
        <Industries />
        <CoreValues />
        <TeamContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;