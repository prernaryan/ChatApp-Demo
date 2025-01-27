import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../type/navigation.type';
import TopTabNavigation from './toptabNavigation';

const Stack = createStackNavigator<RootStackParamList>();

type Props = {};

const MainNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <TopTabNavigation />
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
