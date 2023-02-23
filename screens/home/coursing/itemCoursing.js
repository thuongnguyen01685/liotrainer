//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

// create a component
const ItemCoursing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewProgress}>
        <Text style={styles.title}>Gói Beginner 37 VGA 1:1</Text>
        <Text style={styles.progress}>40%</Text>
      </View>
      <View>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#EEB33D"
          maximumTrackTintColor="#D9D9D9"
          disabled={true}
          value={0.5}
        />
      </View>
    </View>
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
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  viewProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    color: "#4B4B4B",
    fontFamily: "LexendDeca_500Medium",
    fontSize: 14,
  },
  progress: {
    color: "#CB5151",
    fontFamily: "LexendDeca_500Medium",
    fontSize: 14,
  },
});

//make this component available to the app
export default ItemCoursing;
