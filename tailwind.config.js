/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9b1b44",

          "secondary": "#7cef43",

          "accent": "#fc44a3",

          "neutral": "#201523",

          "base-100": "#F3EBF4",

          "info": "#A8C8E6",

          "success": "#118849",

          "warning": "#F5C20A",

          "error": "#EF564E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
