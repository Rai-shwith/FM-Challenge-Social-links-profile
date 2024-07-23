/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        buttonGreen: {
          hsl: 'hsl(75, 94%, 57%)',
        },
      },
    },
  },
  plugins: [],
}

