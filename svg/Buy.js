//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Buy(props) {
  const { size, color } = props;
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 16 16"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M9.59097 7.42484H11.6669C11.9816 7.42484 12.2289 7.16461 12.2289 6.8508C12.2289 6.52934 11.9816 6.27677 11.6669 6.27677H9.59097C9.27622 6.27677 9.02891 6.52934 9.02891 6.8508C9.02891 7.16461 9.27622 7.42484 9.59097 7.42484ZM14.1324 3.44562C14.5896 3.44562 14.8893 3.60635 15.1891 3.95843C15.4889 4.3105 15.5413 4.81565 15.4739 5.27412L14.7619 10.295C14.627 11.2602 13.8177 11.9712 12.8659 11.9712H4.68979C3.69307 11.9712 2.86871 11.1913 2.78627 10.181L2.09681 1.83755L0.965194 1.63855C0.665428 1.58498 0.455591 1.28648 0.50805 0.980325C0.560509 0.667284 0.852782 0.459865 1.16004 0.506554L2.9474 0.781326C3.2022 0.828014 3.38955 1.04156 3.41204 1.30179L3.55443 3.01624C3.57691 3.26193 3.77176 3.44562 4.01157 3.44562H14.1324ZM4.56973 13.1809C3.94023 13.1809 3.43062 13.7014 3.43062 14.3443C3.43062 14.9795 3.94023 15.5 4.56973 15.5C5.19175 15.5 5.70135 14.9795 5.70135 14.3443C5.70135 13.7014 5.19175 13.1809 4.56973 13.1809ZM13.0007 13.1809C12.3712 13.1809 11.8616 13.7014 11.8616 14.3443C11.8616 14.9795 12.3712 15.5 13.0007 15.5C13.6227 15.5 14.1323 14.9795 14.1323 14.3443C14.1323 13.7014 13.6227 13.1809 13.0007 13.1809Z"
        }
        fill="url(#paint0_linear_984_795)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_984_795"
          x1="16.1"
          y1="8.06"
          x2="-29.08"
          y2="8.06"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color || "#04E60D"} />
          <Stop offset={"0.71875"} stopColor={color || "#6CCB70"} />
          <Stop offset={"1"} stopColor={"white"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}