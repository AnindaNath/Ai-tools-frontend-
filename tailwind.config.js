/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          secondary: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
          },
          accent: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          }
        },
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
          'gradient-y': 'gradient-y 15s ease infinite',
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce-slow': 'bounce 3s infinite',
          'spin-slow': 'spin 8s linear infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'typewriter': 'typewriter 4s steps(40) 1s infinite',
          'shimmer': 'shimmer 2s linear infinite',
        },
        keyframes: {
          'gradient-y': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center center'
            }
          },
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
          'gradient-xy': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' }
          },
          'glow': {
            '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' }
          },
          'typewriter': {
            '0%': { width: '0%' },
            '50%': { width: '100%' },
            '100%': { width: '0%' }
          },
          'shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        },
        backdropBlur: {
          xs: '2px',
        },
        fontFamily: {
          'display': ['Inter', 'system-ui', 'sans-serif'],
          'body': ['Inter', 'system-ui', 'sans-serif'],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '2.5rem',
        },
        boxShadow: {
          'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
          'glow-lg': '0 0 25px rgba(59, 130, 246, 0.4)',
          'inner-glow': 'inset 0 0 15px rgba(59, 130, 246, 0.2)',
          'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
          'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.37)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'mesh-gradient': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
          'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        },
      },
    },
    plugins: [],
  }