//import liraries
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// create a component
const ItemStudent = (props) => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const { item } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <Image
          source={
            item?.avatar
              ? { uri: item?.avatar }
              : require("../../../assets/logoapp.png")
          }
          style={styles.imgAvt}
        />
        <Text style={styles.textName}>{item?.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.btnDetail}
        onPress={() => navigation.navigate("DetailStudent")}>
        <Text style={styles.textBtn}>{t("Chi tiết")}</Text>
        <Ionicons name="arrow-forward" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#474747",
    borderBottomWidth: 0.3,
  },
  leftItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgAvt: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    resizeMode: "contain",
  },
  textName: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 14,
    color: "474747",
    left: 20,
  },
  btnDetail: {
    backgroundColor: "#688338",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textBtn: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 14,
    color: "#fff",
    marginRight: 5,
  },
});

//make this component available to the app
export default ItemStudent;
