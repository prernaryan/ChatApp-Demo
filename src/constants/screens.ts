import BottomTabNavigation from '../navigation/bottomTabNavigation';
import Login from '../screens/auth/login';
import SplashScreen from '../screens/auth/SplashScreen';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import SignUp from '../screens/signup';
import UserStack from '../navigation/userStack';
import {RouteName} from './routeName';

export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.SPLASH_SCREEN]: SplashScreen,
  [RouteName.SIGNUP]: SignUp,
  [RouteName.BOTTOM_TAB_NAVIGATOR]: BottomTabNavigation,
};

export const BOTTTOM_SCREENS = {
  [RouteName.DASHBOARD]: Dashboard,
  [RouteName.SETTINGS]: Settings,
  [RouteName.USER_STACK]: UserStack,
};
