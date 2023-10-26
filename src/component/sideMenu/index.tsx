import React from 'react';
import {View, Text, SafeAreaView, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import PrivacyPolicy from './privacyPolicy';
import LanguagePicker from './languagePicker';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import AboutTheApp from './aboutTheApp';
import ShareApp from './shareApp';
import AboutUs from './aboutUs';
import { I18nManager } from "react-native"

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
  const isLtr = I18nManager.isRTL ? 'he' : 'en'
  const {height} = Dimensions.get('window');
  return (
    <Modal
    style={{margin: 0, flex: 1}}
    isVisible={isVisible}
    onBackdropPress={onClose}
    animationIn={isLtr ? 'slideInLeft' : 'slideInRight'}
    animationOut={isLtr ? 'slideOutLeft' : 'slideOutRight'}
    backdropOpacity={0.4}
    avoidKeyboard={true}
    deviceHeight={height + 120}>
      {/* <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
            {/* <TouchableWithoutFeedback> */}
              <View style={Styles.modalContent}>
                <ShareApp />
                <PrivacyPolicy navigation={navigation} />
                <AboutTheApp navigation={navigation} />
                <AboutUs navigation={navigation} />
                <LanguagePicker />
                <Text>{t('privacyPolicy.privacyPolicy')}</Text>
              </View>
            {/* </TouchableWithoutFeedback> */}
        {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </Modal>
  );
};

export default SideMenu;
