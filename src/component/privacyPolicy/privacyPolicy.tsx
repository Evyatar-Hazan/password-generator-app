import React from 'react';
import {Text, TouchableOpacity, Linking, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const PrivacyPolicyLink = () => {
  const privacyPolicyURL =
    'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing';
  const {t} = useTranslation();
  const openPrivacyPolicy = () => {
    Linking.openURL(privacyPolicyURL).catch(err =>
      console.error('Error opening privacy policy:', err),
    );
  };

  return (
    <TouchableOpacity onPress={openPrivacyPolicy}>
      <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
        {t('privacyPolicy.title')}
      </Text>
    </TouchableOpacity>
  );
};

const PrivacyPolicy = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>
        {t('privacyPolicy.privacyPolicy')} <PrivacyPolicyLink />
      </Text>
    </View>
  );
};
export default PrivacyPolicy;
