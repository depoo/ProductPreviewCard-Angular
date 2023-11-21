/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      'Dark-cyan': 'hsl(158, 36%, 37%)',
      'Cream': 'hsl(30, 38%, 92%)',
      'botton-color-press': 'hsl(158, 36%, 23%)',
      // neutral
      'Very-dark-blue': 'hsl(212, 21%, 14%)',
      'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'White': 'hsl(0, 0%, 100%)'
    },
    fontFamily:{
      'Monserrat': ['Montserrat', 'sans-serif'],
      'Fraunces': ['Fraunces', 'serif']
    },
    extend: {
      letterSpacing:{
        'widest': '0.32em'
      },
      fontSize: {
        '3.5xl': '2.1875rem'
      }
    },
  },
  plugins: [],
}

