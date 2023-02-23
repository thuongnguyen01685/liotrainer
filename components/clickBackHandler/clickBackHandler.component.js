import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import Toast from "react-native-root-toast";

export default function ClickBackHandler() {
  let backHandlerClickCount = 0;
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  });

  const backButtonHandler = () => {
    backHandlerClickCount += 1;
    if (backHandlerClickCount < 2) {
      Toast.show("Nhấn lần nữa sẽ thoát ứng dụng!", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });
    } else {
      BackHandler.exitApp();
    }
    setTimeout(() => {
      backHandlerClickCount = 0;
    }, 1000);
    return true;
  };
  return;
}
