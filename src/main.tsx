import React, { useEffect } from 'react';
import './component/languageHandling/i18next.config';
import Navigation from './component/navigation';
import ToastConfig from './component/customToast/toastConfig';
import Toast from 'react-native-toast-message';
import { generateAndSaveHashKey } from './component/hashHandling';

const Main: React.FC = () => {

  useEffect(() => {
    generateAndSaveHashKey();
  }, []);

  
  return (
    <>
      <Navigation />
      <Toast config={ToastConfig} position="bottom" />
    </>
  );
};

export default Main;
