import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import {RouteProp} from '@react-navigation/native';
import {passwordGenerator} from '../hashHandling';
import PasswordButton from './passwordButton';
import OutputContainer from './outputContainer';
import theme, {themeMode} from '../../style';

export type GeneratedPasswordsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GeneratedPasswords'>;
  route: RouteProp<RootStackParamList, 'GeneratedPasswords'>;
};

type GeneratedPasswords = {
  [key: string]: string;
};

const GeneratedPasswords: React.FC<GeneratedPasswordsProps> = ({
  route,
  navigation,
}: GeneratedPasswordsProps) => {
  const {hashedText} = route.params;
  const [generatedPasswords, setGeneratedPasswords] =
    useState<GeneratedPasswords>({
      numbersPassword: '',
      lettersPassword: '',
      numbersAndLettersPassword: '',
      upperCasePassword: '',
      transformToSign: '',
    });
  const [selectedLength, setSelectedLength] = useState<number | null>(8); // Set initial value to 8

  const generatePasswords = (length: number) => {
    const {
      numbersPassword,
      lettersPassword,
      numbersAndLettersPassword,
      upperCasePassword,
      transformToSign,
    } = passwordGenerator(hashedText, length);

    setGeneratedPasswords({
      numbersPassword,
      lettersPassword,
      numbersAndLettersPassword,
      upperCasePassword,
      transformToSign,
    });

    setSelectedLength(length);
  };

  useEffect(() => {
    generatePasswords(8);
  }, []);

  return (
    <View
      style={{...styles.container, backgroundColor: themeMode('background')}}>
      <View style={styles.buttonContainerTop}>
        <PasswordButton
          label="12"
          isActive={selectedLength === 12}
          onPress={() => generatePasswords(12)}
        />
        <PasswordButton
          label="8"
          isActive={selectedLength === 8}
          onPress={() => generatePasswords(8)}
        />
        <PasswordButton
          label="4"
          isActive={selectedLength === 4}
          onPress={() => generatePasswords(4)}
        />
      </View>

      <OutputContainer generatedPasswords={generatedPasswords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  buttonContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
  },
});
export default GeneratedPasswords;
