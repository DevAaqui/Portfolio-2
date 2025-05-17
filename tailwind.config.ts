const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            50: "#E6F1FE",
            100: "#CCE4FD",
            200: "#99C9FB",
            300: "#66AEF9",
            400: "#3393F7",
            500: "#0078F5",
            600: "#0060C4",
            700: "#004893",
            800: "#003062",
            900: "#001831",
            DEFAULT: "#0078F5",
          }
        }
      },
      dark: {
        colors: {
          background: "#11181C",
          foreground: "#ECEDEE",
          primary: {
            50: "#001831",
            100: "#003062",
            200: "#004893",
            300: "#0060C4",
            400: "#0078F5",
            500: "#3393F7",
            600: "#66AEF9",
            700: "#99C9FB",
            800: "#CCE4FD",
            900: "#E6F1FE",
            DEFAULT: "#3393F7",
          }
        }
      }
    },
  })]
}