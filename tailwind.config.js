const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffe272',
          100: '#ffd868',
          200: '#ffce5e',
          300: '#ffc454',
          400: '#ffba4a',
          500: '#fbb040',
          600: '#f1a636',
          700: '#e79c2c',
          800: '#dd9222',
          900: '#d38818',
        },
        dark: {
          50: '#3d4155',
          100: '#33374b',
          200: '#292d41',
          300: '#1f2337',
          400: '#15192d',
          500: '#0b0f23',
          600: '#010519',
          700: '#00000f',
          800: '#000005',
          900: '#000000',
        },
      },
    },
  },

  plugins: [],
}
