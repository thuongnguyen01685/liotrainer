//import liraries
import React, { Component } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { URL } from "../../../utils/callApi";
import ItemStudent from "../../home/student/itemStudent";
import { useTranslation } from "react-i18next";

// create a component
const { width, height } = Dimensions.get("window");
const BottomSheetHV = (props) => {
  const sheetRef = useRef(null);
  const snapPoints = ["17%", "28%"];
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { arrHv } = props;

  return (
    <BottomSheet ref={sheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{t("Danh sách học viên")}</Text>
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          data={arrHv}
          renderItem={({ item, index }) => <ItemStudent item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </BottomSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: "LexendDeca_700Bold",
    color: "#688338",
  },
  itemStudent: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgAvt: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50,
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  textName: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 14,
    left: 10,
  },
  btnDetail: {
    width: width * 0.25,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#688338",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 20,
  },
  textBtn: {
    fontSize: 12,
    fontFamily: "LexendDeca_400Regular",
    right: 10,
    color: "#fff",
  },
});

//make this component available to the app
export default BottomSheetHV;
