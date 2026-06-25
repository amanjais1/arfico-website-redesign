/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // supports toggling light/dark theme via a .dark class on <html>
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c084fc',
            400: '#a78bfa',
            500: '#8b5cf6', // Purple core
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
          indigo: {
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
          },
          teal: {
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
          },
          rose: {
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
          },
          emerald: {
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-purple': '0 0 20px 2px rgba(139, 92, 246, 0.15)',
        'glow-teal': '0 0 20px 2px rgba(13, 148, 136, 0.15)',
        'glow-rose': '0 0 20px 2px rgba(244, 63, 94, 0.15)',
      }
    },
  },
  plugins: [],
}
