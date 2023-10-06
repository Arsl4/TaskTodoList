import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useStyles from './style';
import {AppButton, AppText, AppTextInput, Wrapper} from '@components';
import {
  GST,
  defaultTheme,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {navigate} from '@services';
import {filterTask} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {addtask} from '@assets';

const Home = () => {
  const myTheme: any = useTheme();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {taskList, filterStatus}: any = useSelector(state => state.root.user);
  const styles = useStyles(myTheme.colors);
  const flatListRef: any = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [searchRecord, setSearchRecord] = useState([]);
  const [currentTaskTap, setCurrentTaskTap] = useState('all');
  let taskTypes = [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Complete Task',
      value: 'complete',
    },
    {
      title: 'Incomplete Task',
      value: 'incomplete',
    },
    {
      title: 'Due Date',
      value: 'duedate',
    },
  ];

  //  header time function
  function generateGreetings() {
    var currentHour: any = moment().format('HH');
    if (currentHour >= 3 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 15) {
      return 'Good Afternoon';
    } else if (currentHour >= 15 && currentHour < 20) {
      return 'Good Evening';
    } else if (currentHour >= 20 || currentHour < 3) {
      return 'Good Night';
    } else {
      return 'Hello';
    }
  }

  // empty filtered record
  useEffect(() => {
    dispatch(filterTask([]));
  }, []);

  // filter status from select the tap
  const filterTaskStatus = (value: any, index: any) => {
    setCurrentTaskTap(value);
    if (value === 'all') {
      dispatch(filterTask([]));
    } else {
      const filterArr = taskList?.filter((item: any) => item?.status === value);
      dispatch(filterTask(filterArr));
    }
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index});
    }
  };

  // if no data in the record
  const EmptyComponent = () => {
    return (
      <View style={{...GST.MAIN, ...GST.CENTER}}>
        <Image
          source={addtask}
          style={{
            height: verticalScale(200),
            width: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  // search from inputText
  const SearchTask = (text: any) => {
    setSearchValue(text);
    const filteredData = taskList.filter((item: any) =>
      item.taskTitle?.toLowerCase().includes(text.toLowerCase()),
    );
    if (currentTaskTap !== 'all') {
      const searchedRecord = filteredData?.filter(
        (item: any) => item?.status === currentTaskTap,
      );
      setSearchRecord(searchedRecord);
    } else {
      setSearchRecord(filteredData);
    }
  };

  // Task list render item
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('taskDetail', {userId: item?.id})}
        style={[styles.flatlistWrapper]}>
        <View
          style={[
            item.status === 'complete'
              ? styles.complete
              : item.status === 'incomplete'
              ? styles.incomplete
              : styles.duedate,
          ]}
        />
        <View style={styles.contentwrapper}>
          <AppText
            title={
              item?.taskTitle?.length > 20
                ? item?.taskTitle?.substring(0, 20) + '....'
                : item?.taskTitle?.substring(0, 20)
            }
            size={moderateScale(16)}
            colorText={myTheme.colors.black}
            semiBold
          />

          <AppText
            title={
              item?.taskDescription?.length > 25
                ? item?.taskDescription?.substring(0, 25) + '...\nsee more'
                : item?.taskDescription?.substring(0, 20)
            }
            size={moderateScale(14)}
            colorText={myTheme.colors.black}
            regular
          />
        </View>

        <AppText
          title={item?.issuedate}
          size={moderateScale(12)}
          colorText={myTheme.colors.black}
          regular
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <FlatList
          data={
            searchValue !== ''
              ? searchRecord
              : currentTaskTap === 'complete' ||
                currentTaskTap === 'incomplete' ||
                currentTaskTap === 'duedate'
              ? filterStatus
              : taskList
          }
          stickyHeaderIndices={[0]}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyComponent}
          renderItem={renderItem}
          ListHeaderComponent={
            <View style={styles.headerWrapper}>
              <AppText
                title={'TodoList'}
                size={moderateScale(18)}
                colorText={myTheme.colors.white}
                semiBold
                textStyle={styles.textPadding}
              />
              <View style={styles.headerInnerWrapper}>
                <AppTextInput
                  value={searchValue}
                  placeholder={'Search by title'}
                  onChangeText={(txt: any) => {
                    SearchTask(txt);
                  }}
                  viewStyle={styles.textinputViewstyle}
                />
                <AppText
                  title={generateGreetings()}
                  size={moderateScale(20)}
                  colorText={myTheme.colors.white}
                  semiBold
                  textStyle={styles.timepadding}
                />
                <AppText
                  title={moment().format('MM ddd, YYYY hh:mm a')}
                  size={moderateScale(14)}
                  colorText={myTheme.colors.white}
                  medium
                  textStyle={styles.timetextStyle}
                />
                <FlatList
                  data={taskTypes}
                  horizontal
                  ref={flatListRef}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => filterTaskStatus(item.value, index)}
                      style={[
                        styles.tasktypeListWrapper,
                        item.value === currentTaskTap && styles.borderstyle,
                      ]}>
                      <AppText
                        title={item.title}
                        size={moderateScale(16)}
                        colorText={
                          item.value === currentTaskTap
                            ? myTheme.colors.bright_blue
                            : myTheme.colors.white
                        }
                        medium
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          }
        />
        <AppButton
          bold
          title={'+'}
          size={moderateScale(30)}
          buttonStyle={styles.addTaskBtn}
          textColor={myTheme?.colors?.white}
          onPress={() => {
            navigate('AddTask');
          }}
        />
      </>
    </SafeAreaView>
  );
};

export default Home;
