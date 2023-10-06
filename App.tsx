/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {GST, darkThemeStyle, defaultTheme} from '@theme';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainStack from './src/routes/stacks/mainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '@redux';
import {navigationRef} from '@services';
import Routes from './src/routes';

const App = () => {
  const [isEnabledOne, setIsEnabledOne] = useState(true);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
    //
  );
};

const styles = StyleSheet.create({
  container: {
    ...GST.MAIN,
  },
});

export default App;
