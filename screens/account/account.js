//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { workoutRecords, generalInformation } from "./listOption";
import ModalChangeLanguage from "../../components/modal/modalChangeLanguage";
import { logoutUser } from "../../store/reducers/user.reducers";
import { setTabbar } from "../../store/reducers/tabbar.reducers";
import { useTranslation } from "react-i18next";
import "../../lang/i18n";

const h = Dimensions.get("window").height;
export default function Account() {
  //redux
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.user);
  const { system } = useSelector((state) => state);

  const navi = useNavigation();
  //state
  const [showModalLanguage, setShowModalLanguage] = useState(false);
  const { t, i18n } = useTranslation();

  useFocusEffect(() => {
    const fetchData = () => {
      dispatch(setTabbar(4.2));
    };
    fetchData();
  });

  const clickTab = async (itemOption) => {
    if (itemOption.content) {
      await setShowModalLanguage(true);
    }
    if (itemOption.title === "Đăng xuất") {
      await AsyncStorage.removeItem("token");
      await dispatch(logoutUser(""));
    }
    if (itemOption.link) {
      navi.navigate(itemOption.link);
    }
  };
  return (
    <View style={styles.container}>
      <ModalChangeLanguage
        showModalLanguage={showModalLanguage}
        setShowModalLanguage={setShowModalLanguage}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 12,
            paddingTop: 25,
          }}>
          <View>
            <Image
              source={{ uri: infoUser.thumbnail }}
              resizeMode="contain"
              style={{
                width: 86,
                height: 86,
                backgroundColor: "#000",
                borderRadius: 400,
                borderColor: "#fff",
                borderWidth: 2,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "rgba(150, 150, 150, 0.7)",
                paddingHorizontal: 4,
                paddingVertical: 3,
                borderRadius: 400,
              }}>
              <Ionicons name="md-camera-outline" size={20} color="#fff" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 37,
          }}>
          <Text style={{ fontSize: 20, fontFamily: "LexendDeca_600SemiBold" }}>
            {infoUser?.fullname}
          </Text>
        </View>
        <Text style={styles.title}>{t("Hồ sơ tập luyện")}</Text>
        {workoutRecords.map((itemOption, index) => (
          <TouchableOpacity
            key={index}
            style={styles.viewLocation}
            onPress={() => clickTab(itemOption)}>
            <View style={styles.row}>
              {itemOption.icon}
              <Text style={styles.titleLocation}>{t(itemOption.title)}</Text>
            </View>
            <AntDesign name="right" size={20} color="rgba(104, 131, 56, 1)" />
          </TouchableOpacity>
        ))}
        <Text style={[styles.title, { marginTop: 25 }]}>
          {t("Thông tin chung")}
        </Text>
        {generalInformation.map((itemOption, index) => (
          <TouchableOpacity
            key={index}
            style={styles.viewLocation}
            onPress={() => clickTab(itemOption)}>
            <View style={styles.row}>
              {itemOption.icon}
              <Text style={styles.titleLocation}>{t(itemOption.title)}</Text>
            </View>
            {itemOption.content ? (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "LexendDeca_500Medium",
                  color: "#688338",
                }}>
                {system.lang === "en" ? "English" : t("Tiếng Việt")}
              </Text>
            ) : (
              <AntDesign name="right" size={20} color="rgba(104, 131, 56, 1)" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingBottom: "15%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontFamily: "LexendDeca_700Bold",
    marginLeft: 20,
    marginBottom: 16,
    color: "#3E3E3E",
  },
  viewLocation: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    paddingVertical: 17,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleLocation: {
    fontSize: 14,
    fontFamily: "LexendDeca_500Medium",
    marginLeft: 13,
  },
});
