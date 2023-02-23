//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Heart(props) {
  const { fill } = props;
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M7.82076 14.6403C6.1928 13.6384 4.67833 12.4592 3.30447 11.1239C2.33858 10.1622 1.60325 8.98983 1.15482 7.69654C0.347858 5.18773 1.29045 2.31562 3.92834 1.46564C5.31471 1.01933 6.82884 1.27441 7.99707 2.15111C9.16575 1.27548 10.6793 1.02048 12.0658 1.46564C14.7037 2.31562 15.6531 5.18773 14.8461 7.69654C14.3977 8.98983 13.6623 10.1622 12.6965 11.1239C11.3226 12.4592 9.80812 13.6384 8.18016 14.6403L8.00385 14.75L7.82076 14.6403Z"
        }
        fillRule="evenodd"
        clipRule="evenodd"
        stroke="#C5C5C5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={"M10.8047 4.28976C11.6037 4.54499 12.1714 5.26229 12.2423 6.10625"}
        stroke="#C5C5C5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
