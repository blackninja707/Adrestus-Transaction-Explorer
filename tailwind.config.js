const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00AEE9",
        board: "#F3F3F3",
        fontPrimary: "#758796",
        fontSecondary: "#55626D",
      },
    },
  },
  plugins: [],
};
