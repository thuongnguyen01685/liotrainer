//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Profile() {
  return (
    <Svg
      width={20}
      height={26}
      viewBox="0 0 20 26"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M16.6175 7.11382C16.6175 10.7851 13.6739 13.7289 10 13.7289C6.32737 13.7289 3.38252 10.7851 3.38252 7.11382C3.38252 3.44253 6.32737 0.5 10 0.5C13.6739 0.5 16.6175 3.44253 16.6175 7.11382ZM10 25.5C4.57797 25.5 0 24.6187 0 21.2187C0 17.8174 4.60673 16.9674 10 16.9674C15.4233 16.9674 20 17.8487 20 21.2487C20 24.65 15.3933 25.5 10 25.5Z"
        }
        fill="url(#paint0_linear_857_1380)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_857_1380"
          x1="20.8"
          y1="13.1"
          x2="-39.44"
          y2="13.1"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#688338"} />
          <Stop offset={"0.71875"} stopColor={"#B2E061"} />
          <Stop offset={"1"} stopColor={"white"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
