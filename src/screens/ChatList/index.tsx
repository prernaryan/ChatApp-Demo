import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ChatListComp from '../../components/WhatsAppComponent/chatListComp';
import VectorIcon from '../../components/resuableComponent/VectorIcon';
import {Colors} from '../../constants/wpColor';
import AppPressable from '../../components/resuableComponent/appPressable';
import {heightPixel, widthPixel} from '../../utils/responsive';
import {ConstNumber, GlobalStyleValues} from '../../constants';
import {ChatListData} from '../../data/chatListData';

const ChatList = () => {
  return (
    <View style={styles.container}>
      <AppPressable style={styles.msgIconContainer}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="message-reply-text"
          size={22}
          color={Colors.white}
        />
      </AppPressable>
      <FlatList
        data={ChatListData}
        renderItem={({item}) => <ChatListComp item={item} />}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  msgIconContainer: {
    backgroundColor: Colors.tertiary,
    height: widthPixel(ConstNumber.VALUE_50),
    width: widthPixel(ConstNumber.VALUE_50),
    borderRadius: widthPixel(ConstNumber.VALUE_50),
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
    position: GlobalStyleValues.ABSOLUTE,
    bottom: heightPixel(ConstNumber.VALUE_50),
    right: widthPixel(ConstNumber.VALUE_20),
    zIndex: ConstNumber.VALUE_9999,
  },
  container: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: Colors.background,
    paddingTop: heightPixel(ConstNumber.VALUE_20),
  },
});
