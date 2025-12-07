/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Blinkit Brand Colors - Exact Match
        brand: {
          green: '#0C831F',      // Primary brand color
          yellow: '#FFDE21',     // CTA & highlights
          'green-dark': '#0a6e1a',
          'green-light': '#e6f7ea',
        },
        // Keep primary as alias for brand green
        primary: {
          50: '#e6f7ea',
          100: '#c2eacc',
          200: '#9dddae',
          300: '#78d090',
          400: '#53c372',
          500: '#0C831F',
          600: '#0a6e1a',
          700: '#085915',
          800: '#064410',
          900: '#042f0b',
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
