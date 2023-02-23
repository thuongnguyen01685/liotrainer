//import liraries
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgBooking(props) {
  const { focused } = props;
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={"M12 8.32731V15.6537"}
        stroke={focused}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={"M15.6667 11.9905H8.33333"}
        stroke={focused}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={
          "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
        }
        stroke={focused}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
}
