import { configFontifyFonts } from './fontifyTailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: configFontifyFonts,

      screens: {
        'xs': '480px',  // breakpoint personalizado para pantallas extra pequeñas
        'sm': '640px',  // reemplazar si deseas cambiar el tamaño de 'sm'
        'md': '768px',  // reemplazar si deseas cambiar el tamaño de 'md'
        'lg': '1024px', // reemplazar si deseas cambiar el tamaño de 'lg'
        'xl': '1280px', // reemplazar si deseas cambiar el tamaño de 'xl'
        '2xl': '1536px' // reemplazar si deseas cambiar el tamaño de '2xl'
      },
    },
  },
  plugins: [],
}