import callApi from "../../utils/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";

export const listLocationBookingAction = (navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.location`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        },
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.location"]) {
          return res?.data?.["academy.location"];
        } else {
          console.log(res, "academy.location");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const detailLocationAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.location/${id}`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        },
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.location"]) {
          return res?.data?.["academy.location"];
        } else {
          console.log(res, "academy.location");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
