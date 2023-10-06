import React from 'react';
import AppText from '../AppText';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import {GST, horizontalScale, moderateScale, Typography} from '@theme';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {lips} from '@assets';

interface Props {
  source?: any;
  title?: string;
  textStyle?: any;
  showLeftIcon?: any;
  showRightIcon?: any;
  onPressRightIcon?: any;
  rightIcon?: any;
  backAction?: () => void;
  onPressLogo?: () => void;
}

const AppHeader = (props: Props) => {
  const {
    title,
    source,
    textStyle,
    backAction,
    showLeftIcon,
    showRightIcon,
    onPressRightIcon,
    rightIcon,
  } = props;
  const myTheme: any = useTheme();
  const navigation = useNavigation();
  const styles = useStyles(myTheme.colors);

  return (
    <>
      <View style={[styles.container]}>
        <View
          style={{
            backgroundColor: myTheme.colors.white,
            borderBottomRightRadius: 15,
            paddingHorizontal: horizontalScale(10),
            ...GST.ROW,
            ...GST.CENTER,
          }}>
          <Image
            source={lips}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
          <AppText
            title={'IYKYKX'}
            size={moderateScale(12)}
            medium
            textStyle={{paddingLeft: 10}}
            colorText={myTheme.colors.black}
          />
        </View>
        <AppText
          title={'Sign In/ Sign Up'}
          size={moderateScale(12)}
          medium
          colorText={myTheme.colors.white}
        />
      </View>
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    rightIcon: {
      width: 32,
      height: 32,
    },
    txt: {
      alignItems: 'center',
      width: '85%',
    },
    img: {
      width: 30,
      height: 30,
      tintColor: '#000',
      resizeMode: 'contain',
    },
    container: {
      width: '100%',
      ...GST.mid_row,
    },
    rightButton: {
      alignItems: 'center',
      marginRight: Typography.MARGIN.LOW,
    },
    right: {
      width: '10%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 22,
      height: 25,
    },
    logo: {
      height: 25,
      width: 40,
    },
    title: {
      width: horizontalScale(200),
      color: colors.psp_text,
      fontSize: moderateScale(20),
    },
    backView: {
      alignItems: 'center',
    },
    left: {
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AppHeader;
