/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        belwe: ['"Belwe Bold"', "serif"],
      },
      colors: {
        patagonia: {
          purple: "#2C2A92",
          blue: "#0096D6",
          orange: "#F26D21",
          pink: "#D92545",
          black: "#000000",
          // background: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
