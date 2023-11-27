import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme, {themeMode} from '../../style';

type AboutTheAppProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};

const AboutTheApp: React.FC<AboutTheAppProps> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView
      style={{...styles.container, backgroundColor: themeMode('background')}}>
      <Text style={{...styles.header, color: themeMode('text')}}>
        {t('aboutTheApp.title')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}></Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.gettingStarted')}
        </Text>
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.enterYourPersonalWordTitle')}
        </Text>{' '}
        {t('aboutTheApp.enterYourPersonalWordText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.enterPlatformSpecificWordTitle')}
        </Text>{' '}
        {t('aboutTheApp.enterPlatformSpecificWordText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.exampleUsageTitle')}
        </Text>{' '}
        {t('aboutTheApp.exampleUsageText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.generatedPasswordsTitle')}
        </Text>{' '}
        {t('aboutTheApp.generatedPasswordsText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}></Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.securityTips')}
        </Text>
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.keepYourPersonalWordSecretTitle')}
        </Text>{' '}
        {t('aboutTheApp.keepYourPersonalWordSecretText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.avoidUsingObviousPlatformWordsTitle')}
        </Text>{' '}
        {t('aboutTheApp.avoidUsingObviousPlatformWordsText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutTheApp.selectThePasswordTitle')}
        </Text>{' '}
        {t('aboutTheApp.selectThePasswordText')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        {t('aboutTheApp.thanks')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.text,
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
    color: theme.colors.text,
  },
  bold: {
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});

export default AboutTheApp;
