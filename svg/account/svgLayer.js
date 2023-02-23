//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function SvgLayer() {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M19.6934 6.53126L11.4233 1.94793C11.2874 1.87306 11.1348 1.8338 10.9796 1.8338C10.8245 1.8338 10.6718 1.87306 10.5359 1.94793L2.30611 6.4946C2.16314 6.57376 2.04393 6.68971 1.96084 6.83043C1.87774 6.97115 1.83378 7.13153 1.8335 7.29496C1.83322 7.45838 1.87663 7.61891 1.95924 7.75991C2.04186 7.90092 2.16066 8.01727 2.30336 8.09693L10.5735 12.7169C10.7097 12.7934 10.8632 12.8337 11.0194 12.8338C11.1755 12.834 11.3291 12.7941 11.4654 12.7178L19.6953 8.13451C19.8382 8.05501 19.9573 7.93869 20.0402 7.79764C20.123 7.65659 20.1666 7.49593 20.1664 7.33235C20.1662 7.16877 20.1223 7.00821 20.0391 6.86735C19.9559 6.72648 19.8366 6.61044 19.6934 6.53126Z"
        }
        fill="url(#paint0_linear_193_433)"
      />
      <Path
        d="M11.0002 14.5347L3.19477 10.1988L2.30469 11.8012L10.5547 16.3845C10.6908 16.4601 10.844 16.4998 10.9997 16.4998C11.1555 16.4998 11.3086 16.4601 11.4448 16.3845L19.6948 11.8012L18.8047 10.1988L11.0002 14.5347Z"
        fill="url(#paint1_linear_193_433)"
      />
      <Path
        d="M11.0002 18.2013L3.19477 13.8655L2.30469 15.4678L10.5547 20.0512C10.6908 20.1268 10.844 20.1665 10.9997 20.1665C11.1555 20.1665 11.3086 20.1268 11.4448 20.0512L19.6948 15.4678L18.8047 13.8655L11.0002 18.2013Z"
        fill="url(#paint2_linear_193_433)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_193_433"
          x1="2"
          y1="12.8338"
          x2="21"
          y2="12.8338"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#0081D4"} />
          <Stop offset={"1"} stopColor={"#00E1B9"} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_193_433"
          x1="2"
          y1="16.4998"
          x2="20"
          y2="16.4998"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#0081D4"} />
          <Stop offset={"1"} stopColor={"#00E1B9"} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_193_433"
          x1="2"
          y1="20.1665"
          x2="20"
          y2="20.1665"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#0081D4"} />
          <Stop offset={"1"} stopColor={"#00E1B9"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
