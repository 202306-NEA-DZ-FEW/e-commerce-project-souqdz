/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#a88157",
          200: "#c6bfbb",
          "gold-g": "#7B7255",
          "pale-thing": "#EFEDE9",
          "text-brown": "#5A5042",
          buttongold: "#BC9B7F",
          buttongoldhov: "#886333",
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
