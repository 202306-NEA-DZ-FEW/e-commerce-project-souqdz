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
        "gold-g": "#7B7255",
        "pale-thing": "#EFEDE9",
        "text-brown": "#5A5042",
        buttongold: "#BC9B7F",
        buttongoldhov: "#886333",
      },

      backgroundColor: {
        "gold-g": "#7B7255",
        "pale-thing": "#EFEDE9",
        buttongold: "#BC9B7F",
        buttongoldhov: "#886333",
      },
      textColor: {
        "text-brown": "#5A5042",
      },
    },
  },
  plugins: [require("daisyui")],
}
