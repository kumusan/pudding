module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        whitemode: "#FEDBD0",
        hoverwhite: "#FDC5B8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
