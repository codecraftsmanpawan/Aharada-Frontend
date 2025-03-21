/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@shadcn/ui/tailwind")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
