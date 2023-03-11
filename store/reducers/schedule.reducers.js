import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scheduleFuture: [],
  scheduleList: [],
  detailSchedule: [],
  listStudentToday: [],
};

export const ScheduleReducer = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    getScheduleFuture: (state, action) => {
      if (action.payload.code === 404) {
        state.scheduleFuture = [];
      } else {
        if (action.payload.length > 0) {
          state.scheduleFuture = action.payload;
        } else {
          state.scheduleFuture = [action.payload];
        }
      }
    },
    getScheduleList: (state, action) => {
      if (action.payload.code === 404) {
        state.scheduleList = [];
      } else {
        if (action.payload.length > 0) {
          state.scheduleList = action.payload;
        } else {
          state.scheduleList = [action.payload];
        }
      }
    },
    getDetailSchedule: (state, action) => {
      state.detailSchedule = action.payload;
    },
    getListStudentToday: (state, action) => {
      state.listStudentToday = action.payload;
    },
  },
});

export const {
  getScheduleFuture,
  getScheduleList,
  getDetailSchedule,
  getListStudentToday,
} = ScheduleReducer.actions;

export default ScheduleReducer.reducer;
