import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';

type AboutUs = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutUs'>;
};

const AboutUs = ({navigation}: AboutUs) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('AboutUs')}>
      <Text style={Styles.menuItemText}>{t('aboutUs.title')}</Text>
    </TouchableOpacity>
  );
};

export default AboutUs;

