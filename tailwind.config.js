/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#72F2EB",
          DEFAULT: "#00CCC0",
          dark: "#1B7F79",
        },
        offWhite: "#F0F2F5",
      },
    },
  },
  plugins: [],
};
