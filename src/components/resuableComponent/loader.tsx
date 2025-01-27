import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {ConstNumber, GlobalStyleValues, StyleBase} from '../../constants';

type loaderType = {
  isLoading: boolean;
};

const Loader = ({isLoading}: loaderType): React.JSX.Element | null => {
  if (!isLoading) {
    return null;
  }
  return (
    <View style={[styles.container, {bottom: ConstNumber.VALUE_100}]}>
      <ActivityIndicator size={'large'} color={'#BB86FC'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    ...StyleBase.flex1,
    ...StyleBase.absoluteCenterPosition,
    ...StyleBase.inCenter,
    zIndex: ConstNumber.VALUE_100,
    backgroundColor: GlobalStyleValues.TransParent,
  },
});
