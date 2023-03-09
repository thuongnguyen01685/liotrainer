//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ItemStudent from "./itemStudent";

// create a component
const { width, height } = Dimensions.get("screen");
const ListStudent = (props) => {
  const { listStudent } = props;
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.ontext}></View>
      <Text style={styles.title}>{t("Danh sách học viên")}</Text>

      {listStudent.length > 0 ? (
        listStudent.map((item, index) => (
          <ItemStudent item={item} key={item.id} />
        ))
      ) : (
        <View>
          <Text
            style={{
              fontFamily: "LexendDeca_500Medium",
              fontSize: 12,
              textAlign: "center",
              marginVertical: 20,
            }}>
            {t("Không có học viên nào.")}
          </Text>
        </View>
      )}
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
export default ListStudent;
