/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
