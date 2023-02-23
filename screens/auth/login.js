import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  getInfoUserAction,
  loginUserAction,
} from "../../store/actions/user.actions";
import ModalCheck from "../../components/modal/modalCheck";
import ModalInputPhone from "../../components/modal/modalInputPhone";
import ModalALert from "../../components/modal/modalAlert";

export default function Login() {
  const navi = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [showModalCheck, setShowModalCheck] = useState(false);
  const [showModalCheckOtp, setShowModalCheckOtp] = useState(false);
  const [showModalInputPhone, setShowModalInputPhone] = useState(false);
  const [numberPhone, setNumberPhone] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [button, setButton] = useState();
  const [showPass, setShowPass] = useState(false);

  const [alert, setAlert] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);
  const OtpModal = {
    title: "OTP",
    content: "Mã OTP đã được gửi về SMS của bạn.\n Vui lòng kiểm tra",
    button: "Tiếp tục",
  };

  const login = async () => {
    await setShowLoading(true);
    const res = await dispatch(loginUserAction({ username, password }));
    if (res?.id) {
      await AsyncStorage.setItem("token", JSON.stringify(res));
      await dispatch(getInfoUserAction(res.trainee_id));
      await setShowLoading(false);
      navi.navigate("TabBar");
    } else {
      await setTitle("Đăng nhập thất bại");
      await setContent(res?.message);
      await setButton("Thử lại");
      await setShowLoading(false);
      await setShowModalCheck(true);
    }
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
      <ModalCheck
        showModalCheck={showModalCheck}
        setShowModalCheck={setShowModalCheck}
        infoModal={{ title, content, button }}
      />
      {showModalInputPhone && (
        <ModalInputPhone
          showModalInputPhone={showModalInputPhone}
          setShowModalInputPhone={setShowModalInputPhone}
          setShowModalCheck={setShowModalCheckOtp}
          numberPhone={numberPhone}
          setNumberPhone={setNumberPhone}
          alert={alert}
          setAlert={setAlert}
          setShowModalAlert={setShowModalAlert}
        />
      )}
      {showModalAlert && (
        <ModalALert
          showModalAlert={showModalAlert}
          setShowModalAlert={setShowModalAlert}
          alert={alert}
        />
      )}
      {showModalCheckOtp && (
        <ModalCheck
          showModalCheck={showModalCheckOtp}
          setShowModalCheck={setShowModalCheckOtp}
          infoModal={OtpModal}
          dataOtp={numberPhone}
        />
      )}
      <Image
        source={require("../../assets/splash.png")}
        style={{
          width: 270,
          height: 220,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 60,
        }}
      />
      <View style={{ backgroundColor: "#fff" }}>
        <Text
          style={{
            fontFamily: "LexendDeca_500Medium",
            fontSize: 25,
            lineHeight: 31,
            textAlign: "center",
            marginVertical: 32,
            color: "#688338",
          }}
        >
          Đăng nhập
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            maxLength={52}
            placeholder="Số điện thoại hoặc email"
            placeholderTextColor="#CDCDCD"
            style={styles.input}
            onChangeText={(e) => setUsername(e)}
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
            onChangeText={(e) => setPassword(e)}
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
          style={{
            marginHorizontal: 20,
            marginTop: 5,
            marginBottom: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "LexendDeca_400Regular",
              fontSize: 14,
              lineHeight: 18,
              color: "#000",
            }}
          >
            Bạn chưa có tài khoản?
            <Text
              style={{
                fontFamily: "LexendDeca_400Regular",
                fontSize: 14,
                lineHeight: 18,
                color: "#688338",
                borderBottomColor: "#688338",
                borderBottomWidth: 0.5,
              }}
              onPress={() => navi.navigate("register")}
            >
              Đăng kí
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "LexendDeca_400Regular",
              fontSize: 14,
              lineHeight: 18,
              color: "#688338",
            }}
            onPress={() => setShowModalInputPhone(true)}
          >
            Quên mật khẩu?
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#688338" }]}
        onPress={() => login()}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "LexendDeca_400Regular",
          }}
        >
          Đăng nhập
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
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 17,
    marginHorizontal: 20,
    marginBottom: 100,
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
