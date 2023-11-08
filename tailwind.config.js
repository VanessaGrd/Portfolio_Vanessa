const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#5151CD",
        },
        secondary: {
          50: "#F8F8FF",
        },
        dark: {
          50: "#0A0909",
          100: "#2D2E2E",
        },
        grey: {
          50: "#F7FAFC",
          100: "#656565",
        },
        lightBlue: {
          50: "#F0F1FE",
          100: "#B8BAF8",
        },
        white: {
          50: "#FFFFFF",
        },
        success: {
          50: "#a7c957",
        },
        error: {
          50: "#e63946",
        },
        warning: {
          50: "##5e548e",
        },
        info: {
          50: "#669bbc",
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
