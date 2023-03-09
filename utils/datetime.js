import moment from "moment";

export const formatDateDisplays = (date, separator = "-") => {
  return date && moment(date).isValid()
    ? moment(date).format("YYYY" + separator + "MM" + separator + "DD")
    : "";
};

export const formatTimeDisplay = (date, showSeconds = false) => {
  return date && moment(date).isValid()
    ? moment(date).format("HH:mm" + (showSeconds ? ":ss" : ""))
    : "";
};
export const formatDateTimeDisplay = (
  date,
  separator = "-",
  showSeconds = true
) => {
  return date && moment(date).isValid()
    ? formatDateDisplays(date, separator) +
        "  " +
        formatTimeDisplay(date, showSeconds)
    : "";
};

export const formatDateDisplays2 = (date, separator = "-") => {
  return date && moment(date).isValid()
    ? moment(date).format("DD" + separator + "MM" + separator + "YYYY")
    : "";
};

export function formatDate(time, string) {
  let dateNow = new Date(formatDateDisplays(time));
  let year = dateNow.getFullYear();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();
  let dayofweek = dateNow.getDay();

  const dayname = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  if (string === "thang") return month;
  if (string === "ngay") return day;
  if (string === "thu") return dayname[dayofweek];
}

export const listTime = {
  "3month": "3 Tháng",
  "6month": "6 Tháng",
  "12month": "12 Tháng",
  "18month": "18 Tháng",
  "24month": "24 Tháng",
};

export const getTime = (value) => {
  let hour = Math.floor(value);
  let minute = Math.round((value - Math.floor(value)) * 60);
  return `${hour > 9 ? hour : `0${hour}`}:${
    minute > 9 ? minute : `0${minute}`
  }`;
};
