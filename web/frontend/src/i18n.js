// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Usar para cargar archivos de traducción
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Pasa i18n a React
  .init({
    fallbackLng: 'es', // Idioma por defecto
    lng: 'es', // Idioma inicial
    debug: true, // Cambia a false en producción
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta de tus archivos de traducción
    },
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar
    },
    ns: ['common', 'hard_skills', 'header', 'soft_skills'], // Tus namespaces
    defaultNS: 'common',
    react: {
      useSuspense: false, // Deja en false para evitar problemas en SSR
    },
  });

export default i18n;
