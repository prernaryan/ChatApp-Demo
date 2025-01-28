import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ConstNumber, GlobalStyleValues} from '../../constants';
import {Colors} from '../../constants/wpColor';
import VectorIcon from '../resuableComponent/VectorIcon';
import AppPressable from '../resuableComponent/appPressable';
import {
  fontPixel,
  heightPixel,
  widthPercent,
  widthPixel,
} from '../../utils/responsive';

const ChatListComp = ({item}: {item: any}) => {
  return (
    <AppPressable style={styles.container} key={item?.id}>
      <View style={styles.leftContainer}>
        <AppPressable>
          <Image source={item?.profile} style={styles.userImage} />
        </AppPressable>
        <View>
          <Text style={styles.userName}>{item?.name}</Text>
          <Text style={styles.msg}>{item?.message}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{item?.time}</Text>
        {item?.mute && (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="volume-variant-off"
            size={22}
            color={Colors.textGrey}
            style={styles.muteIcon}
          />
        )}
      </View>
    </AppPressable>
  );
};

export default React.memo(ChatListComp);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: ConstNumber.VALUE_16,
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  userImage: {
    borderRadius: widthPixel(ConstNumber.VALUE_40),
    width: widthPixel(ConstNumber.VALUE_40),
    height: widthPixel(ConstNumber.VALUE_40),
    marginRight: widthPixel(ConstNumber.VALUE_15),
  },
  userName: {
    color: Colors.textColor,
    fontSize: fontPixel(ConstNumber.VALUE_16),
  },
  msg: {
    color: Colors.textGrey,
    fontSize: fontPixel(ConstNumber.VALUE_14),
    marginTop: heightPixel(ConstNumber.VALUE_5),
  },
  leftContainer: {
    flexDirection: GlobalStyleValues.ROW,
  },
  time: {
    color: Colors.textGrey,
    fontSize: fontPixel(ConstNumber.VALUE_12),
  },
  rightContainer: {},
  muteIcon: {
    marginTop: heightPixel(ConstNumber.VALUE_5),
    marginLeft: widthPercent(ConstNumber.VALUE_20),
  },
});
