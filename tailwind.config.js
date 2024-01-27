/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        baseColor: '#627c24'
      },
      maxWidth: {
        container: "80rem",
      },
      width: {
        container: "80rem",
      },
      boxShadow: {
        slate_bottom: "0 0 10px rgba(0,0,0,0.1)",
        mega_menu: "0px 2px 6px 0px rgba(50,50,50,0.33)",
      },
      rotate:{
        'rotateZ-180': 'transform: rotateZ(180deg)'
      },
      backgroundColor: {
        baseColor: '#627c24',
        baseBg: '#7bab20'
      },
      borderColor: {
        baseColor: '#627c24',
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        fadeIn: "fadeIn 0.3s ease-in",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { transform: "translate(-50%,50%)",opacity: "0", left: "50%" },
          "100%": { transform: "translate(-50%,0%)", opacity: "1", left: "50%" },
        },
      },
    },
  },
  plugins: [],
};
