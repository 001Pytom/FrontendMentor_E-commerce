/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangeRed: "#FF7D1A",
        veryDarkBlue: " #1D2025",
        grayishBlue: "#68707D",
        pleOrange: "#FFEDE0",
        veryGrayishBlue: "#F7F8FD",
        paleOrange: "hsl(25, 100%, 94%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
