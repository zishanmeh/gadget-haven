import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(149, 56, 226, 1)",
        whiteBg: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [daisyui],
};
