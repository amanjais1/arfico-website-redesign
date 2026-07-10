import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Award, Users2 } from 'lucide-react';
import InteractiveHeroVisual from './InteractiveHeroVisual';

/**
 * HeroSection Component
 * 
 * Arranges the core hero layout in a 2-column grid for desktop.
 * Left: Company description, header copy, action buttons, and trust metrics.
 * Right: The custom interactive floating graphics component.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden transition-colors duration-300">
      
      {/* Absolute Decorative Blobs for Ambient Depth */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-purple-500/5 dark:bg-brand-purple-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-rose-500/5 dark:bg-brand-rose-500/10 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="flex flex-col items-start text-left reveal-hero-content max-w-2xl">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-purple-50 dark:bg-brand-purple-950/30 border border-brand-purple-100 dark:border-brand-purple-900/40 mb-4 sm:mb-6 transition-colors duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-purple-500"></span>
              </span>
              <span className="text-xs font-bold text-brand-purple-700 dark:text-brand-purple-300 tracking-wide font-sans">
                Welcome to ARFico Pvt. Ltd. — Since 2016
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 font-sans">
              Transforming Businesses <br />
              Through <span className="bg-gradient-to-r from-brand-purple-600 via-brand-rose-500 to-brand-teal-500 bg-clip-text text-transparent">
                Technology & Innovation.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-400 font-medium mb-6 sm:mb-8 text-wrap-pretty transition-colors duration-300">
              ARFico Private Limited delivers software development, web solutions, digital marketing, business consulting, and engineering services to help organizations grow with modern technology.
            </p>

            {/* CTA Button Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-8 sm:mb-10">
              
              {/* Primary "Get Started" CTA */}
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-purple-600 to-brand-indigo-600 hover:from-brand-purple-500 hover:to-brand-indigo-500 transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary "Contact Us" CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-800 bg-slate-100/40 dark:bg-zinc-900/35 hover:bg-slate-100/80 dark:hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-slate-500 dark:text-zinc-400 group-hover:text-brand-purple-500 transition-colors" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="w-full border-t border-slate-200/60 dark:border-zinc-900 pt-6 grid grid-cols-3 gap-4">
              
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1.5 mb-1 text-brand-purple-600 dark:text-brand-purple-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">10+ Years</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  Industry Excellence
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1.5 mb-1 text-brand-rose-500 dark:text-brand-rose-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">Certified</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  Engineers & Analysts
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1.5 mb-1 text-brand-teal-500 dark:text-brand-teal-400">
                  <Users2 className="w-4 h-4" />
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">99% Retention</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  Trusted Partners
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Custom Interactive Visual Graphic */}
          <div className="w-full flex items-center justify-center">
            <InteractiveHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
