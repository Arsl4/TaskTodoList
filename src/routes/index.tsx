import React, {useState} from 'react';
import MainStack from './stacks/mainStack';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AuthStack from './stacks/authStack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@services';
import {darkThemeStyle, defaultTheme} from '@theme';
import {StatusBar} from 'react-native';

export default function Routes() {
  const [isToken, setIsToken] = useState(false);
  const [isEnabledOne, setIsEnabledOne] = useState(true);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={appTheme as any} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="authStack"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          animationTypeForReplace: 'pop',
        }}>
        <Stack.Screen name="mainStack" component={MainStack} />
        <Stack.Screen name="authStack" component={AuthStack} />
      </Stack.Navigator>
      <StatusBar backgroundColor={appTheme?.colors?.bright_blue} />
    </NavigationContainer>
  );
}
