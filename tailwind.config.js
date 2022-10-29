/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Sans', 'sans-serif'],
        'Fire': ['Fira Sans', 'sans-serif'],
        'Rufina': ['Rufina', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}