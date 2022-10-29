/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '60': '#2C2C2C',
        '30': '#373737',
        '10': '#FABF14',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        click: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.95)' },
          '80%': { transform: 'scale(1)' },
        },
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
        },
        LtoR: {
          '0%' : { left: '-50%' },
          '25%' : { left: '-25%' },
          '100%' : { left: '200px' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        click: 'click 0.2s ease-in-out',
        scaleUp: 'click 1s ease-in-out',
        LtoR: 'LtoR 1s ease-in-out',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
        'Sinhala': ['Vecambara', 'sans-serif'],
        'FMAbhaya': ['FMAbhaya', 'sans-serif'],
      },
      boxShadow: {
        'Card': '5px 5px 25px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}