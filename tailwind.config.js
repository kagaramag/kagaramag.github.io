/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
    colors: {
      primary: '#22445D',
      secondary: '#34F96D',
      white: '#ffffff',
      black: '#000000',
      dark: '#1B2328',
      green: {
        500: '#16a34a',
      },
      blue: {
        500: '#3b82f6',
      },
      gray: {
        50: '#D5D5D5',
        100: '#BFBFBF',
        200: '#E3E3E3',
        300: '#C6C6C6',
        400: '#AAAAAA',
        500: '#8E8E8E',
        600: '#717171',
        700: '#555555',
        800: '#393939',
        900: '#1C1C1C',
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
