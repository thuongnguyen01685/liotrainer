import callApi from "../../utils/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";

export const discountAction = (navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.promotions?domain=[('status','=','running')]`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        },
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.promotions"]) {
          return res?.data?.["academy.promotions"];
        } else {
          console.log(res, "academy.trainee");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
