//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function SvgLocationStudio() {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 19 18"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M16.3333 2.49999H1.66667V0.666656H16.3333V2.49999ZM9.91667 11.2083C9.91667 12.2533 10.3108 13.3717 10.8333 14.4167V15.3333H1.66667V9.83332H0.75V7.99999L1.66667 3.41666H16.3333L16.975 6.62499C16.3333 6.33166 15.6733 6.16666 14.9583 6.16666C12.2083 6.16666 9.91667 8.45832 9.91667 11.2083ZM9 9.83332H3.5V13.5H9V9.83332ZM18.1667 11.2083C18.1667 13.5917 14.9583 17.1667 14.9583 17.1667C14.9583 17.1667 11.75 13.5917 11.75 11.2083C11.75 9.46666 13.2167 7.99999 14.9583 7.99999C16.7 7.99999 18.1667 9.46666 18.1667 11.2083ZM16.0583 11.3C16.0583 10.75 15.5083 10.2 14.9583 10.2C14.4083 10.2 13.8583 10.6583 13.8583 11.3C13.8583 11.85 14.3167 12.4 14.9583 12.4C15.6 12.4 16.15 11.85 16.0583 11.3Z"
        }
        fill="url(#paint0_linear_193_253)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_193_253"
          x1="0.908182"
          y1="17.1667"
          x2="18.9586"
          y2="17.1667"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#A2049A"} />
          <Stop offset={"1"} stopColor={"#D681D2"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
