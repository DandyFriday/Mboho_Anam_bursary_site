/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#1F4B43",
        "orange":'#ff8832',
        "darkGreen": '007500',
        "neutralSilver": '#fsf7fa'
      
      },
    },
  },
  plugins: [],
}

