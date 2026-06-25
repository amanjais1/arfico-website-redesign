import React, { useState, useEffect } from 'react';
import { Phone, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Provides a sticky, glassmorphic header with navigation, 
 * responsive mobile layout, and a functional dark/light mode toggle.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode as configured in index.html
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Sync state with HTML class
  useEffect(() => {
    const isDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(isDarkClass);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'Company', 
      href: '#', 
      hasDropdown: true,
      subItems: ['About Us', 'Our Team', 'Careers', 'Since 2016'] 
    },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true,
      subItems: ['Digital Marketing', 'Civil Engineering', 'Business Consulting'] 
    },
    { name: 'Group Sites', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar reveal-hero-logo transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer">
            {/* Custom SVG logo: Dynamic polygonal abstract icon representing consulting and engineering */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-brand-purple-600 to-brand-indigo-500 rounded-xl shadow-glow-purple overflow-hidden">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h4l6-12 6 12h4L12 2z" fill="currentColor" fillOpacity="0.85"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <line x1="12" y1="12" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="12" y1="12" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline font-sans font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                <span>ARFI</span>
                <span className="bg-gradient-to-r from-brand-purple-500 to-brand-indigo-500 bg-clip-text text-transparent">CO</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-slate-500 dark:text-zinc-400 -mt-1 font-sans">
                Private Limited
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 hover:text-brand-purple-600 dark:text-zinc-300 dark:hover:text-brand-purple-400 hover:bg-slate-100/50 dark:hover:bg-zinc-900/50 transition-all duration-200"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Menu (Desktop) */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 mt-1 rounded-xl glass-card overflow-hidden shadow-lg border border-slate-200/50 dark:border-zinc-800/40 animate-float-fast">
                    <div className="py-2">
                      {link.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-brand-purple-50/50 dark:hover:bg-brand-purple-950/20 hover:text-brand-purple-600 dark:hover:text-brand-purple-400 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Area (Theme switch & CTA button) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-zinc-800/50 hover:bg-slate-100 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-brand-purple-600 dark:hover:text-brand-purple-400 transition-all duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Glowing CTA Button */}
            <a
              href="tel:+1234567890"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-brand-purple-600 to-brand-indigo-500 hover:from-brand-purple-500 hover:to-brand-indigo-400 transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-600 dark:text-zinc-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Collapsible) */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-slate-200/50 dark:border-zinc-800/40">
          <div className="px-2 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-brand-purple-600 dark:hover:text-brand-purple-400 transition-colors"
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <div className="pl-6 border-l border-slate-200 dark:border-zinc-800/60 ml-3 space-y-1 my-1">
                    {link.subItems.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-slate-500 dark:text-zinc-400 hover:text-brand-purple-600 dark:hover:text-brand-purple-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 px-3">
              <a
                href="tel:+1234567890"
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-purple-600 to-brand-indigo-500 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
