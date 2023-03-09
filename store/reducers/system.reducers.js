import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "vi",
};

export const SystemReducer = createSlice({
  name: "system",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = SystemReducer.actions;

export default SystemReducer.reducer;
