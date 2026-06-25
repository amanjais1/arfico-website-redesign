import React, { useState } from 'react';
import { TrendingUp, PenTool, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * InteractiveHeroVisual Component
 * 
 * Renders the primary graphic section of the hero. It builds an interactive,
 * floating stack of glass cards representing the company's service pillars:
 * Digital Marketing, Civil Engineering, and Business & Software Consulting.
 */
export default function InteractiveHeroVisual() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'marketing',
      title: 'Digital Marketing',
      tagline: 'DRIVING GROWTH',
      icon: TrendingUp,
      colorClass: 'brand-rose',
      bgGlow: 'hover:shadow-glow-rose hover:border-brand-rose-500/30',
      activeBorder: 'border-brand-rose-500/40 dark:border-brand-rose-500/30',
      accentColor: '#f43f5e',
      animationClass: 'animate-float-slow',
      offsetClass: 'lg:-translate-y-8 lg:translate-x-12 xl:translate-x-16',
      services: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click & Google Ads',
        'Social Media Campaigns',
        'Content Strategy & Blogs'
      ],
      // Inline custom SVG background representing analytics and curves
      svgBackground: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-rose-500/10 dark:stroke-brand-rose-500/20 fill-none" viewBox="0 0 300 200">
          <path d="M 0,150 Q 50,180 100,120 T 200,60 T 300,30" strokeWidth="2" />
          <path d="M 0,160 Q 60,190 120,150 T 220,100 T 300,50" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="120" r="4" className="fill-brand-rose-500 animate-ping" />
          <circle cx="200" cy="60" r="4" className="fill-brand-rose-500" />
        </svg>
      )
    },
    {
      id: 'engineering',
      title: 'Civil Engineering',
      tagline: 'STRUCTURING IDEAS',
      icon: PenTool,
      colorClass: 'brand-teal',
      bgGlow: 'hover:shadow-glow-teal hover:border-brand-teal-500/30',
      activeBorder: 'border-brand-teal-500/40 dark:border-brand-teal-500/30',
      accentColor: '#0d9488',
      animationClass: 'animate-float-medium',
      offsetClass: 'lg:translate-x-4 z-20',
      services: [
        'Structural Design & RCC Detailing',
        '3D Elevation & AutoCAD Drafting',
        'AutoCAD Drafting & BIM Modeling',
        'Commercial Building Approvals'
      ],
      // Blueprint grid SVG
      svgBackground: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-teal-500/10 dark:stroke-brand-teal-500/15 fill-none" viewBox="0 0 300 200">
          <g strokeWidth="0.5">
            <line x1="0" y1="40" x2="300" y2="40" />
            <line x1="0" y1="80" x2="300" y2="80" />
            <line x1="0" y1="120" x2="300" y2="120" />
            <line x1="0" y1="160" x2="300" y2="160" />
            <line x1="60" y1="0" x2="60" y2="200" />
            <line x1="120" y1="0" x2="120" y2="200" />
            <line x1="180" y1="0" x2="180" y2="200" />
            <line x1="240" y1="0" x2="240" y2="200" />
          </g>
          <circle cx="120" cy="80" r="40" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 60,120 L 180,40" strokeWidth="1.5" />
          <rect x="100" y="60" width="40" height="40" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'business',
      title: 'Business Consulting',
      tagline: 'ENABLING ENTERPRISE',
      icon: BarChart3,
      colorClass: 'brand-emerald',
      bgGlow: 'hover:shadow-glow-emerald hover:border-brand-emerald-500/30',
      activeBorder: 'border-brand-emerald-500/40 dark:border-brand-emerald-500/30',
      accentColor: '#10b981',
      animationClass: 'animate-float-fast',
      offsetClass: 'lg:translate-y-8 lg:-translate-x-12 xl:-translate-x-16',
      services: [
        'Startup Strategy & Advisory',
        'E-Commerce Web Architecture',
        'Custom Software & Mobile Apps',
        'GST, Legal Compliance & Filing'
      ],
      // Tech-node network SVG
      svgBackground: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-emerald-500/10 dark:stroke-brand-emerald-500/20 fill-none" viewBox="0 0 300 200">
          <g strokeWidth="1">
            <line x1="50" y1="50" x2="150" y2="100" />
            <line x1="150" y1="100" x2="250" y2="70" />
            <line x1="150" y1="100" x2="120" y2="170" />
            <line x1="50" y1="50" x2="120" y2="170" />
          </g>
          <circle cx="50" cy="50" r="5" className="fill-brand-emerald-500/20" stroke="currentColor" strokeWidth="2" />
          <circle cx="150" cy="100" r="7" className="fill-brand-emerald-500" />
          <circle cx="250" cy="70" r="5" className="fill-brand-emerald-500/20" stroke="currentColor" strokeWidth="2" />
          <circle cx="120" cy="170" r="6" className="fill-brand-emerald-500/20" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[500px] py-12 reveal-hero-graphic select-none lg:-translate-y-10 xl:-translate-y-16">

      
      {/* Background Rotating Aura / Radial Gradients for visual depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-purple-500/10 dark:bg-brand-purple-500/20 rounded-full filter blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal-500/10 dark:bg-brand-teal-500/15 rounded-full filter blur-[100px] animate-pulse-glow" />
      
      {/* Interactive Deck Stack Wrapper */}
      <div className="relative flex flex-col space-y-6 lg:space-y-0 w-full max-w-md lg:max-w-none lg:w-[480px] xl:w-[540px]">
        {cards.map((card) => {
          const Icon = card.icon;
          const isHovered = hoveredCard === card.id;
          const isAnyHovered = hoveredCard !== null;
          
          // Determine scale and opacity styling based on active hover states
          let relativeStyleClass = "opacity-100 z-10 scale-100";
          if (isHovered) {
            relativeStyleClass = "opacity-100 z-30 scale-[1.04] lg:scale-[1.06] -translate-y-2 lg:-translate-y-4 shadow-xl";
          } else if (isAnyHovered) {
            relativeStyleClass = "opacity-40 z-0 scale-95 saturate-[0.8]";
          }

          return (
            <div
              key={card.id}
              className={`w-full lg:absolute transition-all duration-500 ease-out glass-card rounded-2xl p-6 ${card.offsetClass} ${card.animationClass} ${relativeStyleClass} border-2 border-slate-200/50 dark:border-zinc-800/40`}
              style={{
                borderColor: isHovered ? card.accentColor + '50' : '',
                boxShadow: isHovered ? `0 12px 40px -10px ${card.accentColor}30` : ''
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Dynamic SVG graphic background */}
              {card.svgBackground}

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-slate-500 dark:text-zinc-400">
                  {card.tagline}
                </span>
                <div 
                  className="p-2.5 rounded-xl text-white transition-transform duration-300"
                  style={{ backgroundColor: card.accentColor }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Main Info */}
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                
                {/* Collapsible/Expandable service bullets with smooth height */}
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    isHovered 
                      ? 'max-h-60 opacity-100 mt-4' 
                      : 'max-h-0 lg:max-h-0 opacity-0 lg:opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-3.5 border-t border-slate-200/50 dark:border-zinc-800/40 pt-4">
                    {card.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 
                          className="w-4 h-4 mt-0.5 flex-shrink-0" 
                          style={{ color: card.accentColor }} 
                        />
                        <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                          {service}
                        </span>
                      </div>
                    ))}
                    
                    {/* Learn More slide pointer */}
                    <div 
                      className="flex items-center text-xs font-bold pt-2 cursor-pointer transition-colors"
                      style={{ color: card.accentColor }}
                    >
                      <span>Explore service details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Default collapsed helper text on large screens */}
                <p className={`text-xs font-semibold text-slate-500 dark:text-zinc-400 transition-opacity duration-300 ${isHovered ? 'lg:opacity-0 lg:absolute' : 'opacity-100'}`}>
                  Hover to inspect key deliverables & solutions
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
