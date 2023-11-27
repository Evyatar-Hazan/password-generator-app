import React, {useEffect, useState} from 'react';
import Main from './src/main';
import * as Sentry from '@sentry/react-native';
import SplashScreen from 'react-native-splash-screen';
import i18n from './src/component/languageHandling/i18next.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import {ThemeProvider} from './src/style/ThemeContext';

Sentry.init({
  dsn: 'https://61da0d0eb38990802eb1d1919fef4f54@o4506066093801472.ingest.sentry.io/4506066096685056',
});

const App: React.FC = () => {
  const STORE_LANGUAGE_KEY = 'settings.lang';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const setLanguage = async () => {
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      setCurrentLanguage(language || currentLanguage);

      const isHebrew =
        language === 'he' || (language === null && currentLanguage === 'he');

      try {
        I18nManager.allowRTL(isHebrew);
        i18n.changeLanguage(language || currentLanguage);
      } catch (e) {
        console.log(e);
      }
    };
    setLanguage();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [currentLanguage]);

  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
