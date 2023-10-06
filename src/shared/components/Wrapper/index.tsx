import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacityProps,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {horizontalScale, verticalScale} from '@theme';

interface Props extends TouchableOpacityProps {
  style?: any;
  bgColor?: any;
  icon?: string;
  onPress?: any;
  title?: string;
  children?: any;
  large?: boolean;
  colorTheme?: any;
  loading?: boolean;
  disabled?: boolean;
  titleColorProp?: string;
  disabledMessage?: boolean;
  viewStyle?: any;
  textStyle?: StyleProp<TextStyle>;
  disableBackgroundColor?: boolean;
  isPaddingH?: any;
  isTop?: any;
}
const Wrapper = (props: Props) => {
  const {isPaddingH, isTop} = props;
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);

  return (
    <View
      {...props}
      style={[
        styles.container,
        {
          paddingTop: isTop ? verticalScale(isTop) : 0,
          paddingHorizontal: isPaddingH ? verticalScale(isPaddingH) : 0,
        },
      ]}>
      {props.children}
    </View>
  );
};

const useStyles = StyleSheet.create((color: any) => ({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
}));

export default Wrapper;
