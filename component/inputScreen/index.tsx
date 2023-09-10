import React, { useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { getHash } from '../hashHandling/index';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../public';


type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'InputScreen'>;
};

const InputScreen = ({ navigation }: HomeScreenProps) => {
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
      console.log('Input 1:', inputValue1);
      console.log('Input 2:', inputValue2);
      const hashedText = getHash(inputValue1, inputValue2)
      navigation.navigate('OutputScreen',  { hashedText } );
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter text first..."
            placeholderTextColor="#aaa"
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainerStyle} 
            underlineColorAndroid="transparent"
            onChangeText={handleInputChange1}
            value={inputValue1}
          />
          <Input
            placeholder="Insert second text..."
            placeholderTextColor="#aaa"
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainerStyle} 
            underlineColorAndroid="transparent"
            onChangeText={handleInputChange2}
            value={inputValue2}
          />
          <Button
            title="Create Password"
            type="solid"
            onPress={handleSave}
            disabled={isSaveDisabled}
            buttonStyle={[styles.saveButton, isSaveDisabled && styles.disabledButton]}
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
    backgroundColor: '#f0f0f0',
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
    backgroundColor: 'white',
    elevation: 3,
  },
  saveButton: {
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: '#2ecc71',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InputScreen;
