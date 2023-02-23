//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import ItemSchedule from "./itemSchedule";

// create a component
const { width, height } = Dimensions.get("screen");
const Schedule = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: "15%" }}>
        <FlatList
          data={Array(5).fill("")}
          renderItem={({ item, index }) => (
            <ItemSchedule item={item} key={index} />
          )}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default Schedule;
