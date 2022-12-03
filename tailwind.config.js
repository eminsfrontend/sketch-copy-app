const { url } = require("inspector")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      dark: "#212123",
    },
    extend: {
      fontSize: {
        subtitleDesctop: "56px",
        subtitleMobile: "36px",
      },
      lineHeight: {
        subtitleDesctop: "56px",
        subtitleMobile: "36px",
      },
      boxShadow: {
        light: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
