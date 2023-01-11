/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3cd15a",

          "secondary": "#C26124",

          "accent": "#ce048e",

          "neutral": "#002657",

          "base-100": "#F1F6F8",

          "info": "#7E97DD",

          "success": "#1FC15D",

          "warning": "#E0B715",

          "error": "#F26E8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
