/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moody-green": "#98CE82",
        "moody-green-v2": "#6F989C",
        "moody-purple": "#9C8BC2",
        "moody-red": "#9D5877",
      },
    },
  },
  plugins: [],
};
