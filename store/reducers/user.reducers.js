import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenUser: "",
  dataOtp: "",
  infoUser: "",
};

export const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.tokenUser = action.payload;
    },
    logoutUser: (state, action) => {
      state.tokenUser = action.payload;
    },
    getOtp: (state, action) => {
      state.dataOtp = action.payload;
    },
    setInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
  },
});

export const { loginUser, logoutUser, getOtp, setInfoUser } =
  UserReducer.actions;

export default UserReducer.reducer;
