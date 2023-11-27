import React from 'react';
import {
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
import theme, {themeMode} from '../../style';

type AboutUsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};

const AboutUs: React.FC<AboutUsProps> = ({navigation}) => {
  const {t} = useTranslation();

  const thinkerLinkedinURL =
    'https://www.linkedin.com/in/mendy-bloy-5671b8276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const organizedByLinkedinURL =
    'https://www.linkedin.com/in/evyatar-hazan-662235210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const githubURL = 'https://github.com/Evyatar-Hazan/password-generator';

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={{...styles.container, backgroundColor: themeMode('background')}}>
      <Text style={{...styles.header, color: themeMode('text')}}>
        {t('aboutUs.title')}
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        {t('aboutUs.text')}
      </Text>

      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutUs.thinkerTitle')}
        </Text>{' '}
        {t('aboutUs.thinkerName')}
        <TouchableOpacity onPress={() => openLink(thinkerLinkedinURL)}>
          <Icon name="linkedin" size={16} color={theme.colors.mainBlue} />
        </TouchableOpacity>
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutUs.organizedByTitle')}
        </Text>{' '}
        {t('aboutUs.organizedByName')}
        <TouchableOpacity onPress={() => openLink(organizedByLinkedinURL)}>
          <Icon name="linkedin" size={16} color={theme.colors.mainBlue} />
        </TouchableOpacity>
      </Text>
      <Text style={{...styles.paragraph, color: themeMode('text')}}>
        <Text style={{...styles.bold, color: themeMode('text')}}>
          {t('aboutUs.linkToGithubTitle')}
        </Text>{' '}
        <TouchableOpacity onPress={() => openLink(githubURL)}>
          <Icon name="github" size={16} color={theme.colors.mainBlue} />
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

export default AboutUs;

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
