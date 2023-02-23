import React from "react";
import SvgContactInfo from "../../svg/account/svgContactInfo";
import SvgEarth from "../../svg/account/svgEarth";
import SvgFlag from "../../svg/account/svgFlag";
import SvgLayer from "../../svg/account/svgLayer";
import SvgLocationStudio from "../../svg/account/svgLocationStudio";
import SvgLogout from "../../svg/account/svgLogout";
import SvgPolicyTerms from "../../svg/account/svgPolicyTerms";

export const workoutRecords = [
  {
    icon: <SvgLayer />,
    title: "Gói tập của bạn",
    //link: "MyPackages",
  },
  {
    icon: <SvgFlag />,
    title: "Tiến độ tập luyện",
  },
];

export const generalInformation = [
  {
    icon: <SvgLocationStudio />,
    title: "Danh sách studio",
    //link: "ListStudio",
  },
  {
    icon: <SvgPolicyTerms />,
    title: "Điều khoản & chính sách",
  },
  {
    icon: <SvgEarth />,
    title: "Ngôn ngữ",
    content: "Tiếng việt",
  },
  {
    icon: <SvgContactInfo />,
    title: "Thông tin liên hệ",
  },
  {
    icon: <SvgLogout />,
    title: "Đăng xuất",
    link: "wellcome",
  },
];
