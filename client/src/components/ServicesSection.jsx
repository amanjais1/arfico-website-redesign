import React, { useState } from 'react';
import { Code, TrendingUp, Layers, Briefcase, ArrowRight, Check } from 'lucide-react';

/**
 * ServicesSection Component
 * 
 * Displays the core service pillars of Arfico Private Limited.
 * Features:
 * - 4-column responsive grid matching the glassmorphic brand theme.
 * - Interactive hover states with custom colored glowing shadows.
 * - Embedded thematic SVG background graphics (blueprint grids, network nodes, data trendlines).
 * - "Inquire About This" action buttons that scroll to the contact form and auto-select the topic area.
 */
export default function ServicesSection({ onSelectService }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'software',
      title: 'Software Development',
      subjectValue: 'Software Development', // matches the dropdown select option
      tagline: 'NEXT-GEN ARCHITECTURES',
      description: 'Engineered web applications, secure database setups, and custom cloud API systems designed for performance, scalability, and security.',
      icon: Code,
      accentColor: '#8b5cf6', // Brand Purple
      glowShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.3)',
      deliverables: [
        'Full-Stack Web Architectures',
        'React, Node.js & Next.js Ecosystems',
        'Cloud-Native API Integrations',
        'Secure Database Synchronization'
      ],
      svgGraphic: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-purple-500/10 dark:stroke-brand-purple-500/15 fill-none" viewBox="0 0 300 200">
          <g strokeWidth="0.8">
            <rect x="20" y="20" width="260" height="160" rx="8" />
            <line x1="20" y1="50" x2="280" y2="50" />
            <circle cx="35" cy="35" r="3" className="fill-brand-purple-500" />
            <circle cx="47" cy="35" r="3" className="fill-brand-purple-500" />
            <circle cx="59" cy="35" r="3" className="fill-brand-purple-500" />
            <path d="M 40,80 L 70,110 L 40,140" strokeWidth="1.5" />
            <line x1="85" y1="140" x2="115" y2="140" strokeWidth="2" className="animate-pulse" />
          </g>
          {/* Coding bracket decorations */}
          <text x="210" y="100" className="fill-brand-purple-500/35 font-mono text-2xl font-bold">{'{ }'}</text>
        </svg>
      )
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      subjectValue: 'Digital Marketing',
      tagline: 'MAXIMIZING REACH & SEO',
      description: 'High-conversion marketing strategies, SEO audits, and targeted social media campaigns built to rank your business first and generate leads.',
      icon: TrendingUp,
      accentColor: '#f43f5e', // Brand Rose
      glowShadow: '0 10px 30px -10px rgba(244, 63, 94, 0.3)',
      deliverables: [
        'SEO Campaign Audits & Strategy',
        'Targeted PPC & Google Ads Campaigns',
        'Content Strategy & Lead Funnels',
        'Advanced Conversion Analytics'
      ],
      svgGraphic: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-rose-500/10 dark:stroke-brand-rose-500/15 fill-none" viewBox="0 0 300 200">
          {/* Growth analytics graph */}
          <path d="M 30,160 Q 90,140 130,90 T 230,40" strokeWidth="2" />
          <path d="M 30,160 Q 90,160 130,120 T 230,80" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="30" y1="160" x2="270" y2="160" strokeWidth="0.8" />
          <line x1="30" y1="30" x2="30" y2="160" strokeWidth="0.8" />
          {/* Radar indicator dot */}
          <circle cx="230" cy="40" r="12" className="stroke-brand-rose-500/20 fill-brand-rose-500/5" strokeWidth="1" />
          <circle cx="230" cy="40" r="4.5" className="fill-brand-rose-500" />
        </svg>
      )
    },
    {
      id: 'civil',
      title: 'Civil Engineering',
      subjectValue: 'Civil Engineering',
      tagline: 'BLUEPRINT TO EXECUTION',
      description: 'Accurate architectural drafting, structural RCC design coordinates, 3D building renderings, and compliance audits for project approvals.',
      icon: Layers,
      accentColor: '#0d9488', // Brand Teal
      glowShadow: '0 10px 30px -10px rgba(13, 148, 136, 0.3)',
      deliverables: [
        'Structural Design & RCC Detailing',
        '3D Elevation & AutoCAD Drafting',
        'AutoCAD Drafting & BIM Modeling',
        'Regulatory Compliance Approvals'
      ],
      svgGraphic: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-teal-500/10 dark:stroke-brand-teal-500/15 fill-none" viewBox="0 0 300 200">
          {/* Engineering / CAD design elements */}
          <g strokeWidth="0.5" strokeDasharray="2 2">
            <circle cx="150" cy="100" r="70" />
            <circle cx="150" cy="100" r="35" />
            <line x1="30" y1="100" x2="270" y2="100" />
            <line x1="150" y1="20" x2="150" y2="180" />
          </g>
          <polygon points="110,130 190,130 150,60" strokeWidth="1.5" />
          <rect x="135" y="85" width="30" height="30" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'Business Consulting',
      subjectValue: 'Business Consulting',
      tagline: 'SCALING OPERATIONS',
      description: 'Professional startup strategy roadmaps, risk management analysis, brand development systems, and regulatory business registration filing.',
      icon: Briefcase,
      accentColor: '#10b981', // Brand Emerald
      glowShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.3)',
      deliverables: [
        'Operations Scale Auditing & Plans',
        'Corporate IT & Strategy Roadmaps',
        'Brand Development & Identity Guides',
        'Regulatory Registration & Compliance'
      ],
      svgGraphic: (
        <svg className="absolute inset-0 w-full h-full stroke-brand-emerald-500/10 dark:stroke-brand-emerald-500/15 fill-none" viewBox="0 0 300 200">
          {/* Connected Strategy Node Web */}
          <g strokeWidth="1">
            <line x1="60" y1="120" x2="150" y2="80" />
            <line x1="150" y1="80" x2="230" y2="140" />
            <line x1="150" y1="80" x2="150" y2="150" />
            <line x1="60" y1="120" x2="150" y2="150" />
          </g>
          <circle cx="60" cy="120" r="5" className="fill-brand-emerald-500/25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="150" cy="80" r="8" className="fill-brand-emerald-500" />
          <circle cx="230" cy="140" r="5" className="fill-brand-emerald-500/25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="6" className="fill-brand-emerald-500/25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const handleInquireClick = (service) => {
    // Invoke parent callback to change form dropdown value
    if (onSelectService) {
      onSelectService(service.subjectValue);
    }
    
    // Smoothly scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 w-full transition-colors duration-300">
      
      {/* Dynamic ambient blur orbs */}
      <div className="absolute top-[20%] left-0 w-80 h-80 bg-brand-purple-500/5 dark:bg-brand-purple-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-brand-teal-500/5 dark:bg-brand-teal-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-purple-50 dark:bg-brand-purple-950/20 border border-brand-purple-100 dark:border-brand-purple-900/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-500 animate-ping"></span>
            <span className="text-[10px] tracking-widest font-extrabold text-brand-purple-700 dark:text-brand-purple-400 uppercase">
              Our Core Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight font-sans">
            Innovative Services Built for <span className="bg-gradient-to-r from-brand-purple-600 via-brand-rose-500 to-brand-teal-500 bg-clip-text text-transparent">Sustainable Growth.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-semibold leading-relaxed">
            Arfico blends design precision with advanced tech to deliver business consulting, engineering plans, website development, and digital marketing.
          </p>
        </div>

        {/* Services Grid (4 Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div
                key={service.id}
                className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200/50 dark:border-zinc-800/40 transition-all duration-500 ease-out hover:-translate-y-2 select-none overflow-hidden"
                style={{
                  borderColor: isHovered ? service.accentColor + '40' : '',
                  boxShadow: isHovered ? service.glowShadow : ''
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Embedded SVG theme graphic */}
                {service.svgGraphic}

                {/* Card Icon & Tagline */}
                <div className="relative z-10 mb-6 flex items-start justify-between">
                  <div 
                    className="p-3 rounded-2xl text-white transition-all duration-300 shadow-sm"
                    style={{ 
                      backgroundColor: service.accentColor,
                      boxShadow: isHovered ? `0 4px 15px -3px ${service.accentColor}60` : ''
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] tracking-widest font-extrabold text-slate-400 dark:text-zinc-500 uppercase mt-1">
                    {service.tagline}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet deliverables checklist */}
                  <div className="space-y-2.5 border-t border-slate-200/50 dark:border-zinc-800/30 pt-4 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: service.accentColor + '15' }}
                        >
                          <Check 
                            className="w-2.5 h-2.5" 
                            style={{ color: service.accentColor }} 
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire Action Button */}
                <button
                  onClick={() => handleInquireClick(service)}
                  className="relative z-10 w-full py-3 rounded-xl text-xs font-extrabold border border-slate-200 dark:border-zinc-800/60 bg-slate-100/50 dark:bg-zinc-950/35 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer group-hover:border-transparent"
                  style={{
                    backgroundColor: isHovered ? service.accentColor : '',
                    color: isHovered ? '#ffffff' : ''
                  }}
                >
                  <span>Inquire About This</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
