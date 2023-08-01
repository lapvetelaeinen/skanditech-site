/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        card: "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        head: ["var(--font-rubik)"],
        bread: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        eggshell: "rgb(var(--color-eggshell) / <alpha-value>)",
        skandiblue: "rgb(var(--color-skandiblue) / <alpha-value>)",
        skandibluelight: "rgb(var(--color-skandibluelight) / <alpha-value>)",
        stoneolive: "rgb(var(--color-stoneolive) / <alpha-value>)",
        lightolive: "rgb(var(--color-lightolive) / <alpha-value>)",
        auroragreen: "rgb(var(--color-auroragreen) / <alpha-value>)",
        aurorapurple: "rgb(var(--color-aurorapurple) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
