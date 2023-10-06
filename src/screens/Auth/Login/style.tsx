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
      height: verticalScale(150),
      width: '100%',
      resizeMode: 'contain',
    },
    titleText: {
      textAlign: 'center',
      paddingBottom: verticalScale(20),
    },
    textinput: {
      height: verticalScale(40),
      paddingHorizontal: horizontalScale(10),
    },
    forgetpasswordText: {
      textAlign: 'right',
      paddingBottom: verticalScale(20),
    },
    haveAnAccountWrapper: {
      ...GST.ROW,
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: verticalScale(10),
    },
    addTaskBtn: {
      height: verticalScale(45),
      width: '100%',
      alignSelf: 'center',
    },
  });

export default useStyles;
