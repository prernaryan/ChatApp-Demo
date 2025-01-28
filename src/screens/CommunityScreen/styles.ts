import {StyleSheet} from 'react-native';
import {ConstNumber, GlobalStyleValues} from '../../constants';
import {Colors} from '../../constants/wpColor';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/responsive';
export const styles = StyleSheet.create({
  iconStyle: {
    width: widthPixel(ConstNumber.VALUE_250),
    height: heightPixel(ConstNumber.VALUE_150),
  },
  container: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: Colors.background,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  headingText: {
    color: Colors.white,
    fontSize: fontPixel(ConstNumber.VALUE_26),
    fontWeight: '500',
    marginTop: heightPixel(ConstNumber.VALUE_40),
  },
  subText: {
    color: Colors.textGrey,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    textAlign: GlobalStyleValues.CENTER,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_30),
    marginTop: heightPixel(ConstNumber.VALUE_5),
    lineHeight: ConstNumber.VALUE_22,
    letterSpacing: 0.6,
  },
  btnContainer: {
    backgroundColor: Colors.tertiary,
    marginTop: heightPixel(ConstNumber.VALUE_30),
    paddingVertical: heightPixel(ConstNumber.VALUE_15),
    borderRadius: ConstNumber.VALUE_30,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_80),
  },
  btnText: {
    textAlign: GlobalStyleValues.CENTER,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    color: Colors.black,
  },
});
