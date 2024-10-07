// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // pasa i18n a la instancia de react-i18next
  .init({
    resources: {
      en: {
        translation: {
          info_cursor: "Put the cursor over",
          about: "About",
          contact: "Contact",
        },
      },
      es: {
        translation: {
          info_cursor: "Poner el cursor encima",
          about: "Acerca",
          contact: "Contacto",
        },
      },
    },
    lng: "es", // idioma por defecto
    fallbackLng: "es", // idioma por defecto si la traducción no está disponible
    interpolation: {
      escapeValue: false, // react ya se encarga de la seguridad
    },
  });

export default i18n;
