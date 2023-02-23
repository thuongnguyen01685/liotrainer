import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

const { width } = Dimensions.get("window");
const ModalBookingSuccess = (props) => {
  const navi = useNavigation();
  const { showModalBookingSuccess, setShowModalBookingSuccess, itemSchedule } =
    props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalBookingSuccess}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalBookingSuccess(!showModalBookingSuccess);
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
            Đặt lịch thành công
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            Vui lòng đến tập đúng như thời gian đã hẹn
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#EEF3E5" }]}
            onPress={() => setShowModalBookingSuccess(false)}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
                color: "rgba(104, 131, 56, 1)",
              }}>
              Đóng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#688338", marginLeft: 10 },
            ]}
            onPress={() => {
              setShowModalBookingSuccess(false);
              navi.navigate("DetailBooking", { itemSchedule });
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
                color: "#fff",
              }}>
              Xem chi tiết
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 34,
    marginBottom: 17,
    marginTop: 12,
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

export default ModalBookingSuccess;
