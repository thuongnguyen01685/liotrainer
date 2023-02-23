//import liraries
import React from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";

export default function SvgHand() {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill={"#EDA600"}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.37952 16.4519C7.75168 15.948 1.92151 10.2784 1.85634 10.2164C1.59885 9.95888 1.43672 9.69185 1.39222 9.44707C1.34612 9.19276 1.42401 8.97023 1.63064 8.7636C1.82296 8.57128 2.0582 8.46955 2.31093 8.46955C2.61929 8.46955 2.93559 8.61578 3.19944 8.88122L5.84273 11.4212C5.88882 11.4657 5.94922 11.488 6.00803 11.488C6.07002 11.488 6.13042 11.4641 6.17652 11.418C6.26871 11.3258 6.26871 11.1764 6.17811 11.0842L1.95807 6.7259C1.53527 6.3031 1.33659 5.65619 1.83886 5.15392C2.03118 4.96159 2.26643 4.85987 2.51915 4.85987C2.82751 4.85987 3.14381 5.0061 3.40766 5.27154L7.72466 9.48045C7.77075 9.52496 7.83115 9.5488 7.89155 9.5488C7.95195 9.5488 8.01394 9.52496 8.06004 9.47886C8.15223 9.38667 8.15382 9.23726 8.06163 9.14349L2.87678 3.8283C2.63677 3.58829 2.49213 3.3006 2.4667 3.02085C2.44286 2.73634 2.54299 2.47249 2.75757 2.25791C2.9499 2.06558 3.18514 1.96386 3.43786 1.96386C3.74622 1.96386 4.06252 2.11009 4.32638 2.37394L9.61454 7.53018C9.66063 7.57468 9.72103 7.59852 9.78143 7.59852C9.84183 7.59852 9.90382 7.57468 9.94992 7.52859C10.0421 7.4364 10.0437 7.28699 9.95151 7.19321L6.11135 3.24656C5.86975 3.00496 5.72511 2.71885 5.70127 2.43911C5.67742 2.15459 5.77756 1.89074 5.99214 1.67616C6.18446 1.48384 6.41971 1.38211 6.67243 1.38211C6.98079 1.38211 7.29709 1.52834 7.56095 1.79378C8.96921 3.17662 12.6457 6.79266 12.7696 6.92618C13.2417 7.25202 13.3371 6.75928 13.3609 6.4398C13.3879 6.06786 12.962 4.76927 13.2099 3.60101C13.6264 2.0481 14.8264 2.30241 14.8534 2.31513C15.5115 2.62349 15.3859 3.08443 15.1522 4.01109L15.1284 4.19388C14.8836 5.40506 16.5653 8.99408 16.6893 9.2627C17.3489 10.7059 18.1087 13.6321 15.5925 16.1483C12.8348 18.906 9.42062 17.493 8.37952 16.4519Z"
        fill="#EDA600"
      />
      <Path
        d="M11.9177 18C10.2265 18 8.78805 17.191 8.22061 16.6299C7.71039 16.2134 4.49012 13.1044 1.8675 10.5597C1.76101 10.4564 1.69902 10.3976 1.69266 10.3896C1.39543 10.0924 1.21105 9.78244 1.1586 9.48997C1.0982 9.15778 1.20151 8.85737 1.46219 8.5951C1.70061 8.35668 1.99307 8.23112 2.31096 8.23112C2.68449 8.23112 3.0596 8.40278 3.36796 8.71273L6.00807 11.2495L1.78644 6.89119C1.30006 6.40482 1.05528 5.59896 1.67041 4.98542C1.90883 4.747 2.20129 4.62143 2.51918 4.62143C2.89271 4.62143 3.26782 4.7931 3.57618 5.10304L7.89 9.30878L2.70674 3.99518C2.43017 3.71862 2.2601 3.38006 2.2299 3.04309C2.1997 2.68387 2.32368 2.35485 2.58912 2.08941C2.82754 1.85099 3.12 1.72542 3.4379 1.72542C3.80983 1.72542 4.18495 1.8955 4.49489 2.20544L9.78147 7.36009L5.94131 3.41344C5.66315 3.13528 5.49308 2.79672 5.46447 2.45976C5.43427 2.10213 5.55825 1.77311 5.82369 1.50767C6.06211 1.26924 6.35457 1.14368 6.67246 1.14368C7.04599 1.14368 7.4211 1.31534 7.72946 1.62529L8.87547 2.74904C10.9179 4.75177 12.625 6.42866 12.8078 6.61622C12.8968 6.68774 13.0129 6.71476 13.0621 6.69092C13.0939 6.67503 13.1289 6.60191 13.1225 6.44773C13.113 6.17752 13.0748 5.84214 13.0351 5.48769C12.9556 4.77561 12.873 4.0381 12.9763 3.55172C13.202 2.70771 13.6455 2.35008 13.9761 2.1959C14.4307 1.9861 14.8709 2.05921 14.9552 2.09895C15.7817 2.48678 15.618 3.13528 15.3923 4.03492L15.3875 4.05717L15.3621 4.24314C15.1968 5.05695 16.0456 7.30605 16.8943 9.1387L16.9071 9.16413C17.4745 10.4039 18.4965 13.5844 15.7626 16.3183C14.5054 17.5724 13.1448 18 11.9177 18ZM2.31096 8.70796C2.12341 8.70796 1.94539 8.78584 1.79915 8.93207C1.64815 9.08307 1.5957 9.2293 1.62749 9.40414C1.66246 9.59647 1.80392 9.82535 2.02486 10.0479C2.02645 10.0495 2.09003 10.1115 2.1997 10.2164C5.92224 13.8292 8.16974 15.9766 8.52896 16.2659L8.54804 16.2834C9.42542 17.1607 12.6854 18.7184 15.4241 15.9798C17.9466 13.4573 16.9977 10.512 16.4715 9.36123L16.4604 9.33739C15.9136 8.158 14.6707 5.29696 14.8916 4.15572L14.9282 3.9173C15.1729 2.94454 15.1872 2.74109 14.7724 2.54082C14.65 2.51857 13.7726 2.41207 13.4372 3.66298C13.353 4.06194 13.4341 4.79151 13.5056 5.43524C13.5469 5.79923 13.5851 6.14414 13.5946 6.43184C13.6105 6.88484 13.3959 7.05809 13.2656 7.12167C13.0001 7.25041 12.6838 7.14074 12.4867 6.97544L12.4661 6.95636C12.3691 6.85146 10.0628 4.58964 8.53691 3.09236L7.38932 1.96543C6.99831 1.57283 6.49444 1.50767 6.15589 1.84622C5.99058 2.01153 5.91588 2.20544 5.93336 2.42002C5.95244 2.64413 6.07324 2.87779 6.2751 3.07965L10.1232 7.0263C10.3044 7.21068 10.3044 7.51268 10.12 7.69705C9.94359 7.87349 9.63205 7.87666 9.45086 7.70182L4.15951 2.544C3.76851 2.15299 3.26305 2.08782 2.92609 2.42638C2.76078 2.59168 2.68608 2.7856 2.70356 3.00018C2.72422 3.22429 2.84502 3.45953 3.0453 3.65822L8.23173 8.97658C8.41452 9.16096 8.41293 9.46295 8.22855 9.64733C8.05212 9.82376 7.74059 9.82694 7.55939 9.6521L3.2408 5.4416C2.84979 5.04741 2.34434 4.98383 2.00737 5.32239C1.5957 5.73406 1.81505 6.24428 2.12658 6.55741L6.3498 10.9189C6.531 11.1033 6.52941 11.4037 6.34503 11.5865C6.16701 11.7645 5.85866 11.7661 5.67746 11.5928L3.03417 9.05287C2.81165 8.82876 2.55574 8.70796 2.31096 8.70796Z"
        fill="#EDA600"
      />
      <Path
        d="M12.3898 6.772C11.5171 8.5538 11.63 11.0477 12.9397 13.0488C13.0875 13.319 13.3403 13.1871 13.2115 12.9089C11.63 9.52496 13.2878 7.08672 13.2878 7.08672L12.3898 6.772Z"
        fill="#EDA600"
      />
      <Path
        d="M8.95807 0.0898676C9.43809 -0.0357004 9.9499 -0.0245741 10.4474 0.0914571C10.9417 0.210667 11.4361 0.461803 11.8032 0.871886C12.1624 1.27879 12.3834 1.77311 12.4581 2.29128C12.528 2.80468 12.4628 3.33397 12.2197 3.77267C12.191 3.27993 12.1052 2.82693 11.9606 2.4089C11.8859 2.20068 11.7984 2.002 11.692 1.81444C11.5871 1.62847 11.4631 1.44409 11.3311 1.2931C11.0625 0.983149 10.6985 0.74155 10.29 0.553992C9.87996 0.360077 9.43332 0.217025 8.95807 0.0898676Z"
        fill="#B0BEC5"
      />
      <Path
        d="M9.09003 1.59669C9.35547 1.42821 9.68767 1.39324 10.0008 1.44887C10.3171 1.50451 10.6191 1.66186 10.8575 1.87962C11.0943 2.10056 11.2628 2.37871 11.3677 2.668C11.4186 2.81264 11.444 2.96523 11.4679 3.11305C11.4758 3.26564 11.4758 3.41823 11.452 3.57081C11.3423 3.45478 11.2565 3.33875 11.1754 3.2259C11.0816 3.11941 11.0085 3.00655 10.9243 2.90324C10.759 2.6982 10.5984 2.51223 10.4252 2.34692C10.2472 2.18639 10.0596 2.04492 9.84185 1.92254C9.62568 1.79697 9.38249 1.69206 9.09003 1.59669Z"
        fill="#90A4AE"
      />
      <Path
        d="M0.00303795 11.6676C0.227153 12.1063 0.460805 12.5132 0.732604 12.8724C1.00281 13.2316 1.31276 13.5368 1.67357 13.7355C1.84841 13.8324 2.05663 13.9167 2.26008 13.9802C2.46512 14.0454 2.67811 14.0899 2.89746 14.1201C3.33615 14.1742 3.7971 14.1646 4.28507 14.0899C3.90677 14.4189 3.40132 14.5938 2.88633 14.6319C2.36499 14.6669 1.8357 14.554 1.36203 14.287C0.885193 14.0152 0.53551 13.5829 0.316163 13.1235C0.0968166 12.661 -0.0208041 12.1635 0.00303795 11.6676Z"
        fill="#B0BEC5"
      />
      <Path
        d="M1.5051 11.4816C1.65928 11.7486 1.81187 11.9632 1.97876 12.1508C2.14407 12.3383 2.32209 12.4925 2.516 12.6324C2.7131 12.7675 2.92926 12.8867 3.16451 13.0059C3.28213 13.0663 3.40769 13.114 3.53167 13.1839C3.66042 13.2395 3.79076 13.2984 3.92745 13.3826C3.78281 13.4366 3.63499 13.4684 3.48399 13.4923C3.33458 13.4986 3.1804 13.5066 3.02781 13.4859C2.72263 13.4446 2.41746 13.3381 2.15043 13.1521C1.88816 12.963 1.67041 12.7007 1.5512 12.4035C1.4304 12.1078 1.39543 11.7772 1.5051 11.4816Z"
        fill="#90A4AE"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_738_1868"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.91842 5.41457) rotate(-45) scale(14.4654)">
          <Stop offset="0.3533" stop-color="#FFCA28" />
          <Stop offset="0.8723" stop-color="#FFB300" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}
