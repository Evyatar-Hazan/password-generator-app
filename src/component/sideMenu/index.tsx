import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import PrivacyPolicy from './privacyPolicy';
import LanguagePicker from './languagePicker';
import Styles from './styles';
import {useTranslation} from 'react-i18next';

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({isVisible, onClose}) => {
  const {t} = useTranslation();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={Styles.modal}
      animationIn="slideInRight"
      animationOut="slideInRight">
      <View style={Styles.modalContent}>
        <PrivacyPolicy />
        <LanguagePicker />
        <Text>{t('privacyPolicy.privacyPolicy')}</Text>
      </View>
    </Modal>
  );
};

export default SideMenu;