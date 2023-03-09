//import liraries
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { t } from "i18next";
import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useSelector } from "react-redux";
import ModalSuccessCheck from "../../../../components/modal/modalSuccessCheck";

// create a component
const { width, height } = Dimensions.get("window");
const Assessment = () => {
  const { user } = useSelector((state) => state);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const navigation = useNavigation();

  const [note, setNote] = useState("");
  const { t, i18n } = useTranslation();
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        "rgba(163, 189, 117, 1)",
        "rgba(163, 189, 117, 1)",
        "rgba(104, 131, 56, 1)",
      ]}
      start={{
        x: 1,
        y: 1,
      }}
      end={{
        x: 1,
        y: 0.4,
      }}>
      <ModalSuccessCheck
        titleName={"Đánh giá thành công"}
        ContentBody={"Bạn đã đánh giá học viên thành công"}
        textBtn={"Về trang chủ"}
        goHome={true}
        showModalSuccess={showModalSuccess}
        setShowModalSuccess={setShowModalSuccess}
      />
      <View style={styles.viewBody}>
        <Image
          source={{ uri: user.infoUser.thumbnail }}
          style={{
            width: 86,
            height: 86,
            borderRadius: 50,
            position: "absolute",
            zIndex: 10,
            top: -45,
            alignSelf: "center",
          }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.textName}>Thuong nguyen</Text>
          <View style={styles.viewRow}>
            <Image
              source={require("../../../../assets/booking/Layer.png")}
              style={styles.imgIcon}
            />
            <Text style={styles.textTitle}>Gói Beginner 37 VGA 1:1</Text>
          </View>
          <View style={styles.viewRow}>
            <Image
              source={require("../../../../assets/booking/address.png")}
              style={styles.imgIcon}
            />
            <Text style={styles.textTitle}>
              Tầng 1, The Golf House Nguyễn Cơ Thạch, Quận 2
            </Text>
          </View>
          <View style={styles.viewRow}>
            <Image
              source={require("../../../../assets/booking/TimeCcircle.png")}
              style={styles.imgIcon}
            />
            <Text style={styles.textTitle}>07:30, Thứ 6, 30/12/2022</Text>
          </View>
          <View style={{ width: width * 0.8, marginHorizontal: 20 }}>
            <TextInput
              style={styles.input}
              onChangeText={setNote}
              value={note}
              placeholder={t("Viết đánh giá...")}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewBtn}
          onPress={() => setShowModalSuccess(true)}>
          <Text style={styles.textBtn}>{t("Gửi đánh giá")}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  viewBody: {
    height: height * 0.72,
    backgroundColor: "#eeeeee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  textName: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imgIcon: {
    width: 20,
    height: 20,
  },
  textTitle: {
    fontFamily: "LexendDeca_300Light",
    fontSize: 14,
    marginLeft: 10,
  },
  input: {
    height: 100,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#DDDDDD",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    textAlignVertical: "top",
    fontFamily: "LexendDeca_400Regular",
  },
  viewBtn: {
    backgroundColor: "#688338",
    borderRadius: 30,
    paddingVertical: 15,
    width: width * 0.7,
    alignSelf: "center",
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 16,
  },
});

//make this component available to the app
export default Assessment;
