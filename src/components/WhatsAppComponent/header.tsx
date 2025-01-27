import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {ConstNumber, GlobalStyleValues, images} from '../../constants';
import {Colors} from '../../constants/wpColor';
import VectorIcon from '../resuableComponent/VectorIcon';
import {heightPixel, widthPixel} from '../../utils/responsive';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={images.WHATSAPP_LOGO} style={styles.logo} />
      <View style={styles.headerIcons}>
        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={ConstNumber.VALUE_22}
        />
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.secondaryColor}
          size={ConstNumber.VALUE_20}
          style={styles.iconStyle}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={ConstNumber.VALUE_18}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: ConstNumber.VALUE_16,
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  logo: {
    width: widthPixel(ConstNumber.VALUE_110),
    height: heightPixel(ConstNumber.VALUE_25),
  },
  headerIcons: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
  },
  iconStyle: {
    marginHorizontal: widthPixel(ConstNumber.VALUE_25),
  },
});
