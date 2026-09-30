import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm artisan palette
        cream: {
          50: '#FDFBF6',
          100: '#FAF6EF',
          200: '#F3EBDD',
          300: '#E9DCC6',
          400: '#DCC7A8',
        },
        terracotta: {
          50: '#FBF0EB',
          100: '#F4D9CE',
          200: '#E7B29E',
          300: '#D9866B',
          400: '#CD6B4B',
          500: '#C25B3D',
          600: '#A8492F',
          700: '#873925',
          800: '#672B1D',
          900: '#4A2016',
        },
        sage: {
          50: '#F2F4EF',
          100: '#E1E7D9',
          200: '#C4CEB5',
          300: '#A6B48F',
          400: '#8A9A7B',
          500: '#6F805F',
          600: '#57654A',
          700: '#414C38',
          800: '#2D3527',
        },
        ink: {
          DEFAULT: '#2B2320',
          soft: '#4A403A',
          muted: '#7A6E65',
        },
        // `primary` alias keeps legacy pages compiling on the new palette
        primary: {
          50: '#FBF0EB',
          100: '#F4D9CE',
          200: '#E7B29E',
          300: '#D9866B',
          400: '#CD6B4B',
          500: '#C25B3D',
          600: '#A8492F',
          700: '#873925',
          800: '#672B1D',
          900: '#4A2016',
          950: '#2E1610',
        },
        neutral: {
          50: '#FAF6EF',
          100: '#F3EBDD',
          200: '#E9DCC6',
          300: '#D3C4AC',
          400: '#A89A88',
          500: '#7A6E65',
          600: '#5C534C',
          700: '#453E39',
          800: '#302A26',
          900: '#2B2320',
          950: '#1A1512',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '250': '250ms',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(43, 35, 32, 0.08), 0 8px 24px -8px rgba(43, 35, 32, 0.10)',
        lift: '0 18px 48px -16px rgba(43, 35, 32, 0.28)',
        glow: '0 0 60px -12px rgba(194, 91, 61, 0.35)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '30%': { transform: 'translate(3%, -8%)' },
          '50%': { transform: 'translate(-4%, 6%)' },
          '70%': { transform: 'translate(6%, 3%)' },
          '90%': { transform: 'translate(-3%, 5%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 7s ease-in-out infinite',
        shimmer: 'shimmer 2.2s infinite',
        grain: 'grain 8s steps(6) infinite',
      },
    },
  },
  plugins: [typography],
};

export default config;
