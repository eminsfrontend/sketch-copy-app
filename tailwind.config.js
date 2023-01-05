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
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      dark: "#212123",
      vivaMagenta: "#be3455",
      transparent: "transparent",
      green: "#BBD975",
    },
    extend: {
      fontSize: {
        titleDesctop: "76px",
        titleMobile: "44px",
        titleTablet: "56px",
        subtitleDesctop: "56px",
        subtitleTablet: "44px",
        subtitleMobile: "36px",
        paragraphTitle: "22px",
      },
      lineHeight: {
        titleDesctop: "76px",
        titleMobile: "44px",
        titleTablet: "56px",
        subtitleDesctop: "56px",
        subtitleTablet: "44px",
        subtitleMobile: "36px",
        paragraphTitle: "30px",
      },
      boxShadow: {
        extraLight: "0 0 1px rgba(0, 0, 0, 0.2)",
        light: "0 4px 8px rgba(0, 0, 0, 0.1)",
        doubled: "0 4px 8px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
