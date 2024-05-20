/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        style: "Roboto"
      },
      colors: {
        'd6dac8': '#FEFAE0',
        '9cafaa': '#B99470',
        'mat' : '#EBE3D5'
      },
    },
  },
  plugins: [],
}

