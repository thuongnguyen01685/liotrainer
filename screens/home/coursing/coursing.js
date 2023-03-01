//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ItemCoursing from "./itemCoursing";
import { useSelector } from "react-redux";

// create a component
const { width, height } = Dimensions.get("screen");
const Coursing = (props) => {
  const { course } = props;

  return (
    <View style={styles.container}>
      <View style={styles.ontext}></View>
      <Text style={styles.title}>Khóa học đang diễn ra</Text>
      {course.map((item, index) => (
        <ItemCoursing key={index} item={item} />
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 15,
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
});

//make this component available to the app
export default Coursing;
