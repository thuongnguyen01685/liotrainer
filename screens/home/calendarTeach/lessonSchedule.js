//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import SvgLine from "../../../svg/home/svgLine";
import SvgLocation from "../../../svg/home/svgLocation";
import ItemCheckSchedule from "./ItemCheckSchedule";

// create a component
const { width, height } = Dimensions.get("screen");
const LessonSchedule = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ontext}></View>
      <Text style={styles.title}>Lịch dạy sắp tới</Text>
      <ItemCheckSchedule />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ontext: {
    height: 2,
    width: width * 0.2,
    borderBottomWidth: 2.5,
    borderBottomColor: "#EEB33D",
  },
  title: {
    fontSize: 14,
    fontFamily: "LexendDeca_700Bold",
    color: "#688338",
  },
  //lich day sap toi
});

//make this component available to the app
export default LessonSchedule;
