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
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getDetailScheduleAction } from "../../store/actions/scheduleAction";

const { width } = Dimensions.get("window");
const ModalSuccessCheck = (props) => {
  const navi = useNavigation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const {
    showModalSuccess,
    setShowModalSuccess,
    titleName,
    ContentBody,
    setScanned,
    goHome,
    textBtn,
    checkout,
    idSchedule,
  } = props;

  const handleNext = async () => {
    if (setScanned) {
      setScanned(false);
    }
    setShowModalSuccess(false);
    if (goHome) {
      navi.goBack();
    } else if (checkout) {
      await dispatch(getDetailScheduleAction(idSchedule, navi));
      navi.navigate("Assessment");
    } else {
      navi.navigate("TabBar");
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalSuccess}
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
          <Image
            source={require("../../assets/schedule/detail/bi_check.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: "LexendDeca_600SemiBold",
              textAlign: "center",
              color: "#000",
              marginBottom: 13,
            }}>
            {t(titleName)}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              marginHorizontal: 17,
            }}>
            {t(ContentBody)}
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
              { backgroundColor: "#688338", marginLeft: 10 },
            ]}
            onPress={handleNext}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "LexendDeca_400Regular",
                color: "#fff",
              }}>
              {textBtn ? t(textBtn) : t("Tiếp tục")}
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

export default ModalSuccessCheck;
