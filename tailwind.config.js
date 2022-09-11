/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-1000": "#040420",
      },
      dropShadow: {
        "3xl": "2px 2px 5px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [[require("prettier-plugin-tailwindcss")]],
};
