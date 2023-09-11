import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Clipboard, ToastAndroid, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../public/index';
import { RouteProp } from '@react-navigation/native';
import { passwordGenerator } from '../hashHandling';

type OutputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OutputScreen'>;
  route: RouteProp<RootStackParamList, 'OutputScreen'>;
};

type GeneratedPasswords = {
  [key: string]: string;
};

function SquareButton({
  label,
  isActive,
  onPress,
}: {
  label: string;
  isActive: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.squareButton,
        isActive ? styles.activeButton : null,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonLabel, isActive ? styles.activeButtonLabel : null]}>{label}</Text>
    </TouchableOpacity>
  );
}

function OutputScreen({ route, navigation }: OutputScreenProps) {
  const { hashedText } = route.params;
  const [generatedPasswords, setGeneratedPasswords] = useState<GeneratedPasswords>({
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

  const copyToClipboard = (passwordType: string) => {
    Clipboard.setString(generatedPasswords[passwordType]);
    ToastAndroid.show(`Copied ${passwordType} to clipboard`, ToastAndroid.SHORT);
  };

  useEffect(() => {
    generatePasswords(8);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Generator</Text>
      <View style={styles.buttonContainer}>
        <SquareButton label="12" isActive={selectedLength === 12} onPress={() => generatePasswords(12)} />
        <SquareButton label="8" isActive={selectedLength === 8} onPress={() => generatePasswords(8)} />
        <SquareButton label="4" isActive={selectedLength === 4} onPress={() => generatePasswords(4)} />
      </View>

      <ScrollView style={styles.outputContainer}>
        {Object.keys(generatedPasswords).map((passwordType) => (
          <View key={passwordType} style={styles.outputFrame}>
            <Text style={styles.label}>{passwordType} Password</Text>
            <View style={styles.outputRow}>
              <Text style={styles.output}>{generatedPasswords[passwordType]}</Text>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={() => copyToClipboard(passwordType)}
              >
                <Text style={styles.copyButtonText}>Copy</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  squareButton: {
    backgroundColor: 'transparent',
    borderColor: '#007BFF',
    borderWidth: 2,
    width: 80,
    height: 40,
    borderRadius: 8, // Square button
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#0056b3',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#007BFF',
  },
  activeButtonLabel: {
    color: 'white',
  },
  outputContainer: {
    width: '100%',
  },
  outputFrame: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  outputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  output: {
    fontSize: 18,
    flex: 1,
  },
  copyButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  copyButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default OutputScreen;
