import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../type/navigation.type';
import {RouteName} from '../constants';
import UserScreen from '../screens/auth/UsersScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator<RootStackParamList>();
const UserStack = (): React.JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={RouteName.USER_SCREEN} component={UserScreen} />
    <Stack.Screen name={RouteName.CHAT_SCREEN} component={ChatScreen} />
  </Stack.Navigator>
);

export default UserStack;
