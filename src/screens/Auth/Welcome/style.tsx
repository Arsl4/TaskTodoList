import {Dimensions, StyleSheet} from 'react-native';
import {GST, horizontalScale, verticalScale} from '@theme';
const {width} = Dimensions.get('window');

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...GST.MAIN,
      backgroundColor: colors.white,
    },
    img: {
      height: verticalScale(200),
      width: '100%',
      resizeMode: 'contain',
    },
    addTaskBtn: {
      height: verticalScale(45),
      width: '90%',
      alignSelf: 'center',
      marginVertical: verticalScale(10),
    },
  });

export default useStyles;
