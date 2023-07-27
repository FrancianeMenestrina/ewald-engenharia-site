/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarelo: "#D1AE6C",
        mostarda: "#CF9012",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
