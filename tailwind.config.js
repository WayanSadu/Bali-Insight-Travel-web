/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'about-us.html', 'destination.html', 'destination-detail.html'],
  theme: {
    extend: {
      colors: {
        primary: "#006A8B",
        body: "#FFFFFF",
        dark:"#1D1D1D",
        star:"#E2BF03",
      }
    },
  },
  plugins: [],
}

