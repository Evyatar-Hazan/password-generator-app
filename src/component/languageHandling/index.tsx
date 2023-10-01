import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import heTranslation from './locales/he.json';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: enTranslation,
      },
      he: {
        translation: heTranslation,
      },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback to English if a translation is missing
  });

export const currentLanguage = () => {
  return i18next.language; 
}

export const languageHandling = (name: string, params = {}) => {
    return i18next.t(name, params);
}

export const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
}