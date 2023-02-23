import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeToken: 0,
};

export const RefreshTokenReducer = createSlice({
  name: "refreshToken",
  initialState,
  reducers: {
    setRefreshToken: (state, action) => {
      state.changeToken = state.changeToken + 1;
    },
  },
});

export const { setRefreshToken } = RefreshTokenReducer.actions;

export default RefreshTokenReducer.reducer;
