/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "codify-purple": "#9741FD",
      "codify-lavender": "#B19CD8",
      "codify-light-purple": "#B57EE8",
      "link-blue": "#4A90E2",
      "subheader-gray": "#808080",
    },
  },
  plugins: [require("daisyui")],
};