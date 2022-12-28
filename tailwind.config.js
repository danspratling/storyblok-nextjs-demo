const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

//Setup custom colors
const colors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  black: "#000000",
  gray: {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E4E7EC",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#674756",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
    accent: "#344054",
  },
};

/** @type {import('tailwindcss').Config} */
//Tailwind config
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./storyblok/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      ...defaultColors,
      ...colors,
    },
    gradientColorStops: {
      ...defaultColors,
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['"RubikVariable"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": "1440px",
      },
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        "6xl": "4rem",
      },
      inset: {
        "1/2": "50%",
      },
      flex: {
        max: "1 0 auto",
        min: "0 0 auto",
      },
      transitionProperty: {
        background: "background-color",
      },
      translate: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      scale: {
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",

        "d-sm":
          "0 25px 30px 6px rgb(52 64 84 / 0.08), 0 6px 15px 0px rgb(52 64 84 / 0.03);",
        "d-md":
          "0 50px 100px 10px rgb(52 64 84 / 0.12), 0 20px 50px 4px rgb(52 64 84 / 0.05);",
        "d-lg":
          "0 100px 200px 10px rgb(52 64 84 / 0.18), 0 36px 50px 4px rgb(52 64 84 / 0.1);",

        "d-sm-top":
          "0 -12px 50px 10px rgb(52 64 84 / 0.8), 0 -12px 25px 4px rgb(52 64 84 / 0.03);",
        "d-md-top":
          "0 -25px 100px 10px rgb(52 64 84 / 0.12), 0 -12px 50px 4px rgb(52 64 84 / 0.05);",
        "d-lg-top":
          "0 -50px 200px 10px rgb(52 64 84 / 0.18), 0 -12px 50px 4px rgb(52 64 84 / 0.1);",

        "d-sm-right":
          "25px 30px 50px 10px rgb(52 64 84 / 0.8), 10px -12px 25px 4px rgb(52 64 84 / 0.03);",
        "d-md-right":
          "50px 60px 100px 10px rgb(52 64 84 / 0.12), 25px -12px 50px 4px rgb(52 64 84 / 0.05);",
        "d-lg-right":
          "100px 100px 200px 10px rgb(52 64 84 / 0.18), 50px -12px 50px 4px rgb(52 64 84 / 0.1);",

        "d-sm-left":
          "-25px 30px 50px 10px rgb(52 64 84 / 0.8), -10px -12px 25px 4px rgb(52 64 84 / 0.03);",
        "d-md-left":
          "-50px 60px 100px 10px rgb(52 64 84 / 0.12), -25px -12px 50px 4px rgb(52 64 84 / 0.05);",
        "d-lg-left":
          "-100px 100px 200px 10px rgb(52 64 84 / 0.18), -50px -12px 50px 4px rgb(52 64 84 / 0.1);",
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              "list-style-type": "disc",
            },
          },
        },
        lg: {
          css: {
            ul: {
              "list-style-type": "disc",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
