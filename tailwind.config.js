/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-from-bottom": {
          "0%": {transform: "translateY(200%)"},
          "100%": {transform: "translateY(0%)"}
        },
        "fade-in": {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      },
      animation: {
        "slide-from-bottom": "slide-from-bottom 0.5s ease-in-out",
        "fade-in": "fade-in 0.5s ease-in-out"
      }
    },
  },
  plugins: [],
}

