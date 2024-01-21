import CryptoJS from 'crypto-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const generateAndSaveHashKey = async () => {
  try {
    const storedHashKey = await AsyncStorage.getItem('hashKey');

    if (!storedHashKey) {
      const randomNumber = Math.floor(Math.random() * 1000);

      const hashKey = getHash(randomNumber);

      const nameApp =
        process.env.NAME === undefined ? 'PasswordGenerator' : process.env.NAME;

      const hashKeyPasswordGenerator = nameApp + hashKey.toString();

      await AsyncStorage.setItem('hashKey', hashKeyPasswordGenerator);
    }
    return await AsyncStorage.getItem('hashKey');
  } catch (error) {
    console.error('Error storing or retrieving random number:', error);
  }
};

export const getHash = (text1, text2 = '') => {
  const textToHash = text1 + text2;
  return CryptoJS.SHA256(textToHash).toString();
};

export const getNumbersPassword = (hash, numberCharacters) => {
  const numbers = hash.match(/\d+/g);
  if (numbers) {
    return numbers.join('').substring(0, numberCharacters);
  } else {
    console.log('No letters found in the string.');
    return null;
  }
};

export const getLettersPassword = (hash, numberCharacters) => {
  const letters = hash.match(/[a-z]+/g);
  if (letters) {
    return letters.join('').substring(0, numberCharacters);
  } else {
    console.log('No letters found in the string.');
    return null;
  }
};

export const getNumbersAndLettersPassword = (
  numbers,
  letters,
  numberCharacters,
) => {
  const maxLength = Math.max(numbers.length, letters.length);
  let numbersAndLetters = '';

  for (let index = 0; index < maxLength; index++) {
    if (index < numbers.length) {
      numbersAndLetters += numbers[index];
    }
    if (index < letters.length) {
      numbersAndLetters += letters[index];
    }
  }
  return numbersAndLetters.substring(0, numberCharacters);
};

const hashString = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
  }
  return hash;
};

export const getUpperCasePassword = str => {
  let changed = false;
  let newString = str.replace(/[a-z]/g, function (match) {
    const hash = hashString(match);
    if (hash % 2 === 0) {
      changed = true;
      return match.toUpperCase();
    } else {
      return match;
    }
  });

  if (!changed) {
    newString = newString.replace(/([a-zA-Z])/, function (match) {
      return match.toUpperCase();
    });
  }

  if (!/[a-z]/.test(newString)) {
    newString = newString.replace(/([A-Z])/, function (match) {
      return match.toLowerCase();
    });
  }
  return newString;
};

export const getTransformToSign = str => {
  const signs = ['?', '@', '#', '$', '&', '!'];
  const hash = hashString(str);
  const selectedSignIndex = Math.abs(hash) % signs.length;
  const selectedSign = signs[selectedSignIndex];
  return str.replace(/[a-zA-Z0-9]/, selectedSign);
};

export const passwordGenerator = async (hashedText, numberCharacters) => {
  const hashKey = await AsyncStorage.getItem('hashKey');

  hashedText = hashKey + hashedText;

  const numbersPassword = getNumbersPassword(hashedText, numberCharacters);
  const lettersPassword = getLettersPassword(hashedText, numberCharacters);
  const numbersAndLettersPassword = getNumbersAndLettersPassword(
    numbersPassword,
    lettersPassword,
    numberCharacters,
  );
  const upperCasePassword = getUpperCasePassword(numbersAndLettersPassword);
  const transformToSign = getTransformToSign(upperCasePassword);
  return {
    numbersPassword,
    lettersPassword,
    numbersAndLettersPassword,
    upperCasePassword,
    transformToSign,
  };
};
