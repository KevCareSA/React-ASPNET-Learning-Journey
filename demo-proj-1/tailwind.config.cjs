/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- MAKE SURE `.jsx` is here
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f19509",
        primaryDark : "#e86f00",
        lightOrange: "#f1dabf",
        darkOrange: "#1a1f25",
        green: "#272c35",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
    },
  },
},
  plugins: [],
};
