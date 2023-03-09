//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

// create a component
const Carousel = () => {
  return <Carousel layout={"stack"} layoutCardOffset={`18`} />;
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
export default Carousel;
