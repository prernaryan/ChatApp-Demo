import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppPressable from '../../../components/resuableComponent/appPressable';
import CustomInput from '../../../components/resuableComponent/customInput';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../../utils/responsive';
import {asyncStorageKey, ConstNumber, RouteName} from '../../../constants';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {navigate} from '../../../services/navigationService';
import Loader from '../../../components/resuableComponent/loader';
import {setItemStored} from '../../../services/asyncStorage';
const Login = () => {
  const {top} = useSafeAreaInsets();
  const [email, setEmail] = React.useState('');
  const [mobileNo, setMobileNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const loginUser = () => {
    setIsLoading(true);
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(res => {
        setIsLoading(false);
        console.log(JSON.stringify(res.docs[0].data()));
        gotToNext(
          res?.docs[0]?.data(),
          // res?.docs[0]?.data()?.name,
          // res?.docs[0]?.data()?.email,
          // res?.docs[0]?.data()?.userId,
        );
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const gotToNext = async (user: FirebaseFirestoreTypes.DocumentData) => {
    setItemStored(asyncStorageKey.User, user);
    navigate(RouteName.BOTTOM_TAB_NAVIGATOR);
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
          Login
        </Text>
        <CustomInput
          placeholder={'Enter your email address'}
          value={email}
          containerStyle={[styles.inputBox, {marginTop: 50}]}
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
        <AppPressable style={styles.btnContainer} onPress={loginUser}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Log in
          </Text>
        </AppPressable>
        <AppPressable
          style={{alignSelf: 'center', alignItems: 'center', marginTop: 30}}
          onPress={() => {
            navigate(RouteName.SIGNUP);
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
        </AppPressable>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default Login;

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
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_180),
    marginTop: heightPixel(ConstNumber.VALUE_50),
  },
});
