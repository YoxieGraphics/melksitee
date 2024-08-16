/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        darkCard: '#1C1C1E',
        primary: '#0078F2',
        secondary: '#FF5C5C',
        accent: '#00BFAE',
      },
    },
  },
  plugins: [],
}
