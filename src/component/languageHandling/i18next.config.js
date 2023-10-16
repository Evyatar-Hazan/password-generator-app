import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, he} from './translations/index';
import { I18nManager } from "react-native"


const { languageDetectorPlugin } = require("./languageDetectorPlugin");

const resources = {
  en: {
    translation: en,
  },
  he: {
    translation: he,
  },
};


i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    //language to use if translations in user language are not available
    lng: I18nManager.isRTL ? 'he' : 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });

export default i18n;
