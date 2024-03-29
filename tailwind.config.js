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
        "blue1": "#85A0FE",
        "green1": "#6A994E",
        "green2": "#20B486",
        "green3": "#7ECE89",
        "green4": "#03440C",
        "green5": "#6A994E",
        "purple1": "#233065",
        "purple2": "#6D3AE9",
        "orange1": "#FC7A1E",
        "orange2": "#EE455A",
      },
      width: {
        "84": '84px',
      },
      height: {
        "84": '84px',
      }
    },
  },
  plugins: [],
}

