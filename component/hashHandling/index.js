import CryptoJS from 'crypto-js';

export const getHash = (text1, text2) => {
  const textToHash = text1 + text2;
  const hashedText = CryptoJS.SHA256(textToHash).toString();
  console.log('Hashed text:', hashedText);
  return hashedText;
};

export const getNumbersPassword = (hash) => {
  const numbers = hash.match(/\d+/g);
  if (numbers) {
    let numbersPassword = String(numbers.length);
    let index = 0;

    while (numbersPassword.length < 12) {
      if (index === numbers.length) {
        index = 0;
      }
      numbersPassword += numbers[index];
      index++;
    }
    return numbersPassword.substring(0, 12); 
  } else {
    console.log('No numbers found in the string.');
    return null; 
  }
};

