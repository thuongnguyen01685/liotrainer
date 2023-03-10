//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// create a component
const { width, height } = Dimensions.get("window");
const ItemLesson = (props) => {
  const { index, temp, item } = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemLesson}>
        <Text style={styles.nameLesson}>
          Bài {index}: {item.name}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View>
        {item.state === "running" ? (
          <Image
            source={require("../../../assets/schedule/detail/key.png")}
            style={{ width: 20, height: 20, resizeMode: "contain", right: 5 }}
          />
        ) : (
          <Image
            source={require("../../../assets/schedule/detail/check.png")}
            style={{ width: 20, height: 20, resizeMode: "contain", right: 5 }}
          />
        )}

        {index !== temp.length && (
          <View
            style={{
              borderWidth: 1.5,
              height: height * 0.1,
              borderColor: item.state === "running" ? "#CFCFCF" : "#009045",
              backgroundColor: item.state === "running" ? "#CFCFCF" : "#009045",
              width: 2,
              position: "absolute",
              top: 20,
              left: 3,
            }}></View>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLesson: {
    marginTop: 10,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 0.8,
    padding: 10,
    width: width * 0.78,
  },
  nameLesson: {
    fontSize: 16,
    fontFamily: "LexendDeca_600SemiBold",
  },
  description: {
    fontSize: 12,
    fontFamily: "LexendDeca_400Regular",
    marginTop: 5,
  },
});

//make this component available to the app
export default ItemLesson;
