import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0866C6',
        'tabs-blue': '#064d95',
        'tabs-grey-one': '#b1b1b1',
        'tabs-grey-two': '#737c85',
        'tabs-grey-three': '#868ba1',
        'tabs-red': '#dc3545'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
