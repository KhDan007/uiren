/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PtSerif: ['PT Serif', "serif"],
        Preahvihear: ["Preahvihear", "sans-serif"],
        PublicSans: ["Public Sans", "sans-serif"],
      },
      colors: {
        "darkGreen": "#136C50",
        "darkBlue": "#233065",
      }
    },
  },
  plugins: [],
}

