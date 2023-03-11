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
import { useSelector } from "react-redux";
import {
  formatDate,
  formatDateDisplays2,
  formatTimeDisplay,
  getTime,
} from "../../../utils/datetime";
import { useTranslation } from "react-i18next";

// create a component
const { width, height } = Dimensions.get("screen");
const DetailSchedule = () => {
  const navigation = useNavigation();
  const { schedule } = useSelector((state) => state);
  const { t } = useTranslation();

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
        <Text style={styles.titleText}>{schedule?.detailSchedule?.name}</Text>
        <Text style={styles.contentText}>
          {schedule.detailSchedule.description}
        </Text>

        {/* date month */}
        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/Calendar.png")}
              style={styles.imgIcon}
            />
          </View>
          <Text style={styles.textIcon}>
            {/* {formatDate(schedule.detailSchedule.date, "thu")}{" "} */}
            {schedule.detailSchedule.date}
          </Text>
        </View>

        {/* location */}

        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/Location.png")}
              style={styles.imgIcon}
            />
          </View>
          <View style={{ width: width * 0.6 }}>
            <Text style={styles.textIcon}>The Golf House</Text>
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
          <Text style={styles.textIcon}>
            {getTime(schedule.detailSchedule.time)}
          </Text>
        </View>
        {/* hocvien */}
        <View style={styles.cardIcon}>
          <View style={styles.bgIcon}>
            <Image
              source={require("../../../assets/schedule/detail/people.png")}
              style={styles.imgIcon}
            />
          </View>
          <Text style={styles.textIcon}>
            {schedule.detailSchedule?.trainee?.length} {t("Học Viên")}
          </Text>
        </View>
      </View>
      <BottomSheetHV arrHv={schedule.detailSchedule.trainee} />
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
