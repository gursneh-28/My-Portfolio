/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#C4B5FD",
        violet: "#7C3AED",
        blush: "#FBCFE8",
        mint: "#A7F3D0",
        sky: "#BAE6FD",
        cream: "#FAFAF8",
        ink: "#1E1B4B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}