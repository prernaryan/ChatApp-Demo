import {
  Text,
  Image,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  StyleBase,
} from '../../constants';
import {fontPixel, heightPixel, widthPixel} from '../../utils/responsive';
import AppPressable from './appPressable';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  // onChangeText: (text: string) => void;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  error?: string | null;
  leftIcon?: React.ReactNode;
  rigthIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
};

const CustomInput = (props: Props) => {
  const [showPassWord, setshowPassWord] = React.useState(true);
  return (
    <View style={props.containerStyle}>
      <View style={[styles.inputView, props?.error && styles.errorView]}>
        {props?.leftIcon && (
          <View style={styles.iconContainer}>{props?.leftIcon}</View>
        )}
        <TextInput
          value={props?.value}
          onChangeText={props?.onChangeText}
          placeholder={props?.placeholder}
          keyboardType={props?.keyboardType ?? 'default'}
          placeholderTextColor="#B0B0B0"
          style={[styles.textInput, props?.inputStyle]}
          secureTextEntry={props?.secureTextEntry ? showPassWord : false}
        />
        {props?.secureTextEntry && (
          <AppPressable
            style={styles.iconContainerRight}
            onPress={() => setshowPassWord(!showPassWord)}>
            <Image
              source={showPassWord ? images.EYE_OPEN : images.EYE_CLOSE}
              style={{height: widthPixel(20), width: widthPixel(20)}}
            />
          </AppPressable>
        )}
        {props?.rigthIcon && (
          <View style={styles.iconContainerRight}>{props?.rigthIcon}</View>
        )}
      </View>
      {props?.error && <Text style={styles.error}>{props?.error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputView: {
    ...StyleBase.inRow,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: '#F8F8F8',
    borderRadius: widthPixel(ConstNumber.VALUE_59),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
    paddingVertical: heightPixel(ConstNumber.VALUE_16),
  },
  errorView: {borderWidth: ConstNumber.VALUE_1, borderColor: 'red'},
  iconContainer: {
    marginRight: widthPixel(ConstNumber.VALUE_10),
  },
  iconContainerRight: {
    marginLeft: widthPixel(ConstNumber.VALUE_10),
  },
  textInput: {
    flex: ConstNumber.VALUE_1,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    color: '#000',
    paddingVertical: ConstNumber.VALUE_0,
  },
  error: {
    color: 'red',
    marginLeft: widthPixel(ConstNumber.VALUE_10),
    marginTop: heightPixel(ConstNumber.VALUE_5),
  },
});
