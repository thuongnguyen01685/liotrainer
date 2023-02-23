//import liraries
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function GoiTapSvg() {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18 10.11V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H8.11C9.37 21.24 11.09 22 13 22C16.87 22 20 18.87 20 15C20 13.09 19.24 11.37 18 10.11ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM2 18V4H4V6H14V4H16V8.68C15.09 8.25 14.08 8 13 8H4V10H8.1C7.5 10.57 7.04 11.25 6.68 12H4V14H6.08C6.03 14.33 6 14.66 6 15C6 16.08 6.25 17.09 6.68 18H2ZM13 20C10.24 20 8 17.76 8 15C8 12.24 10.24 10 13 10C15.76 10 18 12.24 18 15C18 17.76 15.76 20 13 20ZM13.5 15.25L16.36 16.94L15.61 18.16L12 16V11H13.5V15.25Z"
        fill="black"
      />
    </Svg>
  );
}