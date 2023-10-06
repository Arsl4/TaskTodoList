import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import useStyles from './style';
import {AppButton, AppText} from '@components';
import {moderateScale, GST} from '@theme';
import {useTheme} from '@react-navigation/native';
import {addtask} from '@assets';
import {navigate} from '@services';
const Welcome = () => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{...GST.MAIN, ...GST.CENTER}}>
        <Image source={addtask} style={styles.img} />
        <AppText
          title={
            'Lorem ipsum began as scrambled,\n nonsensical Latin derived from Cicero.'
          }
          size={moderateScale(16)}
          colorText={myTheme.colors.black}
          regular
          center
          // textStyle={styles.titleText}
        />
      </View>
      <AppButton
        bold
        title={'Let`s started'}
        size={moderateScale(18)}
        textColor={myTheme.colors.white}
        buttonStyle={styles.addTaskBtn}
        onPress={() => navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default Welcome;
