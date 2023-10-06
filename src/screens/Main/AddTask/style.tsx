import {StyleSheet} from 'react-native';
import {
  GST,
  Typography,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme';

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...GST.MAIN,
      backgroundColor: colors.white,
    },
    headerContainer: {
      backgroundColor: colors.bright_blue,
      height: verticalScale(60),
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(15),
    },
    startDate: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.light_grayish,
      backgroundColor: colors?.white,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      paddingHorizontal: horizontalScale(10),
    },
    dropdown: {
      height: verticalScale(40),
      borderColor: colors.light_grayish,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: horizontalScale(10),
    },
    placeholderStyle: {
      fontSize: moderateScale(14),
      color: colors?.slate_gray,
      fontFamily: Typography.FONTS.TYPE.REGULAR,
    },
    selectedTextStyle: {
      fontSize: moderateScale(14),
      fontFamily: Typography.FONTS.TYPE.REGULAR,
      color: colors.black,
    },
    inputSearchStyle: {
      height: verticalScale(44),
      fontSize: moderateScale(16),
    },
    textpadding: {
      paddingLeft: horizontalScale(5),
      paddingBottom: verticalScale(5),
    },
    dueDateWrapper: {
      marginVertical: verticalScale(10),
    },
    textinputpadding: {
      paddingHorizontal: horizontalScale(10),
    },
    statusTitleStyle: {
      paddingLeft: horizontalScale(2),
      paddingBottom: verticalScale(5),
    },
    textinputstyle: {
      height: verticalScale(40),
    },
    maxHeight: {
      height: verticalScale(130),
      maxHeight: verticalScale(150),
      paddingVertical: verticalScale(10),
      textAlignVertical: 'top',
    },
    addTaskBtn: {
      width: '84%',
      marginVertical: verticalScale(10),
      alignSelf: 'center',
    },
  });

export default useStyles;
