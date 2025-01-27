import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomInput from '../../components/resuableComponent/customInput';
import {ConstNumber, RouteName} from '../../constants';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../utils/responsive';
import AppPressable from '../../components/resuableComponent/appPressable';
import {navigate} from '../../services/navigationService';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
type Props = {};

const SignUp = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobileNo, setMobileNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const registerUser = () => {
    const userId = uuid.v4();
    firestore()
      .collection('Users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        mobileNo: mobileNo,
        password: password,
        userId: userId,
      })
      .then(() => {
        console.log('User registration successfully');
        Alert.alert('User Registered Successfully');
        navigate(RouteName.LOGIN);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const validation = () => {
    let isValidate = true;
    if (name === '') {
      isValidate = false;
    } else if (email === '') {
      isValidate = false;
    } else if (mobileNo === '') {
      isValidate = false;
    } else if (password === '') {
      isValidate = false;
    } else if (confirmPassword === '') {
      isValidate = false;
    } else if (password !== confirmPassword) {
      isValidate = false;
    } else {
      return isValidate;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#005959',
      }}>
      <View style={{marginTop: top, paddingHorizontal: 20}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 40,
          }}>
          Sign Up
        </Text>
        <CustomInput
          placeholder={'Enter your Name'}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          containerStyle={[styles.inputBox, {marginTop: 40}]}
        />
        <CustomInput
          placeholder={'Enter your email address'}
          value={email}
          containerStyle={styles.inputBox}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <CustomInput
          placeholder={'Enter your mobile number'}
          value={mobileNo}
          containerStyle={styles.inputBox}
          onChangeText={text => {
            setMobileNo(text);
          }}
        />
        <CustomInput
          placeholder={'Enter your password'}
          secureTextEntry={true}
          value={password}
          containerStyle={styles.inputBox}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <CustomInput
          placeholder={'Confirm your password'}
          secureTextEntry={true}
          value={confirmPassword}
          containerStyle={styles.inputBox}
          onChangeText={text => {
            setConfirmPassword(text);
          }}
        />
        <AppPressable
          style={styles.btnContainer}
          onPress={() => {
            if (validation()) {
              registerUser();
            } else {
              Alert.alert('Please fill all required fields');
            }
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Sign Up
          </Text>
        </AppPressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputBox: {
    marginVertical: heightPixel(ConstNumber.VALUE_10),
  },
  btnContainer: {
    backgroundColor: '#134F5C',
    paddingVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(ConstNumber.VALUE_10),
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_140),
    marginTop: heightPixel(ConstNumber.VALUE_50),
  },
});
