import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import en from './locales/en.json';
import he from './locales/he.json';



const resources = {
    en: {
      translation: en,
    },
    he: {
      translation: he,
    },
  };

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;


export const languageHandling = (name, params = {}) => {
    const { t } = useTranslation();
    return t(name, params);
}