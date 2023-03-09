import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");
const ModalFailCheck = (props) => {
  const navi = useNavigation();
  const { t, i18n } = useTranslation();
  const {
    showModalFail,
    setShowModalFail,
    titleName,
    ContentBody,
    setScanned,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalFail}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      //   onBackdropPress={() => {
      //     setShowModalSuccess(!showModalSuccess);
      //   }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 5,
          height: "auto",
          bottom: 20,
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 14,
          paddingHorizontal: 22,
        }}>
        <View
          style={{
            flexDirection: "column",
            marginBottom: 15,
            width: width * 0.8,
          }}>
          <View style={{ alignSelf: "center" }}>
            <Ionicons name="close" color="#BE0000" size={40} />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "LexendDeca_600SemiBold",
              textAlign: "center",
              color: "#000",
              marginBottom: 13,
            }}>
            {titleName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            {ContentBody}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#BE0000", marginLeft: 10 },
            ]}
            onPress={() => {
              setScanned(false);
              setShowModalFail(false);
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
                color: "#fff",
              }}>
              {t("Thử lại")}
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

export default ModalFailCheck;
