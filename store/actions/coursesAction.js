import callApi from "../../utils/callApi";
import {
  getCourseDetail,
  getCourseList,
  getCourseRunning,
} from "../reducers/course.reducers";
import { refreshTokenAction } from "./refreshToken.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListCourseAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`restapi/1.0/object/academy.course`, "GET", "", {
      "X-Authorization": `Bearer ${"auth.public.token"}`,
    });

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.course"]) {
        //console.log(res.data?.["academy.trainer.booking"], "data333");

        dispatch(getCourseList(res.data?.["academy.course"]));
        return res?.data?.["academy.course"];
      } else {
        console.log(res, "academy.course");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCourseDetailAction =
  (navigate, course_id) => async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `academy/course/detail/${course_id}`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );

      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data) {
          dispatch(getCourseDetail(res.data));
          return res?.data;
        } else {
          console.log(res, "academy.course");
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
      `restapi/1.0/object/academy.registration?domain=[('state','=','running')]`,
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
