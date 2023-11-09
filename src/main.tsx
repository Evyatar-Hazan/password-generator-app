import React from 'react';
import './component/languageHandling/i18next.config';
import Navigation from './component/navigation';
import ToastConfig from './component/customToast/toastConfig';
import Toast from 'react-native-toast-message';

const Main: React.FC = () => {
  return (
    <>
      <Navigation />
      <Toast config={ToastConfig} />
    </>
  );
};

export default Main;
