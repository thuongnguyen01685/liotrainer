//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ModalALert from "../../components/modal/modalAlert";
import { changePassFosAction } from "../../store/actions/user.actions";

export default function ForgotPass({ route }) {
  const [dataInfo, setDataInfo] = useState({
    newPassword: "",
    reNewPassword: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);

  const dispatch = useDispatch();
  const navi = useNavigation();
  const state = (data, nameData) => {
    setDataInfo({ ...dataInfo, [`${nameData}`]: data });
  };

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }
  const check = () => {
    const text = "thanhcong";

    if (dataInfo.newPassword === "") {
      return "Bắt buộc trường nhập mật khẩu mới";
    }
    if (dataInfo.reNewPassword === "") {
      return "Bắt buộc trường xác nhận mật khẩu";
    }

    if (checkPassword(dataInfo.newPassword) === false) {
      return "Mật khẩu phải có ít nhất 6 ký tự và bao gồm ít nhất một chữ số,\n một chữ hoa và một chữ thường";
    }
    if (dataInfo.newPassword !== dataInfo.reNewPassword) {
      return "Mật khẩu xác nhận không trùng khớp";
    }

    return text;
  };
  const handleForgotPass = async () => {
    setShowLoading(true);
    if (check() !== "thanhcong") {
      setTitle(check());
      setShowModalAlert(true);
    } else {
      const res = await dispatch(
        changePassFosAction(route.params.token, dataInfo),
      );

      if (res.data) {
        setTitle(res.data.message);
        setShowModalAlert(true);
        navi.navigate("login");
      } else {
        setTitle("Rất tiếc,\n Vui lòng thử lại");
        setShowModalAlert(true);
      }
    }
    setShowLoading(false);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
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
          marginTop: 50,
        }}
      />
      <View style={{ backgroundColor: "#fff" }}>
        <Text
          style={{
            fontFamily: "LexendDeca_500Medium",
            fontSize: 25,
            lineHeight: 31,
            textAlign: "center",
            marginBottom: 32,
            color: "#688338",
          }}
        >
          Quên mật khẩu
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            maxLength={52}
            placeholder="Nhập mật khẩu mới"
            placeholderTextColor="#CDCDCD"
            secureTextEntry
            style={styles.input}
            onChangeText={(e) => state(e, "newPassword")}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            maxLength={52}
            placeholder="Xác nhận mật khẩu"
            placeholderTextColor="#CDCDCD"
            secureTextEntry
            style={styles.input}
            onChangeText={(e) => state(e, "reNewPassword")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#688338" }]}
        onPress={handleForgotPass}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "LexendDeca_500Medium",
          }}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
  },
});
