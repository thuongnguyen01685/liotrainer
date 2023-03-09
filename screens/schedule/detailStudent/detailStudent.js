//import liraries
import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { View, Text, StyleSheet } from "react-native";
import HeaderBack from "../../../components/header/headerBack";
import Constants from "expo-constants";
import ItemLesson from "./itemLesson";
import { useTranslation } from "react-i18next";

// create a component
const { width, height } = Dimensions.get("screen");
const DetailStudent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/schedule/detail/bgstudent.png")}
        style={styles.bgHeader}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          //barStyle="light-content"
        />
        <HeaderBack />
        <View style={styles.viewPackUser}>
          <Text style={styles.textTitle}>Gói Beginner 37 VGA 1:1</Text>
          <View style={styles.infoUserView}>
            <Image
              source={require("../../../assets/imghome/avt.jpg")}
              style={styles.imgAvt}
            />
            <View style={styles.viewText}>
              <Text style={styles.textName}>Thương Nguyễn</Text>
              <Text style={styles.textPosition}>{t("Học viên")}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.listLesson}>
        <FlatList
          data={Array(30).fill("")}
          renderItem={({ item, index }) => (
            <ItemLesson
              key={index}
              index={index + 1}
              temp={Array(30).fill("")}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgHeader: {
    width,
    paddingTop: Constants.statusBarHeight + 10 || 30,
    paddingHorizontal: 15,
  },
  viewPackUser: {
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "LexendDeca_600SemiBold",
    color: "#fff",
  },
  infoUserView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  imgAvt: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50,
  },
  viewText: {
    left: 10,
  },
  textName: {
    color: "#FFF",
    fontFamily: "LexendDeca_500Medium",
    fontSize: 16,
  },
  textPosition: {
    color: "#FFF",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 12,
  },
  listLesson: {
    paddingHorizontal: 20,
    marginBottom: height * 0.25,
  },
});

//make this component available to the app
export default DetailStudent;
