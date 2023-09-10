import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../public/index';
import { RouteProp } from '@react-navigation/native';
import { getNumbersPassword } from '../hashHandling';

type OutputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OutputScreen'>;
  route: RouteProp<RootStackParamList, 'OutputScreen'>;
};

function OutputScreen({ route, navigation }: OutputScreenProps) {
  const { hashedText } = route.params || { hashedText: 'Default Value' };
  const numbersPassword = getNumbersPassword(hashedText)
  return (
    <View>
      <Text>This is the Output Screen</Text>
      {/* Add content for your Output screen here */}
    </View>
  );
}

export default OutputScreen;
