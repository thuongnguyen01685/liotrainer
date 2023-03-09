import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import callApi from "../../utils/callApi";
import { formatDateTimeDisplay } from "../../utils/datetime";

import {
  getDetailSchedule,
  getScheduleFuture,
  getScheduleList,
} from "../reducers/schedule.reducers";
import { refreshTokenAction } from "./refreshToken.actions";
export const scheduleFutureAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);

    console.log(token.access_token, "token");
    const res = await callApi(
      `restapi/1.0/object/academy.trainer.booking?domain=[('status','!=','cancel'),('status','!=','checkout'),('trainer_id','=',${token.trainer_id})]&order=date_start&limit=1`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
      dispatch(scheduleFutureAction(navigate));
    } else {
      if (res?.data?.["academy.trainer.booking"]) {
        //console.log(res.data?.["academy.trainer.booking"], "data333");
        dispatch(getScheduleFuture(res.data?.["academy.trainer.booking"]));
        return res?.data?.["academy.trainer.booking"];
      } else {
        console.log(res, "academy.trainer.booking");
        dispatch(getScheduleFuture([]));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const scheduleListAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);

    const res = await callApi(
      `restapi/1.0/object/academy.trainer.booking?domain=[('status','!=','cancel'),('status','!=','checkout'),('date_start','>=','${formatDateTimeDisplay(
        moment()
      )}'),('trainer_id','=',${token.trainer_id})]&order=date_start`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.trainer.booking"]) {
        dispatch(getScheduleList(res.data?.["academy.trainer.booking"]));
        return res.data?.["academy.trainer.booking"];
      } else {
        dispatch(getScheduleList(res));
        console.log(res, "academy.trainer.booking");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDetailScheduleAction = (id, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);

    const res = await callApi(`academy/trainer/booking/${id}`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data) {
        dispatch(getDetailSchedule(res.data));
        return res.data;
      } else {
        console.log(res, "res detail booking");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkScheduleAction =
  (id, status, navigate) => async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.trainer.booking/${id}?vals={'status': '${status}'}`,
        "PUT",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );

      if (res.code === 401) {
        await dispatch(refreshTokenAction(navigate));
      } else {
        scheduleFutureAction(navigate);
        scheduleListAction(navigate);
      }
    } catch (error) {
      console.log(error);
    }
  };

export const checkQrAction =
  (dataQr, navigate, status, id_trainer) => async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);

      const resQr = await callApi(
        `restapi/1.0/object/academy.trainer.booking?domain=[('trainer_id','=',${token.trainer_id}),('schedule_booking_id.code','=','${dataQr}')]&fields=['id']`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );

      if (resQr.code === 401) {
        await dispatch(refreshTokenAction(navigate));
      } else {
        const res = await callApi(
          `restapi/1.0/object/academy.trainer.booking/${resQr.data?.["academy.trainer.booking"].id}?vals={'status': '${status}'}`,
          "PUT",
          "",
          {
            "X-Authorization": `Bearer ${token.access_token}`,
          }
        );

        if (res.code === 401) {
          await dispatch(refreshTokenAction(navigate));
        } else {
          scheduleFutureAction(navigate);
          scheduleListAction(navigate);
          return res.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
