import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
const ModalAlowCalendar = (props) => {
  const navi = useNavigation();
  const { showModalAlowCalendar, setShowModalAlowCalendar } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalAlowCalendar}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalAlowCalendar(!showModalAlowCalendar);
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
        }}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color="rgba(235, 0, 56, 1)"
        />

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
            Cho phép truy cập vào lịch {`\n`} của bạn?
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0.7,
            borderColor: "rgba(171, 171, 171, 1)",
            marginVertical: 10,
            width: "100%",
          }}></View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 5,
              paddingHorizontal: width * 0.15,
            }}>
            <Text
              style={{
                color: "rgba(235, 0, 56, 1)",

                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Cho phép
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 10,
              paddingHorizontal: width * 0.15,
              marginTop: 5,
            }}
            onPress={() => {
              props.setShowModalAlowCalendar(!showModalAlowCalendar);
            }}>
            <Text
              style={{
                color: "rgba(255, 135, 164, 1)",
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Không cho phép
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlowCalendar;
