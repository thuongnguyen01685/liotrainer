import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [],
  courseRunning: [],
  courseDetail: [],
  studentDetail: [],
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
    getStudentDetail: (state, action) => {
      state.studentDetail = action.payload;
    },
  },
});

export const {
  getCourseList,
  getCourseRunning,
  getCourseDetail,
  getStudentDetail,
} = CourseReducer.actions;

export default CourseReducer.reducer;
