import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../../style';

type levelMap = {
  [key: string]: string;
};

const PasswordButton = ({
  label,
  isActive,
  onPress,
}: {
  label: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  const {t} = useTranslation();
  const levelMap: levelMap = {
    4: 'outputScreen.label4',
    8: 'outputScreen.label8',
    12: 'outputScreen.label12',
  };
  return (
    <TouchableOpacity
      style={[styles.squareButton, isActive ? styles.activeButton : null]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonLabel,
          isActive ? styles.activeButtonLabel : null,
        ]}>
        {t(levelMap[label])}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  squareButton: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.green,
    borderWidth: 2,
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: theme.colors.green,
  },
  buttonLabel: {
    fontSize: 20,
    color: theme.colors.text,
  },
  activeButtonLabel: {
    color: theme.colors.white,
  },
});

export default PasswordButton;
