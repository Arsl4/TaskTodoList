import {GST} from '@theme';
import React from 'react';

import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

interface LoaderProps {}
const CustomLoader = (props: Partial<LoaderProps>) => {
  const isLoading = useSelector((state: any) => state.root.common.isLoading);

  return isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator size={55} color="#00ff00" />
      {/* <Image
        resizeMode="contain"
        source={points}
        style={{ position: "absolute", height: RF(65), width: RF(65) }}
      />
       */}
    </View>
  ) : null;
};
export default CustomLoader;

const styles = StyleSheet.create({
  loading: {
    ...GST.CENTER,
    position: 'absolute',
    zIndex: 11111,
    width: '100%',
    height: '100%',
  },
});
