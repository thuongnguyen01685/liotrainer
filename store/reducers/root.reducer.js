import { configureStore } from "@reduxjs/toolkit";
import RefreshTokenReducers from "./refreshToken.reducers";
import TabbarReducer from "./tabbar.reducers";
import UserReducer from "./user.reducers";

export default configureStore({
  reducer: {
    user: UserReducer,
    tabbar: TabbarReducer,
    refreshToken: RefreshTokenReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
