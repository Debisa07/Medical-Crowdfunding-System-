// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/en.json";
import amTranslation from "./locales/am/am.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  am: {
    translation: amTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "am",
  fallbackLng: "am",
  interpolation: {
    escapeValue: true,
  },
});

export default i18n;
