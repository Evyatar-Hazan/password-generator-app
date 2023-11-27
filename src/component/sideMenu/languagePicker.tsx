import React, {useState} from 'react';
import {Text, TouchableOpacity, I18nManager, StyleSheet} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {CountryFlag} from 'react-native-flag-creator';
import {themeMode} from '../../style';

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

  const languageMapIcon: languageMap = {
    en: 'US',
    he: 'il',
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      I18nManager.allowRTL(i18n.language === 'he');
      I18nManager.forceRTL(i18n.language === 'he');
      RNRestart.restart();
    });
    setShowLanguages(false);
  };

  return (
    <>
      <TouchableOpacity
        style={Styles.menuItem}
        onPress={() => setShowLanguages(!showLanguages)}>
        <Text>
          <CountryFlag
            countryCode={languageMapIcon[i18n.language]}
            style={styles.countryFlag}
          />
          <Text>{'  '}</Text>
          <Text style={{...Styles.menuItemText, color: themeMode('text')}}>
            {t('sideMenu.language')}
          </Text>
        </Text>
      </TouchableOpacity>
      {showLanguages &&
        languages.map(language => (
          <TouchableOpacity
            key={language}
            style={Styles.languageButton}
            onPress={() => changeLanguage(language)}>
            <Text>
              <CountryFlag
                countryCode={languageMapIcon[language]}
                style={styles.countryFlag}
              />
              <Text>{'  '}</Text>
              <Text style={{...Styles.menuItemText, color: themeMode('text')}}>
                {t(languageMap[language])}
              </Text>
            </Text>
          </TouchableOpacity>
        ))}
    </>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  countryFlag: {
    height: 18,
    width: 18,
    borderRadius: 20,
  },
});
