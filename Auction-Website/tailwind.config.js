import { Gradient } from "@mui/icons-material";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Google: ["Poppins"],
        Roboto: ["Roboto"],
        Lato: ["Lato"],
      },
      colors: {
        softBlue: "#e7f3ff",
        paleGray: "#f5f5f5",
        mintGreen: "#d4f4e0",
        lavender: "#e8d5ff",
        peach: "#ffe5b4",
        antique: {
          light: "#FAEBD7", // Antique White
          dark: "#D4C4A8", // Darker Antique Color
        },
      },
      boxShadow: {
        "card-shadow": "0px 0px 7px 1px  rgba(0, 0, 0, 0.5)",
        "custom-light": "0 4px 15px rgba(0, 0, 0, 0.1)", // light shadow
        "custom-dark": "0 0px 5px 0.5px  rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
