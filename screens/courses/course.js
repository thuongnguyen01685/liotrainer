//import liraries
import React, { Component } from "react";
import { StatusBar } from "react-native";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { requestFrame } from "react-native-reanimated/lib/reanimated2/core";
import ItemCourse from "./itemCourse";

// create a component
const dataFake = [
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
  {
    img: require("../../assets/imghome/golfc.png"),
    title: "Gói Beginner 37 VGA 1:1",
    time: "3 Tháng",
  },
];
const { width, height } = Dimensions.get("screen");
const Course = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: "15%" }}>
        <FlatList
          data={dataFake}
          renderItem={({ item, index }) => (
            <ItemCourse item={item} key={index} />
          )}
          numColumns={2}
          contentContainerStyle={{
            alignSelf: "center",
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});

//make this component available to the app
export default Course;
