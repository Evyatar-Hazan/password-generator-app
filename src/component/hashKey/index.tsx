import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import {useTranslation} from 'react-i18next';
import theme, {themeMode} from '../../style';
import QRCode from 'react-native-qrcode-svg';
import appLogo from './app_logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HashKeyProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HashKey'>;
};

const HashKey: React.FC<HashKeyProps> = ({navigation}) => {
  const {t} = useTranslation();
  const [hash, setHash] = useState<string>('test');

  const getHash = async () => {
    try {
      const storedHashKey = await AsyncStorage.getItem('hashKey');
      setHash(storedHashKey || '');
    } catch (error) {
      console.error('Error fetching hash:', error);
    }
  };

  useEffect(() => {
    getHash();
  }, []);

  return (
    <ScrollView
      style={{...styles.container, backgroundColor: themeMode('background')}}>
      <Text style={{...styles.header, color: themeMode('text')}}>
        {t('hashKey.title')}
      </Text>
      <View style={{...styles.qrCodeContainer}}>
        <QRCode
          value={`${hash}`}
          size={300}
          color="black"
          backgroundColor="white"
          logo={appLogo}
          logoSize={30}
        />
      </View>
    </ScrollView>
  );
};

export default HashKey;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.text,
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
    color: theme.colors.text,
  },
  bold: {
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  qrCodeContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
});
