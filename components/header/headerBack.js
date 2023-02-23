//import liraries
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// create a component
const { width, height } = Dimensions.get("screen");
const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        width: width * 0.15,
      }}
      onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default HeaderBack;
