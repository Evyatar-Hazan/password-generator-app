import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import {
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme, {themeMode} from '../../style';

type PrivacyPolicyProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PrivacyPolicy'>;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({navigation}) => {
  const {t} = useTranslation();
  const openSourceDocument = () => {
    Linking.openURL(
      'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing',
    );
  };
  return (
    <ScrollView
      style={{...styles.container, backgroundColor: themeMode('background')}}>
      <Text style={{...styles.header, color: themeMode('text')}}>
        {t('privacyPolicy.title')}
      </Text>
      <Text style={{...styles.date, color: themeMode('text')}}>
        {t('privacyPolicy.lastUpdate')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        {t('privacyPolicy.owner')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.dataCollectionTitle')}
        </Text>{' '}
        {t('privacyPolicy.dataCollectionText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.accountCreationTitle')}
        </Text>
        {t('privacyPolicy.accountCreationText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.internetConnectionTitle')}
        </Text>{' '}
        {t('privacyPolicy.internetConnectionText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.advertisingTitle')}
        </Text>{' '}
        {t('privacyPolicy.advertisingText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.securityTitle')}
        </Text>{' '}
        {t('privacyPolicy.securityText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t("privacyPolicy.children'sPrivacyTitle")}
        </Text>{' '}
        {t("privacyPolicy.children'sPrivacyText")}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.changesPrivacyPolicyTitle')}
        </Text>{' '}
        {t('privacyPolicy.changesPrivacyPolicyText')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('privacyPolicy.contactUsTitle')}
        </Text>{' '}
        {t('privacyPolicy.contactUsText')}{' '}
        <Text style={{...styles.email, color: themeMode('text')}}>
          {t('privacyPolicy.email')}
        </Text>
        .
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        {t('privacyPolicy.linkTitle')}{' '}
        <TouchableOpacity onPress={openSourceDocument}>
          <Text style={styles.linkText}>{t('privacyPolicy.linkText')}</Text>
        </TouchableOpacity>
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
  date: {
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
  email: {
    textDecorationLine: 'underline',
    color: theme.colors.mainBlue,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: theme.colors.mainBlue,
  },
});

export default PrivacyPolicy;
