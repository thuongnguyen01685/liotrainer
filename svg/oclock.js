//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Oclock(props) {
  const { color, color1 } = props;
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M13 25.5001C6.1 25.5001 0.5 19.9126 0.5 13.0001C0.5 6.10012 6.1 0.500122 13 0.500122C19.9125 0.500122 25.5 6.10012 25.5 13.0001C25.5 19.9126 19.9125 25.5001 13 25.5001ZM16.9875 17.6376C17.1375 17.7251 17.3 17.7751 17.475 17.7751C17.7875 17.7751 18.1 17.6126 18.275 17.3126C18.5375 16.8751 18.4 16.3001 17.95 16.0251L13.5 13.3751V7.60012C13.5 7.07512 13.075 6.66262 12.5625 6.66262C12.05 6.66262 11.625 7.07512 11.625 7.60012V13.9126C11.625 14.2376 11.8 14.5376 12.0875 14.7126L16.9875 17.6376Z"
        }
        fill="url(#paint0_linear_857_238)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_857_238"
          x1="26.5"
          y1="13.1001"
          x2="-48.8"
          y2="13.1001"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color} />
          <Stop offset={"0.71875"} stopColor={color1} />
          <Stop offset={"1"} stopColor={"white"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
