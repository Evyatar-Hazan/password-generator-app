import React from 'react';
import Main from './src/main';
import * as Sentry from '@sentry/react-native';
import SplashScreen from 'react-native-splash-screen'

Sentry.init({
  dsn: 'https://61da0d0eb38990802eb1d1919fef4f54@o4506066093801472.ingest.sentry.io/4506066096685056',
});


function App() {
  SplashScreen.hide();
  return (
    <Main />
  );
}

export default App;
