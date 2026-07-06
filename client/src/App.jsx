import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import BackgroundDecor from './components/BackgroundDecor';

/**
 * App Component
 * 
 * Assembles the corporate website redesign prototype, starting with the Hero Section.
 * Configures the viewport wrapper with the dynamic mesh gradient background that adapts
 * to light and dark modes.
 */
function App() {
  const [contactSubject, setContactSubject] = useState('Software Development');

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-300 mesh-gradient">

      {/* Premium background design ornaments (blueprint grids, orbiting glows, dials) */}
      <BackgroundDecor />

      {/* Sticky top navigation header */}
      <Navbar />
      
      {/* Main content body containing the Hero, Services, and Contact Sections */}
      <main className="w-full">
        <HeroSection />
        <ServicesSection onSelectService={setContactSubject} />
        <ContactSection contactSubject={contactSubject} />
      </main>
    </div>
  );
}

export default App;
