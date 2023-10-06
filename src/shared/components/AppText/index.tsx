import React from 'react';
import {
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  Text as RNText,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {Typography, moderateScale, verticalScale} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TextProps {
  bold?: any;
  size?: any;
  title?: any;
  right?: any;
  center?: any;
  bolder?: any;
  medium?: any;
  boldest?: any;
  regular?: any;
  semiBold?: any;
  colorText?: any;
  justify?: any;
  paddingVertical?: any;
  numberOfLines?: any;
  onPress?: () => void;
  defaultTextColor?: any;
  textStyle?: StyleProp<TextStyle>;
}
const AppText = (props: Partial<Props>) => {
  const myTheme: any = useTheme();
  const {fontScale} = Dimensions.get('window');
  const {
    bold,
    size,
    right,
    center,
    medium,
    bolder,
    boldest,
    regular,
    semiBold,
    colorText,
    justify,
    paddingVertical,
    defaultTextColor,
  } = props;
  return (
    <RNText
      {...props}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        bolder && styles.bolder,
        center && styles.center,
        justify && styles.justify,
        medium && styles.medium,
        regular && styles.regular,
        boldest && styles.boldest,
        semiBold && styles.semiBold,
        size && {fontSize: size},
        paddingVertical && styles.padding,
        {
          color: defaultTextColor ? myTheme.colors.lightgray : colorText,
        },
        props.textStyle,
      ]}>
      {props.title}
    </RNText>
  );
};
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(12),
    fontFamily: 'Mulish-Regular',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  right: {
    textAlign: 'right',
  },
  regular: {
    fontFamily: 'Mulish-Regular',
  },
  medium: {
    fontFamily: 'Mulish-Medium',
  },
  semiBold: {
    fontFamily: 'Mulish-SemiBold',
  },
  bold: {
    fontFamily: 'Mulish-Bold',
  },
  bolder: {
    fontFamily: 'Mulish-ExtraBold',
  },
  boldest: {
    fontFamily: 'PlusJakartaSans-ExtraBoldItalic',
  },
  padding: {
    paddingVertical: verticalScale(10),
  },
});
