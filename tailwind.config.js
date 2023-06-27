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
        primary: "#3D00B7",
        blue: "#2639ED",
        purple: "#5539A8",
        green: "#00AC4F",
        aqua: "#14C8B0",
        red: "#FF002E",
      },
    },
  },
  plugins: [],
};
