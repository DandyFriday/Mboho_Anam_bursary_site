/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:'#ff8832',
        darkGreen: '007500',
        neutralSilver: '#fsf7fa'
      
      },
    },
  },
  plugins: [],
}
