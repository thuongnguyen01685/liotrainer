import callApi from "../../utils/callApi";
import callApiFos from "../../utils/callApiFos";
import { getOtp, loginUser, setInfoUser } from "../reducers/user.reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";

export const getInfoUserAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`academy/trainer/${id}`, "GET");
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data) {
          dispatch(setInfoUser(res?.data));
          return res?.data;
        } else {
          console.log(res, "academy.trainer");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const loginUserAction = (data) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`trainer/login`, "POST", {
        ...data,
        db: "betatgh.fostech.vn",
      });
      await dispatch(loginUser(res?.data?.result));
      return res?.data?.result;
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const SignUpAction = (data) => async (dispatch) => {
  try {
    const res = await callApiFos(`signup`, "POST", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SignUpOdooAction = (data) => async (dispatch) => {
  try {
    const res = await callApi(`create/user`, "POST", {
      name: data.name,
      mobile: data.phone,
      password: data.password,
      username: data.phone,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOTPAction = (number) => async (dispatch) => {
  try {
    if (!number.startsWith("0")) number = "0" + number;
    const res = await callApiFos(
      `send-otp/${number}?id_app=62cbc813aede94676ae96d78`
    );
    await dispatch(getOtp(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getTokenFosAction = (id_otp, code_opt) => async (dispatch) => {
  try {
    const res = await callApiFos(
      `verify-otp/${id_otp}/${code_opt}?group_id=60939745ac969b40784883ed&id_app=62cbc813aede94676ae96d78&once=1`
    );

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const changePassFosAction = (token, data) => async (dispatch) => {
  try {
    const res = await callApiFos(
      `/api/changepassword?access_token=${token}`,
      "POST",
      data
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
