import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BackgroundDecor from './components/BackgroundDecor';

/**
 * App Component
 * 
 * Assembles the corporate website redesign prototype, starting with the Hero Section.
 * Configures the viewport wrapper with the dynamic mesh gradient background that adapts
 * to light and dark modes.
 */
function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-300 mesh-gradient">

      {/* Premium background design ornaments (blueprint grids, orbiting glows, dials) */}
      <BackgroundDecor />

      {/* Sticky top navigation header */}
      <Navbar />
      
      {/* Main content body containing only the redesign Hero Section */}
      <main className="w-full">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
