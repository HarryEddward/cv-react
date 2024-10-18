// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Carga los archivos de traducción
import LanguageDetector from 'i18next-browser-languagedetector'; // Detecta el idioma desde el navegador

i18n
  .use(Backend) // Cargar archivos de traducción
  .use(LanguageDetector) // Detectar idioma
  .use(initReactI18next) // Inicializar con React
  .init({
    fallbackLng: 'en', // Idioma por defecto si no hay traducción disponible
    debug: true, // Activa la depuración para saber cuándo ocurren problemas
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta donde se encuentran los archivos de traducción
    },
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;