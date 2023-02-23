import callApi from "../../utils/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setRefreshToken } from "../reducers/refreshToken.reducers";
import { loginUser } from "../reducers/user.reducers";

export const refreshTokenAction = (navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `newtoken?refresh_token=${token.refresh_token}`,
        "GET",
      );
      if (res.data) {
        const res1 = res.data;
        await AsyncStorage.setItem(
          "token",
          JSON.stringify({
            id: token.id,
            trainee_id: token.trainee_id,
            ...res1,
          }),
        );
        await dispatch(setRefreshToken());
      } else {
        await AsyncStorage.removeItem("token");
        await dispatch(loginUser(""));
        navigate.navigate("wellcome");
      }

      return res?.data;
    } catch (err) {
      // console.log(err);
    }
  };
  return add;
};
