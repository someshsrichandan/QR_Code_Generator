/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'gradient': '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sciFi: ['Orbitron', 'sans-serif'], // Define the sci-fi font family
      },
    },
  },
  plugins: [],
}

