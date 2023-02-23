//import liraries
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ScheduleSvg() {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.25 12.8333V5.49998C18.25 5.01375 18.0568 4.54743 17.713 4.20362C17.3692 3.8598 16.9029 3.66665 16.4167 3.66665H3.58333C3.0971 3.66665 2.63079 3.8598 2.28697 4.20362C1.94315 4.54743 1.75 5.01375 1.75 5.49998V18.3333C1.75 18.8195 1.94315 19.2859 2.28697 19.6297C2.63079 19.9735 3.0971 20.1666 3.58333 20.1666H10.9167M13.6667 1.83331V5.49998M6.33333 1.83331V5.49998M1.75 9.16665H18.25M13.6667 18.3333L15.5 20.1666L19.1667 16.5"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
