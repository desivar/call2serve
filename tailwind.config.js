/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          light: "#ecfeff",
          DEFAULT: "#06b6d4", 
          dark: "#0891b2",
        },
        navy: "#0f172a",
      },
    },
  },
  plugins: [],
}