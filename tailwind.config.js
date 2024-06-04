/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        'primary' : 'rgb(255, 30, 30)',
        'secondary' : '#fc9b63',
      }
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [],
};
