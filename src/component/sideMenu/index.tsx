import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import PrivacyPolicy from './privacyPolicy';
import LanguagePicker from './languagePicker';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import AboutTheApp from './aboutTheApp';
import ShareApp from './shareApp';
import AboutUs from './aboutUs';

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
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={Styles.modal}
      animationIn="slideInRight"
      animationOut="slideInRight">
      <View style={Styles.modalContent}>
        <ShareApp />
        <PrivacyPolicy navigation={navigation} />
        <AboutTheApp navigation={navigation} />
        <AboutUs navigation={navigation} />
        <LanguagePicker />
        <Text>{t('privacyPolicy.privacyPolicy')}</Text>
      </View>
    </Modal>
  );
};

export default SideMenu;
