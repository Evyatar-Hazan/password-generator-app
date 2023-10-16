import React, {useState} from 'react';
import {Text, TouchableOpacity, I18nManager} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

type languageMap = {
  [key: string]: string;
};

const LanguagePicker = () => {
  const {t, i18n} = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = ['en', 'he'];
  const languageMap: languageMap = {
    en: 'language.en',
    he: 'language.he',
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      I18nManager.forceRTL(i18n.language === "he")
      RNRestart.restart()
    });
    setShowLanguages(false);
  };

  return (
    <>
      <TouchableOpacity
        style={Styles.menuItem}
        onPress={() => setShowLanguages(!showLanguages)}>
        <Text style={Styles.menuItemText}>{t('sideMenu.language')}</Text>
      </TouchableOpacity>
      {showLanguages &&
        languages.map(language => (
          <TouchableOpacity
            key={language}
            style={Styles.languageButton}
            onPress={() => changeLanguage(language)}>
            <Text style={Styles.menuItemText}>{t(languageMap[language])}</Text>
          </TouchableOpacity>
        ))}
    </>
  );
};

export default LanguagePicker;
