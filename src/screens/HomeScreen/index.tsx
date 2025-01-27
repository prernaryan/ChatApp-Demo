import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/WhatsAppComponent/header';
import TopTabNavigation from '../../navigation/toptabNavigation';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <Header />
      <TopTabNavigation />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
