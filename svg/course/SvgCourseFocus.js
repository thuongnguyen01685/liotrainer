//import liraries
import React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";

export default function SvgCourseFocus() {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 22 17"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d_845_281)">
        <Path
          d="M11.5 20.1667C16.5626 20.1667 20.6667 18.1146 20.6667 15.5833C20.6667 13.052 16.5626 11 11.5 11C6.43739 11 2.33333 13.052 2.33333 15.5833C2.33333 18.1146 6.43739 20.1667 11.5 20.1667Z"
          fill="#688338"
          stroke="#688338"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.1667 16.5C15.6729 16.5 16.0833 16.0896 16.0833 15.5834C16.0833 15.0771 15.6729 14.6667 15.1667 14.6667C14.6604 14.6667 14.25 15.0771 14.25 15.5834C14.25 16.0896 14.6604 16.5 15.1667 16.5Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.45833 15.5833V6.41668ZM6.45833 6.41668V1.83334L11.5 4.12501L6.45833 6.41668Z"
          fill="#688338"
        />
        <Path
          d="M6.45833 15.5833V6.41668M6.45833 6.41668V1.83334L11.5 4.12501L6.45833 6.41668Z"
          stroke="#688338"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_845_281"
          x="-9.41667"
          y="-6.91666"
          width="41.8333"
          height="41.8333"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="3" />
          <FeGaussianBlur stdDeviation="5.5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_845_281"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_845_281"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}
