import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import BackgroundDecor from './components/BackgroundDecor';
import AdminPortal from './components/AdminPortal';

/**
 * App Component
 * 
 * Assembles the corporate website redesign prototype, starting with the Hero Section.
 * Configures the viewport wrapper with the dynamic mesh gradient background that adapts
 * to light and dark modes.
 */
function App() {
  const [contactSubject, setContactSubject] = useState('Software Development');
  const [isAdminView, setIsAdminView] = useState(false);

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const checkAdmin = path === '/admin' || hash === '#/admin' || hash === '#admin';
      setIsAdminView(checkAdmin);
    };

    // Run check on load
    handleRouting();

    // Listen to hash changes or popstate events
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);

    return () => {
      window.removeEventListener('popstate', handleRouting);
      window.removeEventListener('hashchange', handleRouting);
    };
  }, []);

  if (isAdminView) {
    return <AdminPortal />;
  }

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
