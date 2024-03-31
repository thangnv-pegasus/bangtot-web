/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        baseColor: "#627c24",
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
        phone_number: '0 0 0 0 #ed5ae3'
      
      },
      rotate: {
        "rotateZ-180": "transform: rotateZ(180deg)",
      },
      backgroundColor: {
        baseColor: "#627c24",
        baseBg: "#7bab20",
        hotline_bg1: '#22bad8',
        hotline_bg2: '#333',
        hotline_bg3: '#019610'
      },
      borderColor: {
        baseColor: "#627c24",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        fadeIn: "fadeIn 0.3s ease-in",
        enlarge: "enlarge 0.2s linear",
        shaking: "shaking 1s linear infinite",
        zoom: 'zoom 1s linear infinite',
        fadeIn2: 'fadeIn2 0.3s ease-in'
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
          "0%": { transform: "translate(-50%,50%)", opacity: "0", left: "50%" },
          "100%": {
            transform: "translate(-50%,0%)",
            opacity: "1",
            left: "50%",
          },
        },
        enlarge: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        shaking: {
          "0%": {
            transform: "rotate(0deg) scale(1) skew(1deg)",
          },
          "10%": {
            transform: "rotate(-25deg) scale(1) skew(1deg)",
          },
          "20%": {
            transform: "rotate(25deg) scale(1) skew(1deg)",
          },
          "30%": {
            transform: "rotate(-25deg) scale(1) skew(1deg)",
          },
          "40%": {
            transform: "rotate(25deg) scale(1) skew(1deg)",
          },
          "50%": {
            transform: "rotate(0) scale(1) skew(1deg)",
          },
          "100%": {
            transform: "rotate(0) scale(1) skew(1deg)",
          },
        },
        zoom: {
          '0%':{
            transform: 'scale(0.9)',
          },
          '70%':{
            transform: 'scale(1.1)',
            'box-shadow': '0 0 0 20px transparent'
          },
          '100%':{
            transform: 'scale(0.9)',
            'box-shadow': '0 0 0 0 transparent'
          }
        },
        fadeIn2: {
          '0%': {
            transform: 'translate(100%, 0)',
            opacity: '0'
          },
          '100%':{
            transform: 'translate(0, 0)',
            opacity: '1'
          }
        }
      },
      gridTemplateColumns: {
        'row_user_table': '1fr 2fr 2fr 2fr 2fr 1fr 2fr',
        '4_6': '4fr 6fr',
        '6_4': '6fr 4fr',
        '3_1_2_1': '3fr 1fr 2fr 1fr',
        '3_1_2_1': '3fr 1fr 2fr 1fr',
        '3_9': '3fr 9fr'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
