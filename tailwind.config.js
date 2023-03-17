/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "25px",
        xl: "32px",
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        DEFAULT: "16px",
        lg: "24px",
        xl: "32px",
      },
      screens: {
        sm: "320px",
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
        5: "24px",
        6: "32px",
        7: "64px",
        8: "96px",
      },
      fontFamily: { inter: "Inter" },
      colors: {
        grey: {
          100: "#e7e7e7",
          900: "#1e1b26",
        },
      },
    },
  },
  plugins: [],
};
