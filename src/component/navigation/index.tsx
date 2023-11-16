import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../homeScreen/index';
import OutputScreen from '../outputScreen/index';
import {useTranslation} from 'react-i18next';
import {Svg, Path} from 'react-native-svg';
import SideMenu from '../sideMenu/index';
import PrivacyPolicy from '../privacyPolicy';
import AboutTheApp from '../aboutTheApp';
import AboutUs from '../aboutUs';
import theme from '../../style';

const Stack = createStackNavigator();

interface CustomHeaderButtonProps {
  navigation: any;
}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = ({
  navigation,
}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <TouchableOpacity style={{marginRight: 15}} onPress={toggleMenu}>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path
            fill={theme.colors.black}
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Svg>
      </TouchableOpacity>
      <SideMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={toggleMenu}
        navigation={navigation}
      />
    </>
  );
};

const Navigation: React.FC = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({navigation}) => ({
          headerRight: () => <CustomHeaderButton navigation={navigation} />,
        })}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: t('navigation.homeScreen'),
          }}
        />
        <Stack.Screen
          name="OutputScreen"
          component={OutputScreen}
          options={{
            title: t('navigation.outputScreen'),
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            title: t('privacyPolicy.title'),
          }}
        />
        <Stack.Screen
          name="AboutTheApp"
          component={AboutTheApp}
          options={{
            title: t('aboutTheApp.title'),
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: t('aboutUs.title'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
