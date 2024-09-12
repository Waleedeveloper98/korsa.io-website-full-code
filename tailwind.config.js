/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'], // Make sure this path is correct
  theme: {
    extend: {
      fontFamily: {
        'mona-sans': ['mona-sans', 'sans-serif'] // Ensure 'mona-wide' matches your @font-face declaration
      }
    },
  },
  plugins: [],
}
