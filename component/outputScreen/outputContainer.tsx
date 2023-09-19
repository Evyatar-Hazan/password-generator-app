import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-community/clipboard';



type GeneratedPasswords = {
  [key: string]: string;
};

type PasswordType = keyof GeneratedPasswords;

const mapGeneratedPasswords: Record<PasswordType,{label: string; securityLevel: string}> = {
    numbersPassword: {label: 'Numbers only:', securityLevel: 'Low'},
    lettersPassword: {label: 'Letters only:', securityLevel: 'Medium'},
    numbersAndLettersPassword: {label: 'Numbers and letters:', securityLevel: 'Medium'},
    upperCasePassword: {label: 'Including capital letters:', securityLevel: 'High'},
    transformToSign: {label: 'Including a sign:', securityLevel: 'Very High'},
  };

const getSecurityLevelColor = (securityLevel: string) => {
  const colorsMap: {[key: string]: string} = {
    Low: 'red',
    Medium: 'orange',
    High: 'green',
    'Very High': 'blue',
  };
  if (colorsMap[securityLevel]) {
    return colorsMap[securityLevel];
  } else {
    return 'gray';
  }
};

const copyToClipboard = (generatedPasswords: GeneratedPasswords, passwordType: string) => {
    Clipboard.setString(generatedPasswords[passwordType]);
    ToastAndroid.show(
      `Copied ${mapGeneratedPasswords[passwordType].label} to clipboard`,
      ToastAndroid.SHORT,
    );
  };

const OutputContainer = ({
    generatedPasswords,
}: {
    generatedPasswords: GeneratedPasswords;
}) => {


  return (
    <ScrollView style={styles.outputContainer}>
      {Object.keys(generatedPasswords).map((passwordType: string) => (
        <View key={passwordType}>
          <View style={styles.securityLevelIndicator}>
            <Text style={styles.label}>
              {mapGeneratedPasswords[passwordType].label}
            </Text>
            <Text style={styles.label}>
              {mapGeneratedPasswords[passwordType].securityLevel}
            </Text>
          </View>
          <LinearGradient
            style={styles.outputFrame}
            colors={[
              getSecurityLevelColor(
                mapGeneratedPasswords[passwordType].securityLevel,
              ),
              'transparent',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.outputRow}>
              <Text style={styles.output}>
                {generatedPasswords[passwordType]}
              </Text>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={() => copyToClipboard(generatedPasswords, passwordType)}>
                <Text style={styles.copyButtonText}>Copy</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  output: {
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
  },
  outputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginLeft: 10,
  },
  securityLevelIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outputContainer: {
    width: '100%',
  },
});

export default OutputContainer;
