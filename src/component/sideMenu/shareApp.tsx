import {Text, TouchableOpacity, Share} from 'react-native';
import {useTranslation} from 'react-i18next';
import Styles from './styles';

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
      <Text style={Styles.menuItemText}>{t('shareApp.title')}</Text>
    </TouchableOpacity>
  );
};

export default ShareApp;
