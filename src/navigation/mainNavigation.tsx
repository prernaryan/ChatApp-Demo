import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../type/navigation.type';
import HomeScreen from '../screens/HomeScreen';
import {RouteName} from '../constants';
import {navigationRef} from '../services/navigationService';
import WpChatScreen from '../screens/wpChatScreen';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.HOMESCREEN} component={HomeScreen} />
        <Stack.Screen name={RouteName.WPCHATSCREEN} component={WpChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

// const MainNavigator = (): React.JSX.Element => {
//   const onReadyNavigation = React.useCallback((): void => {
//     setTimeout(() => {}, ConstNumber.VALUE_3000);
//   }, []);
//   const RenderNavigationScreens = React.useMemo((): React.JSX.Element[] => {
//     return Object.keys(SCREENS).map((item: string) => (
//       <Stack.Screen
//         key={`Screen-${item}`}
//         //@ts-ignore
//         name={item}
//         //@ts-ignore
//         component={SCREENS[item]}
//       />
//     ));
//   }, []);

//   return (
//     <NavigationContainer onReady={onReadyNavigation} ref={navigationRef}>
//       <Stack.Navigator
//         initialRouteName={RouteName.SPLASH_SCREEN}
//         screenOptions={{
//           headerShown: false,
//           gestureEnabled: false,
//         }}>
//         {RenderNavigationScreens}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default React.memo(MainNavigator);
