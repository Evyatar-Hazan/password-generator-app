import CryptoJS from 'crypto-js';

const Algorithm = (text1, text2) => {
  const textToHash = text1 + text2;
  const hashedText = CryptoJS.SHA256(textToHash).toString();
  console.log('Hashed text:', hashedText);
};

export default Algorithm;
