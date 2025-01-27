import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {navigate} from '../../../services/navigationService';
import {asyncStorageKey, RouteName} from '../../../constants';
import {getStoredItem} from '../../../services/asyncStorage';
import AppBgImage from '../../../components/resuableComponent/appBgImage';

const SplashScreen = () => {
  React.useEffect(() => {
    setTimeout(() => {
      checkIsLogin();
    }, 2000);
  }, []);

  const checkIsLogin = async () => {
    const user = await getStoredItem(asyncStorageKey.User);
    if (user?.userId !== null) {
      navigate(RouteName.BOTTOM_TAB_NAVIGATOR);
    } else {
      navigate(RouteName.LOGIN);
    }
  };

  return (
    <AppBgImage>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 30}}>Welcome to WhatasApp</Text>
      </View>
    </AppBgImage>
  );
};

export default SplashScreen;
