import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";

import Modal from "react-native-modal";
import { getOTPAction } from "../../store/actions/user.actions";

const { width } = Dimensions.get("window");
const ModalInputPhone = (props) => {
  const navi = useNavigation();
  const {
    showModalInputPhone,
    setShowModalInputPhone,
    setShowModalCheck,
    numberPhone,
    setNumberPhone,
    setAlert,
    setShowModalAlert,
  } = props;

  const dispatch = useDispatch();

  const handleNext = async () => {
    const res = await dispatch(getOTPAction(numberPhone));

    if (res) {
      setShowModalInputPhone(false);
      setShowModalCheck(true);
    } else {
      setShowModalInputPhone(false);
      setAlert("Chưa lấy được mã OTP");
      setShowModalAlert(true);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalInputPhone}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalInputPhone(!showModalInputPhone);
      }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 5,
          height: "auto",
          bottom: 20,
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 34,
          paddingHorizontal: 22,
        }}>
        <View
          style={{
            flexDirection: "column",
            marginBottom: 15,
            width: width * 0.8,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "LexendDeca_600SemiBold",
              textAlign: "center",
              color: "#000",
              marginBottom: 13,
            }}>
            Quên mật khẩu.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            Nhập số điện thoại của lấy lại mật khẩu.
          </Text>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: "#F4F4F4",
              padding: 10,
              borderRadius: 12,
              marginVertical: 15,
            }}>
            <TextInput
              maxLength={52}
              placeholder="Số điện thoại"
              placeholderTextColor="#CDCDCD"
              style={{
                fontFamily: "LexendDeca_400Regular",
                fontSize: 15,
                lineHeight: 19,
              }}
              onChangeText={(e) => setNumberPhone(e)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgba(104, 131, 56, 1)",
              paddingVertical: 15,
              borderRadius: 30,
              paddingHorizontal: 37,
              marginTop: 8,
            }}
            onPress={handleNext}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInputPhone;
