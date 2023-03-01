import axios from "axios";

export const URL = "https://betatgh.fostech.vn";
export default function callApi(endpoint, method = "GET", data, headers) {
  return axios({
    method: method,
    url: `${URL}/${endpoint}`,
    data: data,
    headers: headers,
  }).catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      // console.log(error.request);
    } else {
      // console.log(error.message);
    }
    // console.log(error.config);
  });
}
