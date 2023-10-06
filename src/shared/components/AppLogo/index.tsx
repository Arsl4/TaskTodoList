import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appLogo} from '@assets';
import {
  defaultTheme,
  GST,
  moderateScale,
  Typography,
  verticalScale,
} from '@theme';
interface Props {
  title: any;
}

const AppLogo = (props: Props) => {
  const {title} = props;
  return (
    <View style={styles.imgView}>
      <Image style={styles.img} source={appLogo} />
      <Text style={styles.loginText}>{title}</Text>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  imgView: {
    ...GST.CENTER,
    paddingTop: verticalScale(40),
  },
  img: {
    width: '100%',
    height: 68,
    resizeMode: 'contain',
  },
  loginText: {
    color: defaultTheme.colors.authTextColor,
    fontSize: moderateScale(24),
    fontFamily: Typography.FONTS.TYPE.BOLD,
    paddingVertical: verticalScale(30),
  },
});
