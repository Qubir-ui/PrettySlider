/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "main" : "url('../img/bg.png')",
      },
      fontFamily: {
        oswald: ['Oswald'],
        outfit: ['Outfit'],
      },
      colors: {
        "fill-btn": "#FA4776"
      },
    },
  },
  plugins: [],
}
