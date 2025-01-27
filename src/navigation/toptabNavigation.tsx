import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import {RouteName} from '../constants';
import ChatList from '../screens/ChatList';
import StatusList from '../screens/StatusList';
import CallList from '../screens/CallList';

type Props = {};

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = (props: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RouteName.COMMUNITY_SCREEN}
        component={CommunityScreen}
      />
      <Tab.Screen name={RouteName.CHAT_LIST} component={ChatList} />
      <Tab.Screen name={RouteName.STATUS_LIST} component={StatusList} />
      <Tab.Screen name={RouteName.CALL_LIST} component={CallList} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
