import callApi from "../../utils/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenAction } from "./refreshToken.actions";

export const itemEpisodePackAction = (navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.registration?domain=[('state','=','running'),('trainee_id.user_id', '=',${token.id})]&order="expected_start_date"&limit=1`,
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
          return res?.data?.["academy.registration"];
        } else {
          console.log(res, "academy.registration");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const listCourseAction = (filter, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.course${
          filter ? `?domain=[('evaluation_type','=','${filter}')]` : ""
        }`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.course"]) {
          return res?.data?.["academy.course"];
        } else {
          console.log(res, "academy.course");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const listMyPackAction = (navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.registration?domain=[('trainee_id.user_id','=',${token.id})]&order=expected_start_date`,
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
          return res?.data?.["academy.registration"];
        } else {
          console.log(res, "academy.registration");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const detailSubjectCourseAction = (subject, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.subject?ids=${subject.join()}&fields=['id','name','code','unit']`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.subject"]) {
          return res?.data?.["academy.subject"];
        } else {
          console.log(res, "academy.subject");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const listProgramCourseAction = (id, navigate) => {
  const add = async (dispatch) => {
    try {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      const res = await callApi(
        `restapi/1.0/object/academy.course.program?domain=[('course_id','=',${id})]`,
        "GET",
        "",
        {
          "X-Authorization": `Bearer ${token.access_token}`,
        }
      );
      if (res.code === 401) {
        dispatch(refreshTokenAction(navigate));
      } else {
        if (res?.data?.["academy.course.program"]) {
          return res?.data?.["academy.course.program"];
        } else {
          console.log(res, "academy.course.program");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
