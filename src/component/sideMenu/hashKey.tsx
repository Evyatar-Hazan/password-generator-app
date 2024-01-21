import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
import {themeMode} from '../../style';

const HashKeyIcon = () => {
  return (
    <Svg width="18px" height="18px" viewBox="0 0 18 18">
      <Defs>
        <Path
          d="M2 2H4V4H2V2M2 6H4V14H2V6M2 16H4V18H2V16M6 2H8V4H6V2M6 16H8V18H6V16M10 2H12V4H10V2M10 16H12V18H10V16M14 2H16V4H14V2M14 6H16V14H14V6M14 16H16V18H14V16M6 6H8V8H6V6M6 10H8V12H6V10M10 6H12V8H10V6M10 10H12V12H10V10M6 14H8V16H6V14M10 14H12V16H10V14M2 10H4V12H2V10M2 14H4V18H2V14M18 2H20V4H18V2M18 6H20V8H18V6M18 10H20V12H18V10M18 14H20V18H18V14"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-17 -272) translate(16 258)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G transform="translate(1 14)">
          <Mask id="c" fill={themeMode('whiteIcon')}>
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill={themeMode('black')}>
            <Path transform="translate(-1 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

type HashKey = {
  navigation: StackNavigationProp<RootStackParamList, 'HashKey'>;
};

const HashKey = ({navigation}: HashKey) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => navigation.navigate('HashKey')}>
      <Text>
        <HashKeyIcon />
        <Text>{'  '}</Text>
        <Text style={{...Styles.menuItemText, color: themeMode('text')}}>
          {t('hashKey.title')}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default HashKey;
