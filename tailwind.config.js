/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    
    colors: {
      "codify-purple": "#9741FD",
      "navbar-purple": "#8658D0",
      "codify-lavender": "#B19CD8",
      "codify-light-purple": "#B57EE8",
      "subheader-gray": "#808080",
      "footer-light-gray": "#d9d9d9",
      "highlight-yellow": "#FFD700",
    },
  },
  plugins: [require("daisyui")],
};
