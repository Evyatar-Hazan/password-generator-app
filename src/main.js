import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './component/inputScreen/index';
import OutputScreen from './component/outputScreen';
import PrivacyPolicy from './component/privacyPolicy/privacyPolicy';



const Stack = createStackNavigator();


const Main = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputScreen">
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="OutputScreen" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <PrivacyPolicy />
    </>

  );
}

export default Main;