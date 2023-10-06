import {
  StyleProp,
  TextInput,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacityProps,
  TextInputProps,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import {useTheme} from '@react-navigation/native';
import {
  horizontalScale,
  verticalScale,
  Typography,
  defaultTheme,
  GST,
  moderateScale,
} from '@theme';
import {Titles} from '@utils';

interface Props extends TouchableOpacityProps {
  style?: any;
  title?: string;
  autoFocus?: any;
  placeholder?: any;
  letterSpacing?: any;
  selectTextOnFocus?: any;
  onSubmitEditing?: any;
  secureTextEntry?: any;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inputBackgroundColor?: boolean | undefined;
  placehldrTextColor?: boolean | undefined | string;
  defaultValue?: any;
  value?: any;
  defaultWidth?: any;
  onPress?: any;
  editable?: any;
  text?: any;
  onChangeText?: any;
  keyboardType?: any;
  maxLength?: any;
  multiline?: any;
}

const AppTextInput = React.forwardRef((props: Props, ref) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const {style, multiline, value, placeholder, title, maxLength, editable} =
    props;

  return (
    <>
      {title && (
        <AppText
          title={title}
          size={moderateScale(16)}
          colorText={myTheme.colors.black}
          semiBold
        />
      )}
      <TextInput
        {...props}
        ref={ref}
        value={value}
        editable={editable}
        autoFocus={editable}
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={myTheme.colors?.slate_gray}
        style={[styles.inputContainer, props.viewStyle, props.textStyle]}
      />
    </>
  );
});

export default React.memo(AppTextInput);

const useStyles = StyleSheet.create((colors: any) => ({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.light_grayish,
    fontFamily: Typography.FONTS.TYPE.REGULAR,
    color: colors.black,
    fontSize: moderateScale(14),
    paddingVertical: 0,
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  text: {
    fontSize: moderateScale(14),
    fontFamily: Typography.FONTS.TYPE.REGULAR,
  },
}));
