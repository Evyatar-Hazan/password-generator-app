import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {getHash} from '../hashHandling/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/rootStackParamList';
import {useTranslation} from 'react-i18next';
import theme from '../../style';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {t} = useTranslation();
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange1 = (text: string) => {
    setInputValue1(text);
  };

  const handleInputChange2 = (text: string) => {
    setInputValue2(text);
  };

  const isSaveDisabled = !inputValue1 || !inputValue2;

  const handleSave = () => {
    if (!isSaveDisabled) {
      const hashedText = getHash(inputValue1, inputValue2);
      navigation.navigate('OutputScreen', {hashedText});
      setInputValue1('');
      setInputValue2('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0} // Adjust the value as needed
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <Input
            placeholder={t('homeScreen.textFirst')}
            placeholderTextColor={theme.colors.grey}
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainerStyle}
            underlineColorAndroid="transparent"
            onChangeText={handleInputChange1}
            value={inputValue1}
          />
          <Input
            placeholder={t('homeScreen.secondText')}
            placeholderTextColor={theme.colors.grey}
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainerStyle}
            underlineColorAndroid="transparent"
            onChangeText={handleInputChange2}
            value={inputValue2}
          />
          <Button
            title={t('homeScreen.createPassword')}
            type="solid"
            onPress={handleSave}
            disabled={isSaveDisabled}
            buttonStyle={styles.saveButton}
            titleStyle={styles.saveButtonText}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    borderRadius: 25,
    paddingHorizontal: 18,
    backgroundColor: theme.colors.white,
    elevation: 3,
    color: theme.colors.text,
  },
  saveButton: {
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: theme.colors.green,
  },
  saveButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
