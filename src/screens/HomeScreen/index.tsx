import React from 'react';
import Header from '../../components/WhatsAppComponent/header';
import TopTabNavigation from '../../navigation/toptabNavigation';
import {View} from 'react-native';
import {StyleBase} from '../../constants';

const HomeScreen = () => {
  return (
    <View style={StyleBase.flex1}>
      <Header />
      <TopTabNavigation />
    </View>
  );
};

export default HomeScreen;
