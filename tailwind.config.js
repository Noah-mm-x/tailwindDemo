/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // 加上这行，tailwind才生效
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        active: {
          normal: '#333',
          dark: '#5F99F7'
        },
        blue: {
          default: '#5F99F7'
        },
      }
    },
  },
  plugins: [
    './src/**/*.html',
    './src/**/*.vue',
    './*.html'
  ],
}

