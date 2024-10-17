import create from "zustand";
import i18n from "../i18n";

const useLangStore = create((set) => ({

  listLangs: ["es", "en"],
  actualLang: "es", // Idioma inicial
  // Función para alternar el idioma
  changeLang: () =>
    set((state) => {
      const newLang = state.actualLang === state.listLangs[0]
        ? state.listLangs[1]
        : state.listLangs[0];

      // Cambia el idioma de i18n
      i18n.changeLanguage(newLang);

      return { actualLang: newLang };
    }),
}));

export default useLangStore;
