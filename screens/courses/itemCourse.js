//import liraries
import React, { Component } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { listTime } from "../../utils/datetime";

// create a component
const { width, height } = Dimensions.get("screen");
const ItemCourse = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../assets/imghome/golfc.png")}
        style={styles.imgItem}
      />
      <Text style={styles.textTitle}>{item.length !== 0 ? item.name : ""}</Text>
      <Text style={styles.textMonth}>
        {item.length !== 0 && listTime[item.time]}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: width * 0.42,
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  imgItem: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: "contain",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 14,
    color: "#688338",
    textAlign: "left",
  },
  textMonth: {
    color: "#929292",
    fontFamily: "LexendDeca_500Medium",
    fontSize: 12,
    textAlign: "left",
    marginTop: 10,
  },
});

//make this component available to the app
export default ItemCourse;
