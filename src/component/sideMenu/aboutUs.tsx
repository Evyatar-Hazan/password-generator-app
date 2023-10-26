import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function AboutUsIcon() {
  return (
    <Svg width="18px" height="18px" viewBox="0 0 18 18" >
      <Defs>
        <Path
          d="M6.4 7.283l.883.884.884-.884L6.4 5.517 4.633 7.283l.884.884.883-.884zm2.6 6.3a4.58 4.58 0 004.258-2.916H4.742A4.58 4.58 0 009 13.583zm.833-6.3l.884.884.883-.884.883.884.884-.884L11.6 5.517 9.833 7.283zM8.992.667A8.324 8.324 0 00.667 9a8.324 8.324 0 008.325 8.333c4.6 0 8.341-3.725 8.341-8.333 0-4.608-3.733-8.333-8.341-8.333zm.008 15A6.665 6.665 0 012.333 9 6.665 6.665 0 019 2.333 6.665 6.665 0 0115.667 9 6.665 6.665 0 019 15.667z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-17 -272) translate(16 258)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G transform="translate(1 14)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill="#002B36">
            <Path transform="translate(-1 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}

type AboutUs = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutUs'>;
};

const AboutUs = ({navigation}: AboutUs) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('AboutUs')}>
        <Text>
      <AboutUsIcon />
      <Text style={Styles.menuItemText}>{t('aboutUs.title')}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default AboutUs;

