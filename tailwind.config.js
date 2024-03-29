/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',                                                       
    './src/**/*.{vue,js,ts,jsx,tsx,svg}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

