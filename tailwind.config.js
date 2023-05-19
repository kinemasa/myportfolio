/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body:"#111110",
        theme:"#5c318c",
        underline:"#A18803",
        secondary:"#A18803",
        badge:"#3F3F51",
        inputBorder:"#56566",
        input : "#2A2A33",
        "selected-text":"#A3A3FF",
      },
    },
    fontFamily:{
      poppins :["Poppins","sans-serif"]
    },
  },
  plugins: [],
}

