//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import Constants from "expo-constants";

import { useNavigation } from "@react-navigation/native";

import HeaderBack from "../../../components/header/headerBack";
import BottomSheetHV from "./BottomSheetHV";

// create a component
const { width, height } = Dimensions.get("screen");
const DetailSchedule = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/schedule/detail/detailCalendar.png")}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        //barStyle="light-content"
      />
      <HeaderBack />
      <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
        <Text style={styles.titleText}>Gói Beginner 37 VGA 1:1</Text>
        <Text style={styles.contentText}>
          Học viên tham gia khóa học chơi golf cá nhân sẽ được hướng dẫn, tập
          luyện 1:1 với huấn luyện viên theo các cấp độ từ cơ bản đến nâng cao.
        </Text>

        {/* date month */}
        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/Calendar.png")}
              style={styles.imgIcon}
            />
          </View>
          <Text style={styles.textIcon}>Thứ 6 30/12/2022</Text>
        </View>

        {/* location */}

        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/Location.png")}
              style={styles.imgIcon}
            />
          </View>
          <View>
            <Text style={styles.textIcon}>The Golf House</Text>
            <Text style={styles.textIconChild}>Nguyễn Cơ Thạch, Quận 2</Text>
          </View>
        </View>

        {/* time */}

        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/detail/time.png")}
              style={styles.imgIcon}
            />
          </View>
          <Text style={styles.textIcon}>7:30 AM</Text>
        </View>
        {/* hocvien */}
        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/detail/people.png")}
              style={styles.imgIcon}
            />
          </View>
          <Text style={styles.textIcon}>4 Học Viên</Text>
        </View>
      </View>
      <BottomSheetHV />
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAF4",
    paddingTop: Constants.statusBarHeight + 10 || 30,
    flex: 1,
    paddingHorizontal: 15,
  },
  titleText: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 18,
    color: "#fff",
  },
  contentText: {
    fontSize: 12,
    fontFamily: "LexendDeca_400Regular",
    color: "#fff",
    marginTop: 10,
  },
  cardIcon: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  bgIcon: {
    padding: 10,
    backgroundColor: "rgba(160, 160, 160, 0.4)",
    borderRadius: 8,
  },
  imgIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  textIcon: {
    fontSize: 15,
    fontFamily: "LexendDeca_500Medium",
    color: "#fff",
    left: 10,
  },
  textIconChild: {
    fontSize: 10,
    fontFamily: "LexendDeca_400Regular",
    color: "#fff",
    left: 10,
  },
});

//make this component available to the app
export default DetailSchedule;
