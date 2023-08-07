/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        amarelo: "#D1AE6C",
        mostarda: "#CF9012",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
