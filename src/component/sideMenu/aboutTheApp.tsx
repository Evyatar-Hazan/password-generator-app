import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
import theme from '../../style';

const AboutTheAppIcon = () => {
  return (
    <Svg
      width="15px"
      height="18px"
      viewBox="0 0 15 18"
      style={{width: 15, height: 18, marginRight: 9}}>
      <Defs>
        <Path
          d="M7.583.667A7.088 7.088 0 00.5 7.75a7.088 7.088 0 007.083 7.083H8v2.5c4.05-1.95 6.667-5.833 6.667-9.583A7.088 7.088 0 007.583.667zm.834 12.083H6.75v-1.667h1.667v1.667zm0-2.917H6.75c0-2.708 2.5-2.5 2.5-4.166C9.25 4.75 8.5 4 7.583 4c-.916 0-1.666.75-1.666 1.667H4.25a3.332 3.332 0 116.667 0c0 2.083-2.5 2.291-2.5 4.166z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-18 -320) translate(16 258) translate(0 48)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G transform="translate(2 14)">
          <Mask id="c" fill={theme.colors.white}>
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill={theme.colors.black}>
            <Path transform="translate(-2 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

type AboutTheApp = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};

const AboutTheApp = ({navigation}: AboutTheApp) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('AboutTheApp')}>
      <Text>
        <AboutTheAppIcon />
        <Text>{'  '}</Text>
        <Text style={Styles.menuItemText}>{t('aboutTheApp.title')}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default AboutTheApp;
