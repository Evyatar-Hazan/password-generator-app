import {Text, TouchableOpacity, Linking} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public';

type PrivacyPolicy = {
  navigation: StackNavigationProp<RootStackParamList, 'PrivacyPolicy'>;
};

const PrivacyPolicyLink = () => {
  const privacyPolicyURL =
    'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing';
  Linking.openURL(privacyPolicyURL).catch(err =>
    console.error('Error opening privacy policy:', err),
  );
};

const PrivacyPolicy = ({navigation}: PrivacyPolicy) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={Styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicy')}>
      <Text style={Styles.menuItemText}>{t('privacyPolicy.title')}</Text>
    </TouchableOpacity>
  );
};

export default PrivacyPolicy;
