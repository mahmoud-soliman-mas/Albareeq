/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0,0,0,0.14)',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        surface: '#111827',
        surfaceSoft: '#1f2937',
        primary: '#E5C26B',
        primarySoft: '#F3E6B7',
      },
    },
  },
  plugins: [],
};
