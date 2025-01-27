import {Text, View} from 'react-native';
import React from 'react';
import {navigate} from '../../services/navigationService';
import {RouteName} from '../../constants';
import {removeAllStoredData} from '../../services/asyncStorage';
import VectorIcon from '../../components/resuableComponent/VectorIcon';
import {Colors} from '../../constants/wpColor';

const Dashboard = () => {
  const gotToNext = async () => {
    await removeAllStoredData();
    navigate(RouteName.LOGIN);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#005959',
      }}>
      <Text style={{marginTop: 100}} onPress={gotToNext}>
        Dashboard
      </Text>
      <VectorIcon
        name="message-reply-text"
        type="MaterialCommunityIcons"
        size={22}
        color={Colors.white}
      />
    </View>
  );
};

export default Dashboard;
