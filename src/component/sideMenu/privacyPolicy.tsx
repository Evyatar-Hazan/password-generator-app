import {Text, TouchableOpacity, Linking} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';

const PrivacyPolicyLink = () => {
  const privacyPolicyURL =
    'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing';
  Linking.openURL(privacyPolicyURL).catch(err =>
    console.error('Error opening privacy policy:', err),
  );
};

const PrivacyPolicy = () => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={Styles.menuItem} onPress={PrivacyPolicyLink}>
      <Text style={Styles.menuItemText}>{t('privacyPolicy.title')}</Text>
    </TouchableOpacity>
  );
};

export default PrivacyPolicy;
