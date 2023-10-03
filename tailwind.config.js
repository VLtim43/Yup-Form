/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // darks
        deepBlue: "#626882",
        deeperBlue: "#545871",
        grayishBlue: "#5B5566",

        // lights
        palePink: "#f4dedb",
        lightCream: "#e3ccc9",
        offWhite: "#fefeff",
      },
      fontFamily: {
        young: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
