import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [],
  courseRunning: [],
  courseDetail: [],
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
    getCourseDetail: (state, action) => {
      state.courseDetail = action.payload;
    },
  },
});

export const { getCourseList, getCourseRunning, getCourseDetail } =
  CourseReducer.actions;

export default CourseReducer.reducer;
