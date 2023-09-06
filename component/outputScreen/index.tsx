import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../public/index';

type OutputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OutputScreen'>;
};

function OutputScreen({ navigation }: OutputScreenProps) {
  return (
    <View>
      <Text>This is the Output Screen</Text>
      {/* Add content for your Output screen here */}
    </View>
  );
}

export default OutputScreen;
