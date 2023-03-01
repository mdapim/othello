/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        othello: "#f4f0e0",
      },
      height: (theme) => ({ "screen/2": "75vh" }),
    },
  },
  plugins: [],
};
