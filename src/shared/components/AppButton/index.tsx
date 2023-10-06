import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import AppText from '../AppText';
import {useTheme} from '@react-navigation/native';
import {
  horizontalScale,
  verticalScale,
  Typography,
  GST,
  defaultTheme,
} from '@theme';

interface Props extends TouchableOpacityProps {
  clr?: any;
  title?: any;
  onPress?: () => void;
  size?: any;
  fontType?: any;
  bold: any;
  disable?: any;
  loading?: any;
  textColor?: any;
  bgColor?: any;
  disableBackgroundColor?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const AppButton = (props: Props) => {
  const colorTheme: any = useTheme();
  const {
    disableBackgroundColor,
    bgColor,
    size,
    fontType,
    buttonStyle,
    textColor,
    onPress,
    title,
    clr,
    disable,
    bold,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      disabled={disable}
      style={[styles.container, bgColor, buttonStyle]}>
      <AppText regular title={title} size={size} colorText={textColor} />
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);

const styles = StyleSheet.create({
  container: {
    height: verticalScale(45),
    borderRadius: 10,
    width: '94%',
    ...GST.CENTER,
    alignSelf: 'center',
    backgroundColor: defaultTheme.colors.bright_blue,
  },
});
