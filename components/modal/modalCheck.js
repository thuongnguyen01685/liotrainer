import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import Modal from "react-native-modal";

const { width } = Dimensions.get("window");
const ModalCheck = (props) => {
  const navi = useNavigation();
  const { showModalCheck, setShowModalCheck, infoModal, data, dataOtp } = props;

  const handleNext = () => {
    setShowModalCheck(false);
    if (data) {
      navi.navigate("verifyOtp", { data: data });
    }
    if (dataOtp) {
      navi.navigate("verifyOtp", { dataOtp: dataOtp });
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalCheck}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalCheck(!showModalCheck);
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
            {infoModal?.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            {infoModal?.content}
          </Text>
        </View>

        {infoModal?.button ? (
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
                {infoModal?.button}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </Modal>
  );
};

export default ModalCheck;
