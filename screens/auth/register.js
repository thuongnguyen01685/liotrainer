//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalALert from "../../components/modal/modalAlert";
import ModalCheck from "../../components/modal/modalCheck";
import { getOTPAction, SignUpAction } from "../../store/actions/user.actions";

export default function Register() {
  const navi = useNavigation();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [showModalCheck, setShowModalCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const infoModal = {
    title: "OTP",
    content: "Mã OTP đã được gửi về SMS của bạn.\n Vui lòng kiểm tra",
    button: "Tiếp tục",
  };

  const [dataInfo, setDataInfo] = useState({
    name: "",
    id_app: "60939744ac969b4078488026",
    group_id: "60939745ac969b40784883ed",
    phone: "",
    password: "",
    rePassword: "",
    address: "",
  });

  const state = (data, nameData) => {
    setDataInfo({ ...dataInfo, [`${nameData}`]: data });
  };

  const data = { ...dataInfo, email: dataInfo.phone, username: dataInfo.phone };

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }
  const check = () => {
    const text = "thanhcong";
    checkPassword(data.password);
    if (data.name === "") {
      return "Bắt buộc trường tên";
    }
    if (data.phone === "") {
      return "Bắt buộc trường phone";
    }
    if (data.password === "") {
      return "Bắt buộc trường mật khẩu";
    }
    if (data.rePassword === "") {
      return "Bắt buộc trường xác nhận mật khẩu";
    }
    if (checkPassword(data.password) === false) {
      return "Mật khẩu phải có ít nhất 6 ký tự và bao gồm ít nhất một chữ số,\n một chữ hoa và một chữ thường";
    }
    if (data.password !== data.rePassword) {
      return "Mật khẩu xác nhận không trùng khớp";
    }

    return text;
  };

  const handleCheckApiOtp = async () => {
    setShowLoading(true);
    if (check() !== "thanhcong") {
      setTitle(check());
      setShowModalAlert(true);
    } else {
      const register = await dispatch(SignUpAction(data));
      if (register.data) {
        const res = await dispatch(getOTPAction(data.phone));
        if (res) {
          setShowModalCheck(true);
        } else {
          setTitle("Chưa lấy được mã OTP");
          setShowModalAlert(true);
        }
      } else {
        setTitle(register);
        setShowModalAlert(true);
      }
    }
    setShowLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={120}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      contentContainerStyle={styles.container}
    >
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
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : null}
      {showModalCheck && (
        <ModalCheck
          showModalCheck={showModalCheck}
          setShowModalCheck={setShowModalCheck}
          infoModal={infoModal}
          data={data}
        />
      )}

      {showModalAlert && (
        <ModalALert
          showModalAlert={showModalAlert}
          setShowModalAlert={setShowModalAlert}
          title={title}
        />
      )}

      <Image
        source={require("../../assets/splash.png")}
        style={{
          width: 270,
          height: 220,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 40,
        }}
      />

      <View style={{ backgroundColor: "#fff" }}>
        <Text
          style={{
            fontFamily: "LexendDeca_500Medium",
            fontSize: 25,
            textAlign: "center",
            marginBottom: 30,
            color: "#688338",
          }}
        >
          Đăng kí
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            maxLength={52}
            placeholder="Họ & Tên"
            placeholderTextColor="#CDCDCD"
            style={styles.input}
            onChangeText={(e) => state(e, "name")}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            maxLength={52}
            placeholder="Số điện thoại"
            placeholderTextColor="#CDCDCD"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(e) => state(e, "phone")}
          />
        </View>
        <View
          style={[
            styles.viewInput,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <TextInput
            maxLength={52}
            placeholder="Mật khẩu"
            placeholderTextColor="#CDCDCD"
            secureTextEntry={!showPass}
            style={[styles.input, { width: "90%" }]}
            onChangeText={(e) => state(e, "password")}
          />
          {showPass ? (
            <TouchableOpacity onPress={() => setShowPass(false)}>
              <Feather name="eye" size={20} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowPass(true)}>
              <Feather name="eye-off" size={20} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[
            styles.viewInput,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <TextInput
            maxLength={52}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor="#CDCDCD"
            secureTextEntry={!showPass1}
            style={[styles.input, { width: "90%" }]}
            onChangeText={(e) => state(e, "rePassword")}
          />
          {showPass1 ? (
            <TouchableOpacity onPress={() => setShowPass1(false)}>
              <Feather name="eye" size={20} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowPass1(true)}>
              <Feather name="eye-off" size={20} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            marginHorizontal: 60,
            marginTop: 10,
            marginBottom: 12,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckBox
            value="first"
            checked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              fontFamily: "LexendDeca_400Regular",
              fontSize: 14,
              lineHeight: 18,
              marginRight: 20,
            }}
          >
            Đồng ý với{" "}
            <Text style={{ color: "#688338" }}>Điều khoản & Điều kiện</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#688338" }]}
        onPress={handleCheckApiOtp}
        disabled={checked ? false : true}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "LexendDeca_400Regular",
          }}
        >
          Đăng kí
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexGrow: 1,
    flexDirection: "column",
  },
  input: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 15,
    lineHeight: 19,
  },
  viewInput: {
    marginHorizontal: 20,
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 17,
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
