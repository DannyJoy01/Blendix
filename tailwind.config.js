/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      mtn: ['"MTN Brighter Sans Regular"', 'sans-serif'],
      inter: ['Inter'],
      pop:['Poppins', 'sans-serif'],
      mont:['Montserrat', 'sans-serif'],
    },
    colors:{
      nav_bg: "#1E2028",
      nt_col: "#8E8F93",
      dix_white:"#FFFFFF",
      dix_yellow:"#F5A623",
      dix_blue:"#282C4B",
      dix_seaBlue:"#0AAFFF",
      dix_grey:"#292929",
      dix_lightGreen:"#A8DF7F80",
      dix_hoverGreen:"#A8DF7F",
      dix_hoverBlue:"#593FBA",
      dix_orange:"#FF715B",
      dix_txtWhite:"#D9D9D9",
    },
    screens: {
      sm: '640px',   // ≥640px
      md: '768px',   // ≥768px
      lg: '1024px',  // ≥1024px
      xl: '1280px',  // ≥1280px
      '2xl': '1536px', // ≥1536px
    },
  },
  plugins: [],
}