//import liraries
import React from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from "react-native-svg";

export default function Paper() {
  return (
    <Svg
      width={22}
      height={26}
      viewBox="0 0 22 26"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={
          "M7.15718 18.4875H13.8899C14.3973 18.4875 14.8181 18.0625 14.8181 17.55C14.8181 17.0375 14.3973 16.625 13.8899 16.625H7.15718C6.64975 16.625 6.22896 17.0375 6.22896 17.55C6.22896 18.0625 6.64975 18.4875 7.15718 18.4875ZM11.3403 10.375H7.15718C6.64975 10.375 6.22896 10.8 6.22896 11.3125C6.22896 11.825 6.64975 12.2375 7.15718 12.2375H11.3403C11.8478 12.2375 12.2686 11.825 12.2686 11.3125C12.2686 10.8 11.8478 10.375 11.3403 10.375ZM20.1726 9.28201C20.4635 9.27866 20.7803 9.275 21.0681 9.275C21.3775 9.275 21.625 9.525 21.625 9.8375V19.8875C21.625 22.9875 19.1374 25.5 16.0681 25.5H6.21658C2.99876 25.5 0.375 22.8625 0.375 19.6125V6.1375C0.375 3.0375 2.875 0.5 5.95668 0.5H12.5656C12.8874 0.5 13.1349 0.7625 13.1349 1.075V5.1C13.1349 7.3875 15.0037 9.2625 17.2686 9.275C17.7976 9.275 18.264 9.27895 18.6721 9.28241C18.9896 9.28511 19.2719 9.2875 19.521 9.2875C19.6972 9.2875 19.9256 9.28486 20.1726 9.28201ZM20.5139 7.4575C19.4965 7.46125 18.2973 7.4575 17.4347 7.44875C16.0658 7.44875 14.9384 6.31 14.9384 4.9275V1.6325C14.9384 1.09375 15.5856 0.82625 15.9557 1.215C16.6258 1.91869 17.5467 2.88607 18.4633 3.84893C19.3768 4.80855 20.286 5.76366 20.9384 6.44875C21.2998 6.8275 21.0349 7.45625 20.5139 7.4575Z"
        }
        fill="url(#paint0_linear_857_1386)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_857_1386"
          x1="22.475"
          y1="13.1"
          x2="-41.53"
          y2="13.1"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={"#047840"} />
          <Stop offset={"0.71875"} stopColor={"#37DF8E"} />
          <Stop offset={"1"} stopColor={"white"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}