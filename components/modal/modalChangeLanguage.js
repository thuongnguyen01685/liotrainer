import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Modal from "react-native-modal";

const { width } = Dimensions.get("window");
const ModalChangeLanguage = (props) => {
  const { showModalLanguage, setShowModalLanguage } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalLanguage}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalLanguage(!showModalLanguage);
      }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 5,
        }}>
        <View style={[styles.language, { justifyContent: "center" }]}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "LexendDeca_600SemiBold",
            }}>
            Chọn ngôn ngữ
          </Text>
        </View>
        <View style={styles.language}>
          <View style={{ width: 20 }}></View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              color: "#818181",
            }}>
            Tiếng Anh
          </Text>
          <View style={{ width: 20 }}></View>
        </View>
        <View style={styles.language}>
          <View style={{ width: 20 }}></View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_600SemiBold",
              color: "#688338",
            }}>
            Tiếng Việt
          </Text>
          <FontAwesome5 name="check" size={20} color="#688338" />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          elevation: 5,
          marginTop: 13,
          paddingVertical: 13,
          alignItems: "center",
        }}
        onPress={() => setShowModalLanguage(false)}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "LexendDeca_700Bold",
          }}>
          Hủy
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  language: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingVertical: 20,
    borderColor: "#D3D3D3",
    borderWidth: 0.5,
  },
});
export default ModalChangeLanguage;
