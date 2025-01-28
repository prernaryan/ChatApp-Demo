import React from 'react';
import {ThemeProvider} from './src/contextApi/appTheme';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/mainNavigation';
import CustomStatusBar from './src/components/CustomStatusBar';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        {/* <CustomStatusBar /> */}
        <MainNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
