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
} from "react-native";
import Header from "../../components/header/header";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import Coursing from "./coursing/coursing";
import LessonSchedule from "./calendarTeach/lessonSchedule";
import { useNavigation } from "@react-navigation/native";

const dataBox = [
  {
    title: "Khóa học",
    img: require("../../assets/imghome/golfc.png"),
    navi: "Course",
  },
  {
    title: "Lịch dạy",
    img: require("../../assets/imghome/lichday.png"),
    navi: "Schedule",
  },
  {
    title: "Lịch tập",
    img: require("../../assets/imghome/lichtap.png"),
    navi: "Booking",
  },
];
// create a component
const { width, height } = Dimensions.get("screen");
const Home = () => {
  const navigation = useNavigation();
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
        x: 0.1,
        y: 1,
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        //barStyle="light-content"
      />
      <Header />

      <View style={styles.viewBody}>
        <View style={styles.viewAvt}>
          <Image
            source={require("../../assets/imghome/avt.jpg")}
            style={{
              resizeMode: "contain",
              width: width * 0.2,
              height: width * 0.2,
              borderRadius: 50,
            }}
          />
        </View>

        <Text style={styles.textName}>Nguyễn Thương</Text>
        <ScrollView>
          <View style={styles.viewBox}>
            {dataBox.map((item, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => navigation.navigate(`${item.navi}`)}>
                <Image source={item.img} style={styles.imgBox} />
                <Text style={styles.textBox}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Coursing />
          <LessonSchedule />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAF4",
    paddingTop: Constants.statusBarHeight + 10 || 30,
  },
  viewBody: {
    backgroundColor: "#F8FAF4",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    paddingTop: 38,
    paddingBottom: height * 0.25,
  },
  viewAvt: {
    position: "absolute",
    top: -50,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 45,
    zIndex: 2,
    alignSelf: "center",
  },
  textName: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 20,
    textAlign: "center",
    color: "#4B4B4B",
  },
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    width: width * 0.25,
    height: width * 0.25,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
  },
  imgBox: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  textBox: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});

//make this component available to the app
export default Home;
