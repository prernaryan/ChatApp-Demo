import {RouteName} from '../constants';
import CallList from '../screens/CallList';
import ChatList from '../screens/ChatList';
import CommunityScreen from '../screens/CommunityScreen';
import StatusList from '../screens/StatusList';

export const TabBarData = [
  {id: 1, component: CommunityScreen, name: RouteName.COMMUNITY},
  {
    id: 2,
    component: ChatList,
    name: RouteName.CHATS,
  },
  {
    id: 3,
    component: StatusList,
    name: RouteName.STATUS,
  },
  {
    id: 4,
    component: CallList,
    name: RouteName.CALLS,
  },
];
