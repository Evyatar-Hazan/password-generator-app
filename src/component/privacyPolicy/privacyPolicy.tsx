




import React from 'react';
import { Text, TouchableOpacity, Linking, View } from 'react-native';

const PrivacyPolicyLink = () => {
    const privacyPolicyURL = 'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing';
    
  const openPrivacyPolicy = () => {
      Linking.openURL(privacyPolicyURL).catch((err) =>
      console.error('Error opening privacy policy:', err)
      );
    };
    
    return (
        <TouchableOpacity onPress={openPrivacyPolicy}>
      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
        Privacy Policy
      </Text>
    </TouchableOpacity>
  );
};


const PrivacyPolicy = () => {
    return (
        <View>
        <Text>
          By using this app, you agree to our{' '}
          <PrivacyPolicyLink /> 
        </Text>
      </View>
    )
}
export default PrivacyPolicy;
