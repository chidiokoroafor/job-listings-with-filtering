/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '950px'
    },
    extend: {
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"]
      },
      colors: {
        "DesaturatedDarkCyan": "hsl(180, 29%, 50%)",
        "LightGrayishCyan": "hsl(180, 52%, 96%)",
        "LightGrayishCyanFilter ": "hsl(180, 29%, 50%)",
        "DarkGrayishCyan": "hsl(180, 8%, 52%)",
        "VeryDarkGrayishCyan": "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        "BgHeaderDesktop": "url('/images/bg-header-desktop.svg')",
        "BgHeaderMobile": "url('/images/bg-header-mobile.svg')",
      },
      
    },
  },
  plugins: [],
}

