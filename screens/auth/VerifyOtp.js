//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  changePassFosAction,
  getOTPAction,
  getTokenFosAction,
  SignUpAction,
  SignUpOdooAction,
} from "../../store/actions/user.actions";
import { useNavigation } from "@react-navigation/native";
import ModalALert from "../../components/modal/modalAlert";

// create a component
const CELL_COUNT = 6;
const VerifyOtp = ({ route }) => {
  const { user } = useSelector((state) => state);
  const [value, setValue] = useState("");

  const [title, setTitle] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);

  const [showLoading, setShowLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  const dispatch = useDispatch();
  const navi = useNavigation();

  const checkOtp = async () => {
    setShowLoading(true);

    if (route.params.data) {
      if (moment().isBefore(moment(user.dataOtp.expire_time))) {
        if (value === user.dataOtp.otp) {
          const res = await dispatch(SignUpOdooAction(route.params.data));
          if (res?.result?.status === 200) {
            setTitle(res.result.message);
            setShowModalAlert(true);
            navi.navigate("login");
          } else {
            setTitle(res.result.message);
            setShowModalAlert(true);
          }
        } else {
          setTitle("Mã Otp không đúng.\n Vui lòng nhập lại...");
          setShowModalAlert(true);
        }
      } else {
        setTitle("Mã Otp đã hết hạn.");
        setShowModalAlert(true);
      }
    }

    if (route.params.dataOtp) {
      if (moment().isBefore(moment(user.dataOtp.expire_time))) {
        if (value === user.dataOtp.otp) {
          const token = await dispatch(
            getTokenFosAction(user.dataOtp._id, user.dataOtp.otp)
          );

          if (token) {
            navi.navigate("forgotPass", { token: token.token });
          }
        } else {
          setTitle("Mã Otp không đúng.\n Vui lòng nhập lại...");
          setShowModalAlert(true);
        }
      } else {
        setTitle("Mã Otp đã hết hạn.");
        setShowModalAlert(true);
      }
    }
    setShowLoading(false);
  };

  const reSendOtp = async () => {
    setShowLoading(true);
    setMinutes(5);
    setSeconds(0);
    if (route.params.data) {
      const res = await dispatch(getOTPAction(route.params.data.phone));
      if (res) {
        setTitle("Đã gửi lại mã OTP.\n Vui lòng kiểm tra SMS.");
        setShowModalAlert(true);
      }
    } else {
      const res = await dispatch(getOTPAction(route.params.dataOtp));
      if (res) {
        setTitle("Đã gửi lại mã OTP.\n Vui lòng kiểm tra SMS.");
        setShowModalAlert(true);
      }
    }
    setShowLoading(false);
  };

  return (
    <View style={styles.container}>
      {showLoading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#000",
            opacity: 0.5,
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 20,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : null}

      {showModalAlert && (
        <ModalALert
          showModalAlert={showModalAlert}
          setShowModalAlert={setShowModalAlert}
          title={title}
        />
      )}
      <View
        style={{
          marginTop: 80,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
        }}>
        <Image
          source={require("../../assets/splash.png")}
          style={{ width: 270, height: 220, resizeMode: "contain" }}
        />
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <Text
          style={{
            fontFamily: "LexendDeca_500Medium",
            fontSize: 25,
            textAlign: "center",
            marginBottom: 30,
            color: "#688338",
          }}>
          Xác nhận OTP
        </Text>
        <View style={{ marginTop: 10, paddingHorizontal: 45 }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
            }}>
            Xin chào,
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                textAlign: "center",
              }}>
              {" "}
              {route.params.data
                ? route.params.data.phone
                : route.params.dataOtp}
            </Text>
          </Text>
          <Text style={[styles.contentText, { marginTop: 10 }]}>
            Vui lòng nhập mã OTP để xác nhận đăng kí.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <View>
          <Text style={styles.textTime}>
            Hiệu lực còn {minutes}:{seconds}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            paddingHorizontal: 45,
            justifyContent: "center",
            marginVertical: 35,
            top: 10,
          }}>
          <Text style={{ fontSize: 14, fontFamily: "LexendDeca_400Regular" }}>
            Bạn chưa nhận được mã OTP?
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              borderBottomColor: "#688338",
              borderBottomWidth: 0.7,
            }}
            onPress={reSendOtp}>
            <Text
              style={{
                color: "#688338",
                fontSize: 14,
                fontFamily: "LexendDeca_400Regular",
              }}>
              Gửi lại OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#688338" }]}
        onPress={checkOtp}>
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "LexendDeca_400Regular",
          }}>
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textTime: {
    color: "#B6B6B6",
    fontSize: 14,
    fontFamily: "LexendDeca_400Regular",
    textAlign: "center",
    marginTop: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 17,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  //input
  codeFiledRoot: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  cellText: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "LexendDeca_400Regular",
    opacity: 0.8,
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});

//make this component available to the app
export default VerifyOtp;
