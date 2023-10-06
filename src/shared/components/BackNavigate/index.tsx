import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageStyle,
  StyleProp,
  Platform,
} from 'react-native';
import React from 'react';
import {backArrow} from '@assets';
import {
  defaultTheme,
  GST,
  horizontalScale,
  moderateScale,
  Typography,
  verticalScale,
} from '@theme';
import {useNavigation} from '@react-navigation/native';
import AppText from '../AppText';

interface Props {
  title?: any;
  ImageStyle?: StyleProp<ImageStyle>;
}

const BackNavigate = (props: Props) => {
  const navigation = useNavigation();
  const {title} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <Image
        {...props}
        source={backArrow}
        style={[styles.img, props.ImageStyle]}
      />
      <AppText
        regular
        title={title}
        colorText={defaultTheme.colors.white}
        size={moderateScale(16)}
        textStyle={{paddingLeft: horizontalScale(10)}}
      />
    </TouchableOpacity>
  );
};

export default BackNavigate;

const styles = StyleSheet.create({
  container: {
    ...GST.ROW,
    alignItems: 'flex-start',
  },
  img: {
    width: verticalScale(20),
    height: verticalScale(20),
    justifyContent: 'center',
    tintColor: defaultTheme.colors.white,
  },
});
