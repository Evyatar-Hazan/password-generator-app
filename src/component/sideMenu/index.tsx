import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import PrivacyPolicy from './privacyPolicy';
import LanguagePicker from './languagePicker';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import AboutTheApp from './aboutTheApp';
import ShareApp from './shareApp';
import AboutUs from './aboutUs';
import appLogo from './app_logo.png';

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: any;
  onMenuItemPress: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  isVisible,
  onClose,
  navigation,
}) => {
  const {t} = useTranslation();
  const {height} = Dimensions.get('window');
  return (
    <Modal
      style={{margin: 0, flex: 1}}
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      backdropOpacity={0.4}
      avoidKeyboard={true}
      deviceHeight={height + 120}>
      <View style={Styles.modalContent}>
        <ScrollView>
          <TouchableOpacity style={Styles.logoImageContent}>
            <Image source={appLogo} style={Styles.logoImage} />
          </TouchableOpacity>
          <ShareApp />
          <PrivacyPolicy navigation={navigation} />
          <AboutTheApp navigation={navigation} />
          <AboutUs navigation={navigation} />
          <LanguagePicker />
          <Text>{'\n\n\n'}</Text>
          <TouchableOpacity style={Styles.privacyPolicy}>
            <Text>{t('privacyPolicy.privacyPolicy')}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SideMenu;
