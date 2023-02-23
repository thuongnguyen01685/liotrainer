//import liraries
import { useNavigation } from "@react-navigation/native";
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

// create a component
const { width, height } = Dimensions.get("screen");
const ItemSchedule = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("DetailSchedule")}>
      <View style={styles.itemLeft}>
        <Image
          source={require("../../assets/schedule/bgTime.png")}
          style={styles.imgBg}
        />
        <View style={styles.viewBg}>
          <Text style={styles.textTime}>7:30</Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.textTitle}>Gói Beginner 37 VGA 1:4</Text>
        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/Calendar.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>Thứ 6 30/12/2022</Text>
        </View>
        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/Location.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>Tầng 1, The Golf House</Text>
        </View>
        <View style={styles.viewAvt}>
          <Image
            source={require("../../assets/schedule/avt.png")}
            style={styles.avt}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e5e5e5",
    marginHorizontal: 15,
    alignSelf: "center",
    width: width * 0.9,
    flexDirection: "row",
    marginVertical: 10,
  },
  itemLeft: {},
  imgBg: {
    width: width * 0.3,
    height: height * 0.2,
    resizeMode: "contain",
  },
  viewBg: {
    position: "absolute",
    width: width * 0.3,
    height: height * 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTime: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 20,
    color: "#fff",
  },
  itemRight: {
    padding: 15,
  },
  textTitle: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 16,
  },
  viewChildRight: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  textViewRight: {
    fontFamily: "LexendDeca_500Medium",
    color: "#688338",
    fontSize: 14,
    left: 5,
  },
  viewAvt: {
    left: 5,
    marginVertical: 10,
  },
  avt: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default ItemSchedule;
