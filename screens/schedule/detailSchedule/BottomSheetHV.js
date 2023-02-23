//import liraries
import React, { Component } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

// create a component
const { width, height } = Dimensions.get("window");
const BottomSheetHV = () => {
  const sheetRef = useRef(null);
  const snapPoints = ["17%", "45%"];
  const navigation = useNavigation();
  return (
    <BottomSheet ref={sheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Danh sách học viên</Text>
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          data={Array(10).fill("")}
          renderItem={({ item, index }) => (
            <View style={styles.itemStudent} key={index}>
              <View style={styles.viewLeft}>
                <Image
                  source={require("../../../assets/imghome/avt.jpg")}
                  style={styles.imgAvt}
                />
                <Text style={styles.textName}>Thương Nguyễn</Text>
              </View>
              <TouchableOpacity
                style={styles.btnDetail}
                onPress={() => navigation.navigate("DetailStudent")}>
                <Text style={styles.textBtn}>Chi tiết</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
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
