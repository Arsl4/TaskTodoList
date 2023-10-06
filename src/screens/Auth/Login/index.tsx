import {View, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import useStyles from './style';
import {AppButton, AppText, AppTextInput, Wrapper} from '@components';
import {moderateScale, GST, verticalScale} from '@theme';
import {useTheme} from '@react-navigation/native';
import {addtask} from '@assets';
import {navigate} from '@services';
import {LoginSchema} from '@utils';
import Toast from 'react-native-simple-toast';
const Login = () => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    const loginObj = {email: email, password: password};
    LoginSchema.validate(loginObj)
      .then(async (res: any) => {
        navigate('mainStack');
      })
      .catch((e: any) => {
        let error = {
          message: e.message,
        };
        Toast.show(error.message, 2000);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{...GST.MAIN}} contentContainerStyle={{flexGrow: 1}}>
        <Wrapper isPaddingH={25} isTop={20}>
          <View style={{...GST.MAIN}}>
            <Image source={addtask} style={styles.img} />
            <AppText
              title={'TodoList'}
              size={moderateScale(20)}
              colorText={myTheme.colors.black}
              semiBold
              textStyle={styles.titleText}
            />
            <AppTextInput
              value={email}
              title={'Email'}
              placeholder={'Email'}
              viewStyle={styles.textinput}
              onChangeText={(txt: any) => {
                setEmail(txt);
              }}
            />
            <AppTextInput
              value={password}
              title={'Password'}
              secureTextEntry={true}
              placeholder={'Password'}
              viewStyle={styles.textinput}
              onChangeText={(txt: any) => {
                setPassword(txt);
              }}
            />
            <AppText
              title={'Forget password?'}
              size={moderateScale(12)}
              colorText={myTheme.colors.black}
              regular
              textStyle={styles.forgetpasswordText}
            />
            <AppButton
              bold
              title={'Login'}
              size={moderateScale(18)}
              textColor={myTheme.colors.white}
              buttonStyle={styles.addTaskBtn}
              onPress={Login}
            />
          </View>

          <View style={styles.haveAnAccountWrapper}>
            <AppText
              title={'Do you have an account? '}
              size={moderateScale(13)}
              colorText={myTheme.colors.black}
              regular
            />
            <AppText
              title={'Login'}
              size={moderateScale(13)}
              colorText={myTheme.colors.bright_blue}
              regular
            />
          </View>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
