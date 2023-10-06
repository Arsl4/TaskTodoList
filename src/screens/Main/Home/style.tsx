import {Dimensions, StyleSheet} from 'react-native';
import {GST, horizontalScale, verticalScale} from '@theme';
const {width} = Dimensions.get('window');

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...GST.MAIN,
      backgroundColor: colors.white,
    },
    headerWrapper: {
      backgroundColor: colors.bright_blue,
      paddingHorizontal: horizontalScale(10),
      paddingBottom: verticalScale(5),
    },
    headerInnerWrapper: {
      width: '94%',
      alignSelf: 'center',
    },
    textPadding: {
      paddingLeft: horizontalScale(10),
      paddingVertical: verticalScale(10),
    },
    timepadding: {
      paddingTop: verticalScale(10),
    },
    timetextStyle: {
      paddingBottom: verticalScale(15),
      paddingTop: verticalScale(3),
    },
    tasktypeListWrapper: {
      marginLeft: horizontalScale(5),
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(4),
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
    borderstyle: {
      borderBottomColor: colors.white,
      borderBottomWidth: 2,
      backgroundColor: colors.white,
    },
    flatlistWrapper: {
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      ...GST.ROW,
      alignItems: 'center',
      paddingVertical: verticalScale(6),
      backgroundColor: colors.white,
      borderRadius: 5,
      paddingHorizontal: horizontalScale(6),
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(20),
      marginVertical: verticalScale(5),
    },
    complete: {
      height: width * (0.3 / 10),
      width: width * 0.03,
      borderRadius: 50,
      backgroundColor: 'green',
    },
    duedate: {
      height: width * (0.3 / 10),
      width: width * 0.03,
      borderRadius: 50,
      backgroundColor: '#FFD580',
    },
    textinputViewstyle: {
      height: verticalScale(40),
      backgroundColor: colors.white,
      paddingHorizontal: horizontalScale(10),
    },
    contentwrapper: {
      ...GST.COLUMN,
      width: '75%',
      paddingHorizontal: horizontalScale(6),
    },
    incomplete: {
      height: width * (0.3 / 10),
      width: width * 0.03,
      borderRadius: 50,
      backgroundColor: 'red',
    },
    addTaskBtn: {
      height: width * (1.6 / 10),
      width: width * 0.16,
      borderRadius: 50,
      ...GST.CENTER,
      position: 'absolute',
      bottom: 10,
      right: 20,
    },
  });

export default useStyles;
