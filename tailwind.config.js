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
        "selected-text":"#A3A3FF",
        theme:"#5c318c"
      },
    },
    fontFamily:{
      poppins :["Poppins","sans-serif"]
    },
  },
  plugins: [],
}

