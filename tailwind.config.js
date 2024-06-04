// tailwind.config.js
const { nextui } = require("@nextui-org/react");
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(),daisyui],
};
