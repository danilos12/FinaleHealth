/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add this for faster development builds
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Reduce the size of generated CSS in development
  safelist: []
}