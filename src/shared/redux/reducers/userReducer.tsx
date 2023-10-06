import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  taskList: [],
  filterStatus: [],
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const copyuser = Array.isArray(state.taskList) ? [...state.taskList] : [];
      state.taskList = [action.payload, ...copyuser];
    },
    addinFilterTask: (state, action) => {
      const addnewTask = state.taskList.filter(
        (item: any) => item.status === action.payload.status,
      );
      state.filterStatus = addnewTask;
    },
    filterTask: (state, action) => {
      state.filterStatus = action.payload;
    },
    updateTodoList: (state, action) => {
      state.taskList = action.payload;
      // 
    },
    updateStatusfilterList: (state, action) => {
      const findStatus = state.filterStatus.filter(
        (item: any) => item.id !== action.payload?.id,
      );
      state.filterStatus = findStatus;
    },
    updateContentfilterList: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  addTask,
  filterTask,
  updateContentfilterList,
  updateStatusfilterList,
  updateTodoList,
  addinFilterTask,
} = userReducer.actions;

export default userReducer.reducer;
