import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [],
  courseRunning: [],
};

export const CourseReducer = createSlice({
  name: "course",
  initialState,
  reducers: {
    getCourseList: (state, action) => {
      state.courseList = action.payload;
    },
    getCourseRunning: (state, action) => {
      state.courseRunning = action.payload;
    },
  },
});

export const { getCourseList, getCourseRunning } = CourseReducer.actions;

export default CourseReducer.reducer;
