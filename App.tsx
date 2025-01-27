import React from 'react';
import {ThemeProvider} from './src/contextApi/appTheme';
import {View, StatusBar, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Colors} from './src/constants/wpColor';
import {NavigationContainer} from '@react-navigation/native';

const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.statusBar,
        {height: insets.top, backgroundColor: Colors.primaryColor},
      ]}>
      <StatusBar translucent backgroundColor={Colors.primaryColor} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <CustomStatusBar />
          <HomeScreen />
          {/* <MainNavigation /> */}
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
  },
});
