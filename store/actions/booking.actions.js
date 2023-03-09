import callApi from "../../utils/callApi";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";
import { getListStudentToday } from "../reducers/schedule.reducers";

export const listBookingAction = (time, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(
      `restapi/1.0/object/academy.schedule.booking?domain=[('trainer_id','=',False),('date_start','>=','${time}'),('date_start','<=','${moment(
        time
      ).format("YYYY-MM-DD")} 23:59:59')]`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.schedule.booking"]) {
        return res?.data?.["academy.schedule.booking"];
      } else {
        console.log(res, "academy.schedule.booking");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const detailBookingAction = (id, time, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(
      `restapi/1.0/object/academy.schedule.booking?domain=[('trainer_id','=',False),('date_start','>=','${time}'),('date_start','<=','${moment(
        time
      ).format("YYYY-MM-DD")} 23:59:59'),('id','=',${id})]`,
      "GET",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data?.["academy.schedule.booking"]) {
        return res?.data?.["academy.schedule.booking"];
      } else {
        console.log(res, "academy.schedule.booking");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const bookingAction = (data, navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(
      `restapi/1.0/object/academy.trainer.booking?vals=${JSON.stringify(data)}`,
      "POST",
      "",
      {
        "X-Authorization": `Bearer ${token.access_token}`,
      }
    );

    if (res.code === 401) {
      await dispatch(refreshTokenAction(navigate));
      await dispatch(bookingAction(data, navigate));
    } else {
      if (res?.data) {
        return res?.data;
      } else {
        console.log(res, "error post");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const cancelBookingAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.booking/${id}?vals={'status':'cancel'}`,
        "PUT",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        await dispatch(refreshTokenAction(navigate));
        await dispatch(cancelBookingAction(id, navigate));
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

export const checkinBookingAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.booking/${id}?vals={'status':'checkin'}`,
        "PUT",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        await dispatch(refreshTokenAction(navigate));
        await dispatch(checkinBookingAction(id, navigate));
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

// export const checkoutBookingAction = (id, navigate) => {
//   const add = async (dispatch) => {
//     try {
//       let temp = await AsyncStorage.getItem("token");
//       const token = await JSON.parse(temp);
//       const res = await callApi(
//         `restapi/1.0/object/academy.booking/${id}?vals={'status':'checkout'}`,
//         "PUT",
//         "",
//         {
//           "X-Authorization": `Bearer ${token.access_token}`,
//         },
//       );
//       if (res.code === 401) {
//         await dispatch(refreshTokenAction(navigate));
//         await dispatch(checkoutBookingAction(id, navigate));
//       } else {
//         if (res?.data?.["academy.booking"]) {
//           return res?.data?.["academy.booking"];
//         } else {
//           console.log(res, "academy.booking");
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return add;
// };
export const checkoutBookingAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      let token2 = await refreshTokenAction(navigate);

      const token = await JSON.parse(temp);
      console.log(token);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this, "lỗi", xhr);
          const res = this.responseText;
        }
      });

      xhr.open(
        "PUT",
        `https://betatgh.fostech.vn/restapi/1.0/object/academy.booking/${id}?vals=%7B'status':'checkout'%7D`
      );
      xhr.setRequestHeader("X-Authorization", `Bearer ${token.access_token}`);
      // WARNING: Cookies will be stripped away by the browser before sending the request.
      xhr.setRequestHeader(
        "Cookie",
        "frontend_lang=en_US; session_id=86e2f8376f28dd8cb88dba5e4705d903d49347ad"
      );

      let t = await xhr.send();

      if (res.code === 401) {
        console.log("looioix");
        await dispatch(refreshTokenAction(navigate));

        await dispatch(checkoutBookingAction(id, navigate));
      } else {
        if (res?.["academy.booking"]) {
          return res?.["academy.booking"];
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

export const getListStudentTodayAction = (navigate) => async (dispatch) => {
  try {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const res = await callApi(`academy/trainee/booking/today`, "GET", "", {
      "X-Authorization": `Bearer ${token.access_token}`,
    });

    if (res.code === 401) {
      dispatch(refreshTokenAction(navigate));
    } else {
      if (res?.data) {
        dispatch(getListStudentToday(res.data));
        return res?.data;
      } else {
        console.log(res, "list member");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
