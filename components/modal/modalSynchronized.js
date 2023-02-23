import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
const ModalSynchronized = (props) => {
  const navi = useNavigation();
  const { showModalSync, setShowModalSync } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalSync}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalSync(!showModalSync);
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
          paddingVertical: 20,
          paddingHorizontal: 22,
        }}>
        <TouchableOpacity>
          <Ionicons
            name="sync-outline"
            size={20}
            color="rgba(77, 102, 190, 1)"
          />
        </TouchableOpacity>
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
              marginVertical: 10,
            }}>
            Đồng bộ lịch tập
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
            }}>
            Đồng bộ lịch tập đến lịch của thiết bị đang sử dụng để bạn không bị
            bỏ lỡ các buổi tập
          </Text>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgba(238, 243, 229, 1)",
              paddingVertical: 15,
              borderRadius: 30,
              width: width * 0.6,
            }}
            onPress={() => {
              props.setShowModalSync(!showModalSync);
            }}>
            <Text
              style={{
                color: "rgba(104, 131, 56, 1)",
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Để lúc khác
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgba(104, 131, 56, 1)",
              paddingVertical: 15,
              borderRadius: 30,
              width: width * 0.6,
              marginTop: 15,
            }}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Đồng bộ ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSynchronized;
