import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InputScreen from '../inputScreen/index';
import OutputScreen from '../outputScreen/index';
import {useTranslation} from 'react-i18next';
import {Svg, Path} from 'react-native-svg';
import React, {useState} from 'react';
import SideMenu from '../sideMenu/index'; // Adjust the path based on your file structure

const Stack = createStackNavigator();

const CustomHeaderButton = ({navigation}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <TouchableOpacity style={{marginRight: 15}} onPress={toggleMenu}>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path
            fill="#000000"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Svg>
      </TouchableOpacity>
      <SideMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={toggleMenu}
      />
    </>
  );
};

const Navigation = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InputScreen"
        screenOptions={{
          headerRight: () => <CustomHeaderButton />,
        }}>
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            title: t('navigation.inputScreen'),
          }}
        />
        <Stack.Screen
          name="OutputScreen"
          component={OutputScreen}
          options={{
            title: t('navigation.outputScreen'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
