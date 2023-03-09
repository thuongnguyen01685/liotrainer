import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./course.reducers";
import RefreshTokenReducers from "./refreshToken.reducers";
import ScheduleReducer from "./schedule.reducers";
import SystemReducer from "./system.reducers";
import TabbarReducer from "./tabbar.reducers";
import UserReducer from "./user.reducers";

export default configureStore({
  reducer: {
    user: UserReducer,
    tabbar: TabbarReducer,
    refreshToken: RefreshTokenReducers,
    schedule: ScheduleReducer,
    course: CourseReducer,
    system: SystemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
