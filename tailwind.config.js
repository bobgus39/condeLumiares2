/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F4',
        nude: '#E8D5C4',
        sage: '#7A9E7E',
        charcoal: '#2D2D2D',
        blush: '#C9A99A',
        warm: '#F2EBE3',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#7A9E7E",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#C9A99A",
            foreground: "#ffffff",
          }
        }
      }
    }
  })],
}
