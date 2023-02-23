//import liraries
import React from "react";
import Svg, { Rect } from "react-native-svg";

export default function SvgLine() {
  return (
    <Svg
      width={2}
      height={20}
      viewBox="0 0 2 20"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginVertical: 3 }}>
      <Rect width="2" height="20" rx="1" fill="#688338" fillOpacity="0.8" />
    </Svg>
  );
}
