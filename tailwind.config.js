/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: '#__next',
  theme: {
    colors: {
      primary: {
        100: '#FFBA70',
        200: '#FFB05C',
        300: '#FFA647',
        400: '#FF9C33',
        500: '#FF931F', // main
        600: '#FF890A',
        700: '#F57E00',
        800: '#E07400',
        900: '#CC6900',
      },
      secondary: {
        100: '#3F5A78',
        200: '#38506B',
        300: '#31465E',
        400: '#2A3C50',
        500: '#233243', // main
        600: '#1C2835',
        700: '#151E28',
        800: '#0E141B',
        900: '#070A0D',
      },
      text: {
        100: '#F5F5F5',
        200: '#EBEBEB', // main
        300: '#E0E0E0',
        400: '#CCCCCC',
        500: '#C2C2C2',
        600: '#B8B8B8',
        700: '#ADADAD',
        800: '#A3A3A3',
        900: '#999999',
      },
    },
  },
}
