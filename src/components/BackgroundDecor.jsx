import React from 'react';

/**
 * BackgroundDecor Component
 * 
 * Provides a high-end visual overlay for the background layer.
 * Includes blueprint grids, dot matrices, orbiting blur spheres, 
 * rotating engineering dials, and subtle floating coordinate strings.
 */
export default function BackgroundDecor() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      
      {/* 1. Base Blueprint & Dot Grid Patterns */}
      <div className="absolute inset-0 blueprint-grid w-full h-full opacity-60 dark:opacity-80" />
      <div className="absolute inset-0 dot-matrix w-full h-full opacity-40 dark:opacity-50" />

      {/* 2. Floating Orbiting Blur Spheres */}
      <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-brand-purple-500/10 to-brand-indigo-500/5 dark:from-brand-purple-500/15 dark:to-brand-indigo-500/5 filter blur-[120px] animate-orbit-1" />
      <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-brand-teal-500/5 to-brand-rose-500/5 dark:from-brand-teal-500/10 dark:to-brand-rose-500/5 filter blur-[140px] animate-orbit-2" />
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-brand-purple-500/5 dark:bg-brand-purple-950/10 filter blur-[100px] animate-pulse-glow" />

      {/* 3. Tech/Engineering Rotating Ornaments */}
      {/* Large faint rotating blueprint circle (top right) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 opacity-10 dark:opacity-[0.15] animate-spin-slow">
        <svg className="w-full h-full stroke-slate-500 dark:stroke-zinc-500 fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.25" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.2" />
          <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Concentric blueprint compass rings (bottom left) */}
      <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] opacity-10 dark:opacity-20 animate-spin-slow">
        <svg className="w-full h-full stroke-slate-400 dark:stroke-zinc-500 fill-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" strokeWidth="0.3" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="44" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="36" strokeWidth="0.5" />
          <polygon points="50,15 53,50 50,85 47,50" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Faint Horizontal Scope Coordinate Lines */}
      <div className="absolute top-[12%] left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 dark:via-zinc-800/40 to-transparent">
        <div className="absolute -top-1 left-4 text-[8px] tracking-widest font-mono text-slate-400 dark:text-zinc-500 hidden xl:block">
          [SCOPE_GRID_SEC_A]
        </div>
      </div>
      <div className="absolute bottom-[12%] left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 dark:via-zinc-800/40 to-transparent">
        <div className="absolute -top-1 right-4 text-[8px] tracking-widest font-mono text-slate-400 dark:text-zinc-500 hidden xl:block">
          REF_LINE_09
        </div>
      </div>


      {/* 4. Fine Technical Labels & Telemetry Strings */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] tracking-widest text-slate-400/80 dark:text-zinc-500/70 hidden sm:block">
        GRID_SCALE: 1:50 | SYS_VER_2026.06
      </div>
      <div className="absolute top-24 right-6 font-mono text-[9px] tracking-widest text-slate-400/80 dark:text-zinc-500/70 hidden sm:block">
        COORD: 22.9730° N, 72.5020° E
      </div>
    </div>
  );
}
