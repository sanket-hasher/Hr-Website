import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Strategy from './components/Strategy';
import ServicesGrid from './components/ServicesGrid';
import Industries from './components/Industries';
import TeamContact from './components/TeamContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-aurora-teal/30">
      <Navbar />

      <main className="space-y-0">
        {/* Each section now has a specific ID and scroll-margin */}
        <Hero />
        
        <div id="about" className="bg-transparent scroll-mt-24">
          <About />
        </div>

        <div id="why-us" className="glass-partition py-24 scroll-mt-24">
          <WhyChooseUs />
        </div>

        <div className="bg-transparent">
          <Strategy />
        </div>

        <div id="services" className="glass-partition py-24 scroll-mt-24">
          <ServicesGrid />
        </div>

        <div className="bg-transparent">
          <Industries />
        </div>

        {/* Team Section updated with provided screenshot content */}
        <div id="team" className="py-24 scroll-mt-24">
          <TeamContact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;