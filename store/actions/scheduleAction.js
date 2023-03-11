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
      `restapi/1.0/object/academy.trainer.booking?domain=[('status','!=','cancel'),('status','!=','checkout'),('status','!=','done'),('trainer_id','=',${
        token.trainer_id
      }),('date_end','>=','${moment().format(
        "YYYY-MM-DD hh:mm:ss"
      )}'),('date_end','<','${moment().format(
        "YYYY-MM-DD"
      )} 23:59:59')]&order=date_start`,
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
        dispatch(getScheduleFuture(res));
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
      `restapi/1.0/object/academy.trainer.booking?domain=[('status','!=','cancel'),('status','!=','checkout'),('date_end','>=','${formatDateTimeDisplay(
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

export const checkInScheduleAction = (id, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`academy/trainer/checkin/${id}`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data.code === 200) {
        scheduleFutureAction(navigate);
        scheduleListAction(navigate);
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkOutScheduleAction = (id, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`academy/trainer/checkout/${id}`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data.code === 200) {
        scheduleFutureAction(navigate);
        scheduleListAction(navigate);
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const cancelScheduleAction = (id, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`academy/trainer/cancel/${id}`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data.code === 200) {
        scheduleFutureAction(navigate);
        scheduleListAction(navigate);
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const doneScheduleAction = (id, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`academy/trainer/done/${id}`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data.code === 200) {
        scheduleFutureAction(navigate);
        scheduleListAction(navigate);
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkQrAction = (dataQr, navigate, status) => async (dispatch) => {
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
      if (resQr.data?.["academy.trainer.booking"]?.id) {
        return resQr.data?.["academy.trainer.booking"];
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDetailFutureScheduleAction =
  (id, navigate) => async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.trainer.booking/${id}`,
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
          return res?.data?.["academy.trainer.booking"];
        } else {
          console.log(res, "res detail future schedule");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

export const feedbackAction = (data, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(
      `restapi/1.0/object/academy.trainee.feedback?vals=${JSON.stringify(
        data
      )}`,
      "POST",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
      await dispatch(feedbackAction(data, navigate));
    } else {
      if (res?.data?.["academy.trainee.feedback"]) {
        return res?.data?.["academy.trainee.feedback"];
      } else {
        console.log(res, "error post feedback");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
