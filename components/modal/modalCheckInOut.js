import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import Modal from "react-native-modal";

const { width } = Dimensions.get("window");
const ModalCheckInOut = (props) => {
  const navi = useNavigation();
  const {
    showModalCheckInOut,
    setShowModalCheckInOut,
    status,
    trainingSchedule,
    checkInOrOut,
  } = props;
  const continueInOut = () => {
    setShowModalCheckInOut(false);
    checkInOrOut();
    if (status === "checkin") {
      navi.navigate("Evaluate", { trainingSchedule });
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalCheckInOut}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}>
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
            {status === "checkin"
              ? "Check-out thành công"
              : "Check-in thành công"}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            {status === "checkin"
              ? "Bạn đã tập luyện rất chăm chỉ, hãy cố gắng hơn nữa nhé!"
              : "Tiếp tục tập luyện thật chăm chỉ nào!"}
          </Text>
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
            onPress={() => continueInOut()}>
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

export default ModalCheckInOut;
