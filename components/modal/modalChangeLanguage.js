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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import "../../lang/i18n";
import { changeLanguageAction } from "../../store/actions/system.action";

const { width } = Dimensions.get("window");
const ModalChangeLanguage = (props) => {
  const { showModalLanguage, setShowModalLanguage } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { system } = useSelector((state) => state);

  const changeLanguage = async (value) => {
    if (value === "vi") {
      dispatch(changeLanguageAction("vi"));
    } else {
      dispatch(changeLanguageAction("en"));
    }
    const res = await AsyncStorage.setItem("lang", value);
    i18n
      .changeLanguage(value)
      .then(() => dispatch(changeLanguageAction(value)))
      .catch((err) => console.log(err));
  };

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
            {t("Chọn ngôn ngữ")}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => changeLanguage("en")}>
          <View style={{ width: 20 }}></View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_600SemiBold",
              color: "#688338",
            }}>
            {t("Tiếng Anh")}
          </Text>
          {system.lang === "en" && (
            <View
              style={{
                right: 20,
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top: 20,
              }}>
              <FontAwesome5 name="check" size={20} color="#688338" />
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => changeLanguage("vi")}>
          <View style={{ width: 20 }}></View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "LexendDeca_600SemiBold",
              color: "#688338",
            }}>
            {t("Tiếng Việt")}
          </Text>
          {system.lang === "vi" && (
            <View
              style={{
                right: 20,
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top: 20,
              }}>
              <FontAwesome5 name="check" size={20} color="#688338" />
            </View>
          )}
        </TouchableOpacity>
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
          {t("Hủy")}
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  language: {
    flexDirection: "row",
    width: "100%",
    //paddingHorizontal: 22,
    paddingVertical: 20,
    borderColor: "#D3D3D3",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnChoose: {
    paddingVertical: 20,
    alignSelf: "center",
    paddingHorizontal: 80,
  },
});
export default ModalChangeLanguage;
