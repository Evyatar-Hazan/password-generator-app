import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public';

type AboutTheApp = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};

const AboutTheApp = ({navigation}: AboutTheApp) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('AboutTheApp')}>
      <Text style={Styles.menuItemText}>{t('aboutTheApp.title')}</Text>
    </TouchableOpacity>
  );
};

export default AboutTheApp;
