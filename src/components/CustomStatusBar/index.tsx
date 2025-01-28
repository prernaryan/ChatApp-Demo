import {View, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../constants/wpColor';
import {PercentageConstants} from '../../constants';

const CustomStatusBar = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        {width: PercentageConstants.PERCENT_100},
        {height: top, backgroundColor: Colors.primaryColor},
      ]}>
      <StatusBar translucent backgroundColor={Colors.primaryColor} />
    </View>
  );
};

export default React.memo(CustomStatusBar);
