/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0px",
        xs: "5px",
        sm: "10px",
        default: "15px",
        lg: "20px",
        xl: "25px",
      },
      boxShadow: {
        "3xl": "5px 5px 115px -14px black;",
      },
      fontFamily: { inter: "Inter" },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "25px",
        xl: "32px",
      },
      screens: {
        sm: "320px",
        sm2: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "32px",
        8: "64px",
        9: "96px",
      },
    },
  },
  plugins: [],
};
