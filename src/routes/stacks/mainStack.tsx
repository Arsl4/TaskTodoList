import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {AddTask, Home, TaskDetail} from '@screens';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={AddTask} name="AddTask" />
      <Stack.Screen component={TaskDetail} name="taskDetail" />
    </Stack.Navigator>
  );
};
export default MainStack;
