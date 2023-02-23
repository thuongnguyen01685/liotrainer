//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function SvgContactInfo() {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 20 20"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          "M0.833496 9.99936C0.833496 4.94028 4.94016 0.832695 10.0002 0.832695C15.0693 0.832695 19.1668 4.94028 19.1668 9.99936C19.1668 15.0603 15.0693 19.166 10.0002 19.166C4.94016 19.166 0.833496 15.0603 0.833496 9.99936ZM9.1935 6.5252C9.1935 6.08611 9.56016 5.71853 10.0002 5.71853C10.4402 5.71853 10.7977 6.08611 10.7977 6.5252V10.5769C10.7977 11.0178 10.4402 11.3744 10.0002 11.3744C9.56016 11.3744 9.1935 11.0178 9.1935 10.5769V6.5252ZM10.0093 14.2903C9.56016 14.2903 9.20266 13.9236 9.20266 13.4836C9.20266 13.0436 9.56016 12.6861 10.0002 12.6861C10.4493 12.6861 10.8068 13.0436 10.8068 13.4836C10.8068 13.9236 10.4493 14.2903 10.0093 14.2903Z"
        }
        fill="url(#paint0_linear_193_447)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_193_447"
          x1="1"
          y1="19.166"
          x2="20.0004"
          y2="19.166"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#688338"} />
          <Stop offset={"1"} stopColor={"#92A375"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
