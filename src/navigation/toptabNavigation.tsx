/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../constants/wpColor';
import VectorIcon from '../components/resuableComponent/VectorIcon';
import {TabBarData} from '../data/tabBarData';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {backgroundColor: Colors.tertiary},
        tabBarStyle: {backgroundColor: Colors.primaryColor},
      }}>
      {TabBarData.map(({id, name, component}) => (
        <Tab.Screen
          key={id}
          name={name}
          component={component}
          options={{
            tabBarShowLabel: id !== 1,
            tabBarIcon:
              id === 1
                ? ({color}) => (
                    <VectorIcon
                      name="users"
                      size={20}
                      color={color}
                      type="FontAwesome"
                    />
                  )
                : undefined,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
