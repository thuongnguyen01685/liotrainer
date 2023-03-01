import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scheduleFuture: [],
  scheduleList: [],
  detailSchedule: [],
};

export const ScheduleReducer = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    getScheduleFuture: (state, action) => {
      state.scheduleFuture = action.payload;
    },
    getScheduleList: (state, action) => {
      state.scheduleList = action.payload;
    },
    getDetailSchedule: (state, action) => {
      state.detailSchedule = action.payload;
    },
  },
});

export const { getScheduleFuture, getScheduleList, getDetailSchedule } =
  ScheduleReducer.actions;

export default ScheduleReducer.reducer;
