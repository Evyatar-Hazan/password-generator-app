import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { currentLanguage, changeLanguage } from '.';

interface LanguageButtonProps {
  language: string;
  setCurrentLanguage: (currentLang: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ language, setCurrentLanguage }) => {

  const handleLanguageChange = () => {
    const currentLang = currentLanguage()
    if (currentLang == 'en') {
      changeLanguage('he')
      setCurrentLanguage('he')
    }
    else {
      changeLanguage('en')
      setCurrentLanguage('en')
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLanguageChange}>
      <Text style={styles.buttonText}>{language}</Text>
      <Icon name="globe" size={20} color="#007bff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  buttonText: {
    marginRight: 5,
    color: '#007bff',
  },
});

export default LanguageButton;
