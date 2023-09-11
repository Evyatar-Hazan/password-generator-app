import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public/index';
import {RouteProp} from '@react-navigation/native';
import {passwordGenerator} from '../hashHandling';

type OutputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OutputScreen'>;
  route: RouteProp<RootStackParamList, 'OutputScreen'>;
};

function OutputScreen({route, navigation}: OutputScreenProps) {
  const {hashedText} = route.params;
  const {
    numbersPassword: pass12Numbers,
    lettersPassword: pass12Letters,
    numbersAndLettersPassword: pass12NumbersAndLetters,
    upperCasePassword: pass12UpperCase,
    transformToSign: pass12TransformToSign,
  } = passwordGenerator(hashedText, 12);
  const {
    numbersPassword: pass8Numbers,
    lettersPassword: pass8Letters,
    numbersAndLettersPassword: pass8NumbersAndLetters,
    upperCasePassword: pass8UpperCase,
    transformToSign: pass8TransformToSign,
  } = passwordGenerator(hashedText, 8);
  const {
    numbersPassword: pass4Numbers,
    lettersPassword: pass4Letters,
    numbersAndLettersPassword: pass4NumbersAndLetters,
    upperCasePassword: pass4UpperCase,
    transformToSign: pass4TransformToSign,
  } = passwordGenerator(hashedText, 4);

  return (
    <View>
      <Text>This is the Output Screen</Text>
      {/* Add content for your Output screen here */}
    </View>
  );
}

export default OutputScreen;
