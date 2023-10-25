import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public';
import Icon from 'react-native-vector-icons/FontAwesome';

type AboutUsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};



const AboutUs: React.FC<AboutUsProps> = ({ navigation }) => {
  // const { linkedinURL, githubURL } = { 'linkedinURL': 'linkedinURL', 'githubURL': 'githubURL' }
  // const openLink = (url: string) => {
  //   Linking.canOpenURL(url).then((supported) => {
  //     if (supported) {
  //       Linking.openURL(url);
  //     } else {
  //       console.error("Don't know how to open URI: " + url);
  //     }
  //   });
  // };

  return (
    <>
  {/* <View style={{ alignItems: 'center' }}>
    <Image
      source={require('./1648206324373.jpeg')}
      style={{ width: 100, height: 100, borderRadius: 50 }}
    />
    <Text>About Us</Text>
    <Text>
      Write a brief description about your team or yourself here. You can provide information about your skills,
      experience, and goals.
    </Text>
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
    <TouchableOpacity onPress={() => openLink(linkedinURL)}>
      <Icon name="linkedin" size={30} color="#0077b5" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openLink(githubURL)}>
      <Icon name="github" size={30} color="#333" />
    </TouchableOpacity>
  </View> */}
  </>

  );
};

export default AboutUs;
