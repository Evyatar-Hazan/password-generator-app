import {Dimensions} from 'react-native';
import {useTheme} from './ThemeContext';

const theme = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  colors: {
    mainBlue: '#6273f0',
    greyAlpha: 'rgba(239,239,244,0.7)',
    grey: '#aaa',
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    title: '#002b36',
    subtitle: '#002B36',
    background: '#f0f0f0',
    text: '#000000',
    success: '#339900',
    error: '#cc3300',
    info: '#ffcc00',
    green: '#2ecc71',
    securePassword: {
      weak: '#ff4d4d',
      medium: '#ffcc66',
      strong: '#99ff99',
      veryStrong: '#66ccff',
      superStrong: '#9900cc',
    },
  },
  fontFamily: {
    regular: 'Cochin',
    bold: 'Cochin',
    light: 'Cochin',
    medium: 'Cochin',
    extraBold: 'Cochin',
    extraLight: 'Cochin',
    thin: 'Cochin',
  },
  fontSize: {
    large: 42,
    medium: 24,
    normal: 14,
  },
};

export default theme;

type mapMode = {
  [key: string]: string;
};

const lightMode: mapMode = {
  background: '#f0f0f0',
  text: '#000000',
  whiteIcon: '#f4f3f4',
  black: '#000',
  backgroundHeader: '#fff',
};

const darkMode: mapMode = {
  background: '#383838',
  text: '#ffffff',
  whiteIcon: '#f5dd4b',
  black: '#fff',
  backgroundHeader: '#282828',
};

export const themeMode = (style: string) => {
  const {colorScheme} = useTheme();
  const theme = colorScheme === 'dark' ? darkMode : lightMode;
  return theme[style];
};
