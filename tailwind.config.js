/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundColor: {
        'custom-gray': 'rgba(34, 34, 34, 1)',
      },},
    
  },
  plugins: [],
}