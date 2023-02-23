import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { cancelBookingAction } from "../../store/actions/booking.actions";

const { width } = Dimensions.get("window");
const ModalCancelEpisode = (props) => {
  const dispatch = useDispatch();
  const navi = useNavigation();
  const { showModalCancel, setShowModalCancel, id, checkInOrOut } = props;
  const cancelBooking = async () => {
    await dispatch(cancelBookingAction(id));
    await setShowModalCancel(false);
    if (checkInOrOut) {
      checkInOrOut();
    }
    navi.navigate("TabBar");
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalCancel}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {
        setShowModalCancel(!showModalCancel);
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
            Huỷ buổi tập
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            Bạn muốn huỷ buổi tập này?
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#EEF3E5", marginRight: 10 },
            ]}
            onPress={() => cancelBooking()}>
            <Text
              style={{
                color: "#688338",
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
              }}>
              Hủy ngay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowModalCancel(false)}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
              }}>
              Từ chối hủy
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
    backgroundColor: "rgba(104, 131, 56, 1)",
    paddingVertical: 12,
    borderRadius: 30,
    paddingHorizontal: 26,
    marginTop: 8,
  },
});

export default ModalCancelEpisode;
