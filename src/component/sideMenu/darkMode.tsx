import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';

const DarkMode = () => {
  const {t} = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <TouchableOpacity style={Styles.menuItem} onPress={toggleDarkMode}>
      <View style={styles.darkModeButtonContainer}>
        <Text style={Styles.menuItemText}>{t('sideMenu.darkMode')}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.darkModeSwitch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DarkMode;



const styles = StyleSheet.create({
    darkModeButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    darkModeSwitch: {
      marginLeft: 8,
    },
  });
