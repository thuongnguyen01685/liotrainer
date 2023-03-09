import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ModalNotify from "../modal/modalNotify";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi"; // without this line it didn't work
moment.locale("vi");
import SvgNotify from "../../svg/home/svgNotify";
import SvgHand from "../../svg/home/svgHand";
import SvgScan from "../../svg/home/svgScan";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { infoUser } = useSelector((state) => state.user);
  const [showModalNotify, setShowModalNotify] = useState(false);
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const timeNow = () => {
    let time = moment().format("HH:mm:ss");

    if (
      time >= moment("01:00:00 AM", "h:mm:ss A").format("HH:mm:ss") &&
      time < moment("11:00:00 AM", "h:mm:ss A").format("HH:mm:ss")
    ) {
      return "Chào buổi sáng";
    } else if (
      time >= moment("11:00:00 AM", "h:mm:ss A").format("HH:mm:ss") &&
      time < moment("13:00:00 AM", "h:mm:ss A").format("HH:mm:ss")
    ) {
      return "Chào buổi trưa";
    } else if (
      time >= moment("13:00:00 AM", "h:mm:ss A").format("HH:mm:ss") &&
      time < moment("18:00:00 AM", "h:mm:ss A").format("HH:mm:ss")
    ) {
      return "Chào buổi chiều";
    } else {
      return "Chào buổi tối";
    }
  };
  return (
    <View
      style={{
        paddingHorizontal: 15,
        marginBottom: 28,
      }}>
      <ModalNotify
        showModalNotify={showModalNotify}
        setShowModalNotify={setShowModalNotify}
      />
      <View style={styles.row}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <SvgHand />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "LexendDeca_500Medium",
                color: "#fff",
              }}>
              {t(timeNow())}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "LexendDeca_500Medium",
                  color: "#fff",
                }}>
                {/* {infoUser?.fullname} */}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            style={[styles.iconHeader, { backgroundColor: "#fff" }]}
            onPress={() => navigation.navigate("CheckQr")}>
            <SvgScan />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconHeader, { marginLeft: 10 }]}
            onPress={() => setShowModalNotify(true)}>
            <SvgNotify />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 38,
    height: 38,
    borderRadius: 20,
  },
});

export default Header;
