/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Simplifies everything to one line
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#06b6d4",
      },
    },
  },
  plugins: [],
};