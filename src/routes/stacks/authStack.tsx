import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome} from '@screens';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
};
export default AuthStack;
