/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#C8A45D',
          light: '#D4B87A',
          dark: '#A88B45',
          muted: 'rgba(200, 164, 93, 0.15)',
        },
        light: {
          bg: '#F8F8F8',
          gray: '#F2F2F2',
        },
        dark: {
          bg: '#111111',
        },
        border: {
          DEFAULT: '#E6E6E6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25' }],
        'sm': ['1rem', { lineHeight: '1.4' }],
        'base': ['1.125rem', { lineHeight: '1.5' }],
        'lg': ['1.25rem', { lineHeight: '1.6' }],
        'xl': ['1.375rem', { lineHeight: '1.6' }],
        '2xl': ['1.625rem', { lineHeight: '1.4' }],
        '3xl': ['2rem', { lineHeight: '1.3' }],
        '4xl': ['2.375rem', { lineHeight: '1.2' }],
        '5xl': ['3.125rem', { lineHeight: '1.1' }],
        '6xl': ['3.875rem', { lineHeight: '1.1' }],
        '7xl': ['4.625rem', { lineHeight: '1.05' }],
        '8xl': ['6.125rem', { lineHeight: '1' }],
        '9xl': ['8.125rem', { lineHeight: '1' }],
        'display-xl': ['4.625rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.625rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.875rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.375rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0, 0, 0, 0.06)',
        premium: '0 8px 40px rgba(0, 0, 0, 0.08)',
        gold: '0 8px 32px rgba(200, 164, 93, 0.25)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A45D 0%, #D4B87A 50%, #A88B45 100%)',
        'dark-gradient': 'linear-gradient(180deg, #111111 0%, #000000 100%)',
        'light-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)',
        'hero-overlay':
          'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)',
      },
      backdropBlur: {
        glass: '16px',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      maxWidth: {
        container: '1280px',
        narrow: '720px',
      },
    },
  },
  plugins: [],
};
