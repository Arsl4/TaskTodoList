import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import useStyles from './style';
import {
  AppButton,
  AppText,
  AppTextInput,
  BackNavigate,
  Wrapper,
} from '@components';
import {moderateScale, verticalScale} from '@theme';
import {useRoute, useTheme} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {addTask, addinFilterTask, filterTask} from '@redux';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {AddTaskSchema} from '@utils';
import Toast from 'react-native-simple-toast';
import {navigate} from '@services';

const AddTask = () => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [value, setValue] = useState('');
  const [isStartDatePicker, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePicker, setEndDatePickerVisibility] = useState(false);
  const [startDate, setStartDate]: any = useState('');
  const [endDate, setEndDate]: any = useState('');
  const data = [
    {label: 'Complete', value: 'complete'},
    {label: 'Incomplete', value: 'incomplete'},
    {label: 'Due Date', value: 'duedate'},
  ];

  const AddTask = () => {
    const taskList = {
      id: uuid.v4(),
      taskTitle: taskTitle,
      issuedate: moment().format('YYYY-MM-DD'),
      taskDescription: taskDescription,
      status: value,
    };
    const updateTaskList =
      value === 'duedate'
        ? {...taskList, startDate: startDate, endDate: endDate}
        : taskList;

    AddTaskSchema.validate(updateTaskList)
      .then(async (res: any) => {
        dispatch(addTask(updateTaskList));
        navigate('Home');
        Toast.show('Added Successfully', 2000);
      })
      .catch((e: any) => {
        let error = {
          message: e.message,
        };
        Toast.show(error.message, 2000);
      });
  };

  const hanldeStartDatePicker = (value: boolean) => {
    setStartDatePickerVisibility(value);
  };

  const handlestartConfirmPicker = (date: any) => {
    setStartDate(moment(date).utc().format('YYYY-MM-DD'));
    hanldeStartDatePicker(false);
  };

  const handleEndDatePicker = (value: boolean) => {
    setEndDatePickerVisibility(value);
  };

  const handleEndDateConfirmPicker = (date: any) => {
    setEndDate(moment(date).utc().format('YYYY-MM-DD'));
    handleEndDatePicker(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackNavigate title={'TodoList'} />
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Wrapper isPaddingH={25} isTop={20}>
          <AppTextInput
            value={taskTitle}
            title={'Title'}
            placeholder={'Title'}
            onChangeText={(txt: any) => {
              setTaskTitle(txt);
            }}
            viewStyle={[styles.textinputstyle, styles.textinputpadding]}
          />
          <AppTextInput
            value={taskDescription}
            multiline={true}
            placeholder={'Description'}
            title={'Description'}
            onChangeText={(txt: any) => {
              setTaskDescription(txt);
            }}
            viewStyle={[styles.maxHeight, styles.textinputpadding]}
          />
          <AppText
            title={'Status'}
            size={moderateScale(16)}
            colorText={myTheme.colors.black}
            medium
            textStyle={styles.statusTitleStyle}
          />
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
            value={value}
            onChange={(item: any) => {
              setValue(item.value);
            }}
          />
          {value === 'duedate' && (
            <>
              <View style={styles.dueDateWrapper}>
                <AppText
                  title={'Start Date'}
                  size={moderateScale(16)}
                  colorText={myTheme.colors.black}
                  medium
                  textStyle={styles.textpadding}
                />
                <AppButton
                  bold
                  title={startDate !== '' ? startDate : 'Start Date'}
                  size={moderateScale(14)}
                  textColor={
                    startDate ? myTheme.colors.black : myTheme.colors.slate_gray
                  }
                  buttonStyle={styles.startDate}
                  onPress={() => {
                    hanldeStartDatePicker(true);
                  }}
                />
              </View>
              <View>
                <AppText
                  title={'End Date'}
                  size={moderateScale(16)}
                  colorText={myTheme.colors.black}
                  medium
                  textStyle={styles.textpadding}
                />
                <AppButton
                  bold
                  title={endDate !== '' ? endDate : 'End Date'}
                  size={moderateScale(14)}
                  textColor={
                    endDate ? myTheme.colors.black : myTheme.colors.slate_gray
                  }
                  buttonStyle={styles.startDate}
                  onPress={() => {
                    handleEndDatePicker(true);
                  }}
                />
                <DateTimePickerModal
                  isVisible={isStartDatePicker}
                  mode="date"
                  onConfirm={handlestartConfirmPicker}
                  onCancel={() => handleEndDatePicker(false)}
                />
                <DateTimePickerModal
                  isVisible={isEndDatePicker}
                  mode="date"
                  onConfirm={handleEndDateConfirmPicker}
                  onCancel={() => handleEndDatePicker(false)}
                />
              </View>
            </>
          )}
        </Wrapper>
      </ScrollView>
      <AppButton
        bold
        title={'Add'}
        size={moderateScale(18)}
        textColor={myTheme.colors.white}
        buttonStyle={styles.addTaskBtn}
        bgColor={myTheme?.colors?.white}
        onPress={() => {
          AddTask();
        }}
      />
    </SafeAreaView>
  );
};

export default AddTask;
