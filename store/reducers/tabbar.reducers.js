import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizeTabbar: 0.15,
};

export const TabbarReducer = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    setTabbar: (state, action) => {
      state.sizeTabbar = action.payload;
    },
  },
});

export const { setTabbar } = TabbarReducer.actions;

export default TabbarReducer.reducer;
