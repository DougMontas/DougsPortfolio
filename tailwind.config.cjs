/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'MyPic': "url('src/assets/MyPic.png')"
      }
    },
  },
  plugins: [],
}