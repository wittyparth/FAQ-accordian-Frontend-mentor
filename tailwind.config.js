/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Light_pink: "hsl(275, 100%, 97%)",
        Grayish_purple: "hsl(292, 16%, 49%)",
        Dark_purple: "hsl(292, 42%, 14%)",
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    fontFamily: {
      work_sans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
