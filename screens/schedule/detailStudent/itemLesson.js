//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// create a component
const { width, height } = Dimensions.get("window");
const ItemLesson = (props) => {
  const { index, temp } = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemLesson}>
        <Text style={styles.nameLesson}>Bài {index}: Giới thiệu</Text>
        <Text style={styles.description}>
          Giới thiệu các kỹ thuật sẽ hướng dẫn trong khóa học
        </Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/schedule/detail/check.png")}
          style={{ width: 20, height: 20, resizeMode: "contain", right: 5 }}
        />
        {index !== temp.length && (
          <View
            style={{
              borderWidth: 1.5,
              height: height * 0.1,
              borderColor: "#009045",
              backgroundColor: "#009045",
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
