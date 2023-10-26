import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';

type PrivacyPolicy = {
  navigation: StackNavigationProp<RootStackParamList, 'PrivacyPolicy'>;
};

const PrivacyPolicy = ({navigation}: PrivacyPolicy) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('PrivacyPolicy')}>
      <Text style={Styles.menuItemText}>{t('privacyPolicy.title')}</Text>
    </TouchableOpacity>
  );
};

export default PrivacyPolicy;
