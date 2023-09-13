import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public/index';
import {RouteProp} from '@react-navigation/native';
import {passwordGenerator} from '../hashHandling';
import LinearGradient from 'react-native-linear-gradient';


type OutputScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'OutputScreen'>;
  route: RouteProp<RootStackParamList, 'OutputScreen'>;
};

type GeneratedPasswords = {
  [key: string]: string;
};

type PasswordType = keyof GeneratedPasswords;

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
      style={[styles.squareButton, isActive ? styles.activeButton : null]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonLabel,
          isActive ? styles.activeButtonLabel : null,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function getSecurityLevelColor(securityLevel: string) {
  switch (securityLevel) {
    case 'Low':
      return 'red'; // You can choose your desired color
    case 'Medium':
      return 'orange'; // You can choose your desired color
    case 'High':
      return 'green'; // You can choose your desired color
    case 'Very High':
      return 'blue'; // You can choose your desired color
    default:
      return 'gray'; // Default color
  }
}

function OutputScreen({route, navigation}: OutputScreenProps) {
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

  const mapGeneratedPasswords: Record<
    PasswordType,
    {label: string; securityLevel: string}
  > = {
    numbersPassword: {label: 'Numbers only:', securityLevel: 'Low'},
    lettersPassword: {label: 'Letters only:', securityLevel: 'Medium'},
    numbersAndLettersPassword: {
      label: 'Numbers and letters:',
      securityLevel: 'Medium',
    },
    upperCasePassword: {
      label: 'Including capital letters:',
      securityLevel: 'High',
    },
    transformToSign: {label: 'Including a sign:', securityLevel: 'Very High'},
  };

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
    ToastAndroid.show(
      `Copied ${passwordType} to clipboard`,
      ToastAndroid.SHORT,
    );
  };

  useEffect(() => {
    generatePasswords(8);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Generator</Text>
      <View style={styles.buttonContainer}>
        <SquareButton
          label="12"
          isActive={selectedLength === 12}
          onPress={() => generatePasswords(12)}
        />
        <SquareButton
          label="8"
          isActive={selectedLength === 8}
          onPress={() => generatePasswords(8)}
        />
        <SquareButton
          label="4"
          isActive={selectedLength === 4}
          onPress={() => generatePasswords(4)}
        />
      </View>

      <ScrollView style={styles.outputContainer}>
        {Object.keys(generatedPasswords).map((passwordType: string) => (
          <View key={passwordType}>
            <View style={styles.securityLevelIndicator}>
              <Text style={styles.label}>
                {mapGeneratedPasswords[passwordType].label}
              </Text>
              <Text
                style={styles.label}
                >
                {mapGeneratedPasswords[passwordType].securityLevel}
              </Text>
            </View>
            <LinearGradient
              style={styles.outputFrame}
              colors={[
                getSecurityLevelColor(
                  mapGeneratedPasswords[passwordType].securityLevel
                ),
                'transparent', // You can adjust the transparent color to control the gradient effect
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View style={styles.outputRow}>
                <Text style={styles.output}>
                  {generatedPasswords[passwordType]}
                </Text>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={() => copyToClipboard(passwordType)}>
                  <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
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
    borderColor: '#28a745',
    borderWidth: 2,
    width: 80,
    height: 40,
    borderRadius: 8, // Square button
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#28a745',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#28a745',
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
    marginLeft: 10
  },
  outputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  output: {
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
  },
  copyButton: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 100,
  },
  copyButtonText: {
    fontSize: 16,
    color: 'white',
  },
  securityLevelIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  securityLevelText: {
    color: 'white',
    padding: 4,
    borderRadius: 4,
    fontWeight: 'bold',
    marginLeft: 10,
    width: 'auto',
    textAlign: 'right',
    // height: 40,
  },
});
// right left
export default OutputScreen;
