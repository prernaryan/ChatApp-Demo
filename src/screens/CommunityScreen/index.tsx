import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images, texts} from '../../constants';
import {styles} from './styles';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.COMMUNITY_ICON} style={styles.iconStyle} />
      <Text style={styles.headingText}>{texts.communityHeading}</Text>
      <Text style={styles.subText}>{texts.communityDes}</Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>{texts.communityBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunityScreen;
