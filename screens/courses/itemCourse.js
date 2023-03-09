//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { getCourseDetailAction } from "../../store/actions/coursesAction";
import { listTime } from "../../utils/datetime";

// create a component
const { width, height } = Dimensions.get("screen");
const ItemCourse = (props) => {
  const { item } = props;
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDetailCourse = async (id) => {
    const res = await dispatch(getCourseDetailAction(navigation, id));
    if (res) {
      navigation.navigate("DetailCourse", { id: id });
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleDetailCourse(item.id)}>
      <Image
        source={{ uri: `data:image/jpg;base64,${item.description_image}` }}
        style={styles.imgItem}
      />
      <Text style={styles.textTitle}>{item.length !== 0 ? item.name : ""}</Text>
      <Text style={styles.textMonth}>
        {item.length !== 0 && t(listTime[item.time])}
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
