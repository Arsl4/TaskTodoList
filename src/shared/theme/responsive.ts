import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const BASE_UNIT_WIDTH = 360;
const BASE_UNIT_HEIGHT = 640;
const horizontalScale = (size: any) => (width / BASE_UNIT_WIDTH) * size;
const verticalScale = (size: any) => (height / BASE_UNIT_HEIGHT) * size;
const moderateScale = (size: any, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export {horizontalScale, verticalScale, moderateScale};
