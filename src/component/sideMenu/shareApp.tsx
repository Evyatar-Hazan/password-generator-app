import {Text, TouchableOpacity, Share} from 'react-native';
import {useTranslation} from 'react-i18next';
import Styles from './styles';
import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';

export const ShareIcon = () => {
  return (
    <Svg
      width="16px"
      height="18px"
      viewBox="0 0 16 18"
      style={{width: 15, height: 18, marginRight: 9}}>
      <Defs>
        <Path
          d="M13 12.4c-.633 0-1.2.25-1.633.642L5.425 9.583C5.467 9.392 5.5 9.2 5.5 9c0-.2-.033-.392-.075-.583L11.3 4.992a2.49 2.49 0 001.7.675c1.383 0 2.5-1.117 2.5-2.5 0-1.384-1.117-2.5-2.5-2.5a2.497 2.497 0 00-2.5 2.5c0 .2.033.391.075.583L4.7 7.175A2.49 2.49 0 003 6.5 2.497 2.497 0 00.5 9c0 1.383 1.117 2.5 2.5 2.5a2.49 2.49 0 001.7-.675l5.933 3.467a2.351 2.351 0 00-.066.541A2.436 2.436 0 0013 17.267a2.436 2.436 0 002.433-2.434A2.436 2.436 0 0013 12.4z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-18 -590) translate(0 368) translate(16 208)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G transform="translate(2 14)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill="#002B36">
            <Path transform="translate(-2 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

const ShareApp = () => {
  const {t} = useTranslation();
  const openSourceDocument = async () => {
    try {
      const url = 'https://onelink.to/gmemnu';
      const result = await Share.share({
        title: 'Share',
        message: `${t('shareApp.message')}: ${url}`,
        url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
      //alert(error.message);
    }
  };
  return (
    <TouchableOpacity
      style={Styles.menuItem}
      onPress={() => openSourceDocument()}>
      <Text>
        <ShareIcon />
        <Text style={Styles.menuItemText}>{t('shareApp.title')}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ShareApp;
