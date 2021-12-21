const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BB133E',
          50: '#F492AB',
          100: '#F27F9D',
          200: '#EE5A80',
          300: '#EA3564',
          400: '#E0174A',
          500: '#BB133E',
          600: '#880E2D',
          700: '#55091C',
          800: '#22030B',
          900: '#000000',
        },
      },
    },
  },

  plugins: [],
}
