/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        "black-2": "#010101",
        primary: "#3C50E0",
        secondary: "#80CAEE",
        success: "#219653",
        whiter: "#F5F7FD",
        danger: "#D34053",
        warning: "#FFA70B",
        dark: "#002240",
        darkblue: "#141747",
        darkblue2: "#0D0F2F",
      },
    },
  },
  plugins: [],
};
