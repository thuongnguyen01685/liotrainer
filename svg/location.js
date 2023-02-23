//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Location(props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 22}
      height={height ? height : 26}
      viewBox="0 0 22 26"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M0.375 10.8972C0.375 5.14736 5.17985 0.5 10.9918 0.5C16.8201 0.5 21.625 5.14736 21.625 10.8972C21.625 13.7946 20.5713 16.4845 18.8369 18.7645C16.9235 21.2794 14.5652 23.4706 11.9107 25.1905C11.3031 25.588 10.7548 25.618 10.0881 25.1905C7.41842 23.4706 5.06011 21.2794 3.16313 18.7645C1.42748 16.4845 0.375 13.7946 0.375 10.8972ZM7.49279 11.2209C7.49279 13.1471 9.06457 14.6621 10.9918 14.6621C12.9203 14.6621 14.5072 13.1471 14.5072 11.2209C14.5072 9.30974 12.9203 7.72104 10.9918 7.72104C9.06457 7.72104 7.49279 9.30974 7.49279 11.2209Z"
        }
        fill="url(#paint0_linear_857_1309)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_857_1309"
          x1="22.475"
          y1="13.1"
          x2="-41.53"
          y2="13.1"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#E61104"} />
          <Stop offset={"0.71875"} stopColor={"#F8BCB8"} />
          <Stop offset={"1"} stopColor={"white"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
