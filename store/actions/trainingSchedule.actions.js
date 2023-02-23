import callApi from "../../utils/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";

export const trainingScheduleAction = (time, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.booking?domain=[('date_start','>=','${time}'),('trainee_id.user_id','=',${token.id}),('status','!=','cancel'),('status','!=','checkout'),('status','!=','done')]&order=date_start&offset=0&limit=1`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.booking"]) {
          return res?.data?.["academy.booking"];
        } else {
          console.log(res, "academy.booking");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const listTrainingScheduleAction = (time, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.booking?domain=[('date_start','>=','${time}'),('trainee_id.user_id','=',${token.id}),('status','!=','cancel'),('status','!=','checkout'),('status','!=','done')]&order=date_start&offset=0&limit=20`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.booking"]) {
          return res?.data?.["academy.booking"];
        } else {
          console.log(res, "academy.booking");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const detailTrainingScheduleAction = (booking_id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.booking/${booking_id}`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.booking"]) {
          return res?.data?.["academy.booking"];
        } else {
          console.log(res, "academy.booking");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
