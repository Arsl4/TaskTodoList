import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useStyles from './style';
import {
  AppButton,
  AppText,
  AppTextInput,
  BackNavigate,
  Wrapper,
} from '@components';
import {
  GST,
  Typography,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {dots, edit} from '@assets';
import * as Animatable from 'react-native-animatable';
import {
  filterTask,
  updateContentfilterList,
  updateStatusfilterList,
  updateTodoList,
} from '@redux';
import {Dropdown} from 'react-native-element-dropdown';
import Toast from 'react-native-simple-toast';

const TaskDetail = () => {
  const myTheme: any = useTheme();
  const dispatch = useDispatch();
  const {taskList, filterStatus}: any = useSelector(state => state.root.user);
  const styles = useStyles(myTheme.colors);
  const route = useRoute();
  const {userId}: any = route.params;
  const inputRef = useRef<TextInput | null>(null);
  const [selectedUser, setSelectedUser]: any = useState(null);
  const [selectStatus, setSelectStatus] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const data = [
    {label: 'Complete', value: 'complete'},
    {label: 'Incomplete', value: 'incomplete'},
    {label: 'Due Date', value: 'duedate'},
  ];

  useEffect(() => {
    const selectedUser = taskList?.find((item: any) => item?.id === userId);
    setSelectedUser(selectedUser);
    setSelectStatus(selectedUser?.status);
  }, []);

  const UpdateList = () => {
    const {id, taskTitle, taskDescription, startDate, endDate} = selectedUser;
    const newUpdatedList = taskList?.map((item: any) => {
      return item?.id === userId
        ? {
            ...item,
            id: id,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            status: selectStatus,
            startDate: startDate,
            endDate: endDate,
          }
        : {
            ...item,
          };
    });
    Toast.show('Record updated', 300);
    dispatch(updateTodoList(newUpdatedList));
    const updateObj = {
      id: id,
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      status: selectStatus,
      startDate: startDate,
      endDate: endDate,
    };
    if (selectedUser.status !== selectStatus) {
      dispatch(updateStatusfilterList(updateObj));
    } else {
      const newUpdatedfilterList = filterStatus?.map((item: any) => {
        return item?.id === userId
          ? {
              ...item,
              id: id,
              taskTitle: taskTitle,
              taskDescription: taskDescription,
              status: selectStatus,
              startDate: startDate,
              endDate: endDate,
            }
          : {
              ...item,
            };
      });
      dispatch(updateContentfilterList(newUpdatedfilterList));
    }
    setTimeout(() => {
      navigate('Home');
    }, 500);
  };
  const DeleteListRecord = () => {
    const deletedRecord = taskList?.filter((item: any) => item?.id !== userId);
    const updatefiltreRecord = deletedRecord?.filter(
      (item: any) => item?.status == selectedUser?.status,
    );
    dispatch(updateTodoList(deletedRecord));
    dispatch(filterTask(updatefiltreRecord));
    Toast.show('Record Deleted', 300);
    setTimeout(() => {
      navigate('Home');
    }, 500);
  };

  const handleDescriptionInput = () => {
    setIsEditable(!isEditable);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={{zIndex: 999}}>
          <View style={styles.headerContainer}>
            <BackNavigate title={'TodoList'} />
            <TouchableOpacity
              onPress={() => setDropdownVisible(!isDropdownVisible)}>
              <Image source={dots} style={styles.actionImg} />
            </TouchableOpacity>
          </View>
          {isDropdownVisible && (
            <Animatable.View
              animation={isDropdownVisible ? 'slideInDown' : 'slideOutUp'}
              duration={500}
              style={styles.dropDownWrapper}>
              <TouchableOpacity
                onPress={DeleteListRecord}
                style={styles.actionBtn}>
                <AppText
                  title={'Delete'}
                  size={moderateScale(16)}
                  colorText={myTheme.colors.black}
                  medium
                />
              </TouchableOpacity>
            </Animatable.View>
          )}
        </View>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <Pressable
            style={{...GST.MAIN}}
            onPress={() => setDropdownVisible(false)}>
            <Wrapper isPaddingH={15} isTop={15}>
              {selectedUser && (
                <>
                  <View
                    style={{
                      ...GST.mid_row,
                    }}>
                    {selectedUser?.status === 'duedate' ? (
                      <AppText
                        title={`${'Due Date\n'}${selectedUser?.endDate}`}
                        size={moderateScale(12)}
                        colorText={myTheme.colors.black}
                        regular
                      />
                    ) : (
                      <AppText
                        title={`${'Issue Date\n'}${selectedUser?.issuedate}`}
                        size={moderateScale(12)}
                        colorText={myTheme.colors.black}
                        regular
                      />
                    )}
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      data={data}
                      maxHeight={verticalScale(200)}
                      labelField="label"
                      valueField="value"
                      placeholder="Select status"
                      searchPlaceholder="Search..."
                      value={selectStatus}
                      onChange={(item: any) => {
                        setSelectStatus(item.value);
                      }}
                    />
                  </View>

                  <AppTextInput
                    multiline
                    editable={false}
                    value={selectedUser?.taskTitle}
                    viewStyle={styles.textinputview}
                    textStyle={styles.titletext}
                    onChangeText={(txt: any) => {
                      setSelectedUser({
                        ...selectedUser,
                        taskTitle: txt,
                      });
                    }}
                  />

                  <View
                    style={[
                      isEditable ? styles.editable : styles.noneditable,
                      styles.editblewrapper,
                    ]}>
                    {isEditable ? (
                      <AppTextInput
                        multiline
                        autoFocus={isEditable}
                        value={selectedUser?.taskDescription}
                        viewStyle={[
                          styles.decriptiontextinputView,
                          styles.paddingTextinput,
                        ]}
                        textStyle={styles.descriptiontext}
                        onChangeText={(txt: any) => {
                          setSelectedUser({
                            ...selectedUser,
                            taskDescription: txt,
                          });
                        }}
                      />
                    ) : (
                      <AppText
                        title={selectedUser?.taskDescription}
                        size={moderateScale(14)}
                        colorText={myTheme.colors.black}
                        regular
                        textStyle={[styles.decriptiontextinputView]}
                      />
                    )}

                    <TouchableOpacity
                      style={{paddingTop: verticalScale(4)}}
                      onPress={handleDescriptionInput}>
                      <Image source={edit} style={styles.actionImg} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Wrapper>
          </Pressable>
        </ScrollView>
        <AppButton
          bold
          title={'Update'}
          size={moderateScale(16)}
          buttonStyle={styles.addTaskBtn}
          textColor={myTheme?.colors?.white}
          onPress={() => {
            UpdateList();
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TaskDetail;
