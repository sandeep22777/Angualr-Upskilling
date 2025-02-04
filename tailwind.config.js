/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      zIndex: {
        9999: "9999",
      },
    },
  },
  plugins: [],
};
