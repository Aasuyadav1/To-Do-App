/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        secondary: '#14b8a6',
        accent: '#99f6e4'
      }
    },
  },
  plugins: [],
}