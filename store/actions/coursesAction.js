import callApi from "../../utils/callApi";
import { getCourseList, getCourseRunning } from "../reducers/course.reducers";
import { refreshTokenAction } from "./refreshToken.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListCourseAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(
      `restapi/1.0/object/academy.course.program`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${"auth.public.token"}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.course.program"]) {
        //console.log(res.data?.["academy.trainer.booking"], "data333");

        dispatch(getCourseList(res.data?.["academy.course.program"]));
        return res?.data?.["academy.course.program"];
      } else {
        console.log(res, "academy.course.program");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const CourseRunningAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);

    const res = await callApi(
      `restapi/1.0/object/academy.registration?domain=[('state','=','running')]&limit=2`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.registration"]) {
        //console.log(res.data?.["academy.trainer.booking"], "data333");

        dispatch(getCourseRunning(res.data?.["academy.registration"]));
        return res?.data?.["academy.registration"];
      } else {
        console.log(res, "academy.registration");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
