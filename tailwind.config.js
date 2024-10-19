/** @type {import('tailwindcss').Config} */

const light = {
  accent: "#F15025",
  typography: "#191919",
  "typography-negative": "#fff",
  background: "#fff",
  surface: "#E6E8E6",
  "surface-2": "#CED0CE",
  "surface-3": "#B4B6B4",
  "surface-4": "#9A9C9A",
};

const dark = {
  accent: "#F47552",
  typography: "#fff",
  "typography-negative": "#191919",
  background: "#181a1b",
  surface: "#131415",
  "surface-2": "#333739",
  "surface-3": "#4d5358",
  "surface-4": "#686f75",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...dark,
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "scale-up": {
          "0%": { transform: "scale(0.75)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { opacity: 0 },
          "30%": { opacity: 0, transform: "scale(0.25)", translate: "0% 100%" },
          "100%": { opacity: 1, transform: "scale(1)", translate: "0% 0%" },
        },
        modal: {
          "0%": { opacity: 0, transform: "scale(0.75)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        modal: "modal 250ms ease-in-out",
        "fade-in": "fade-in 300ms ease-in-out",
        "slide-up": "slide-up 200ms ease-in-out",
      },
      fontFamily: {
        sans: ["Ubuntu, sans-serif"],
      },
    },
  },
  plugins: [],
};
