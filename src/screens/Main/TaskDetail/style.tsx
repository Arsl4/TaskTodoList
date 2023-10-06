import {Dimensions, StyleSheet} from 'react-native';
import {
  GST,
  Typography,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme';
const {width} = Dimensions.get('window');

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...GST.MAIN,
      backgroundColor: colors.white,
    },
    headerContainer: {
      backgroundColor: colors.bright_blue,
      paddingHorizontal: horizontalScale(15),
      height: verticalScale(60),
      ...GST.mid_row,
    },
    dropDownWrapper: {
      position: 'absolute',
      bottom: -30,
      right: 20,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '40%',
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      backgroundColor: colors.white,
    },
    decriptiontextinputView: {
      borderWidth: 0,
      borderRadius: 6,
      width: '86%',
    },
    paddingTextinput: {
      paddingHorizontal: horizontalScale(5),
    },
    noeditableText: {
      paddingLeft: horizontalScale(10),
    },
    issueDateContainer: {
      ...GST.ROW,
      justifyContent: 'space-between',
    },
    titletext: {
      textAlignVertical: 'top',
      fontSize: moderateScale(16),
      fontFamily: Typography.FONTS.TYPE.SEMIBOLD,
      paddingTop: verticalScale(10),
    },
    textinputview: {
      borderWidth: 0,
      padding: 0,
      borderRadius: 6,
      width: '88%',
      alignItems: 'flex-start',
    },
    editable: {
      backgroundColor: colors.light_grayish,
    },
    noneditable: {
      backgroundColor: colors.white,
    },
    editblewrapper: {
      ...GST.ROW,
      borderRadius: 6,
    },
    descriptiontext: {
      textAlignVertical: 'top',
      fontSize: moderateScale(14),
      fontFamily: Typography.FONTS.TYPE.REGULAR,
    },
    dropdown: {
      height: verticalScale(40),
      borderColor: colors.light_grayish,
      borderWidth: 1,
      borderRadius: 10,
      alignSelf: 'flex-end',
      width: '50%',
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
    actionBtn: {
      width: '100%',
      alignItems: 'center',
      paddingVertical: verticalScale(10),
    },
    actionImg: {
      height: verticalScale(20),
      width: horizontalScale(20),
      resizeMode: 'contain',
    },
    addTaskBtn: {
      height: verticalScale(45),
      width: '94%',
      borderRadius: 10,
      ...GST.CENTER,
      marginVertical: verticalScale(10),
    },
  });

export default useStyles;
