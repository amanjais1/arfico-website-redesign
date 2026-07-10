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
      href: '#services', 
      hasDropdown: true,
      subItems: ['Digital Marketing', 'Civil Engineering', 'Business Consulting'] 
    },
    { name: 'Group Sites', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar reveal-hero-logo transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex flex-col select-none">
              <div className="flex items-baseline font-sans font-extrabold italic text-2xl tracking-normal text-slate-900 dark:text-white leading-none">
                <span>ARFI</span>
                <span className="text-[#8b5cf6] ml-[1px]">CO</span>
              </div>
              <span className="text-[8px] uppercase tracking-[0.22em] font-extrabold text-slate-950 dark:text-zinc-200 mt-1 leading-none font-sans">
                PRIVATE LIMITED
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
                          href="#services"
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
              href="tel:+919472852131"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-brand-purple-500 hover:bg-brand-purple-600 transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0"
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
                        href="#services"
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
                href="tel:+919472852131"
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-brand-purple-500 hover:bg-brand-purple-600 shadow-md transition-colors"
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
