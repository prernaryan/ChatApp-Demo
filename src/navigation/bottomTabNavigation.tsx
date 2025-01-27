import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, RouteName} from '../constants';
import {BOTTTOM_SCREENS} from '../constants/screens';

const Tab = createBottomTabNavigator();

const TabIcon = ({source, focused, color}) => (
  <View style={styles.iconContainer}>
    <Image source={source} style={[styles.icon, {tintColor: color}]} />
    <View
      style={[styles.activeLine, !focused && {backgroundColor: 'transparent'}]}
    />
  </View>
);
const routeIcons = {
  [RouteName.DASHBOARD]: images.HOMEICON,
  [RouteName.SETTINGS]: images.SETTINGS,
  [RouteName.USER_STACK]: images.CHATS,
};

const BottomTabNavigation = () => {
  const RenderNavigationScreens = React.useMemo((): React.JSX.Element[] => {
    return Object.keys(BOTTTOM_SCREENS).map((item: string) => (
      <Tab.Screen
        key={`Screen-${item}`}
        //@ts-ignore
        name={item}
        //@ts-ignore
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon
              source={routeIcons?.[item]}
              focused={focused}
              color={color}
            />
          ),
        }}
        component={BOTTTOM_SCREENS[item]}
      />
    ));
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#8e7cc3',
        tabBarInactiveTintColor: '#A0B8BD',
        tabBarStyle: {backgroundColor: '#005959'},
      }}>
      {RenderNavigationScreens}
      {/* <Tab.Screen
        name={RouteName.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.HOMEICON} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.USER_SCREEN}
        component={UserScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.CHATS} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.SETTINGS}
        component={Settings}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.SETTINGS} focused={focused} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  activeLine: {
    height: 3,
    width: 30,
    backgroundColor: '#8e7cc3',
    marginTop: 4,
    borderRadius: 2,
  },
});
