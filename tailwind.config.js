/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sign-in-button-color': "#0075B7",
        "search-bar-color": "#313131",
        "main-bg-color": "#2B2B2B"
      },}
    },
  plugins: [],
}
