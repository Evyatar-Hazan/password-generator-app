import React from 'react';
import PrivacyPolicy from './component/privacyPolicy/privacyPolicy';
import './component/languageHandling/i18next.config';
import LanguagePicker from './component/languageHandling/LanguagePicker';
import Navigation from './component/navigation';

const Main = () => {
  return (
    <>
      <Navigation />
      <LanguagePicker />
      <PrivacyPolicy />
    </>
  );
};

export default Main;
