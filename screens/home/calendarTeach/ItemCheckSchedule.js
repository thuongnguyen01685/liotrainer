//import liraries
import React, { Component } from "react";
import { Dimensions, Image, ImageBackground } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SvgLine from "../../../svg/home/svgLine";
import SvgLocation from "../../../svg/home/svgLocation";

// create a component
const { width, height } = Dimensions.get("screen");
const ItemCheckSchedule = (props) => {
  const { showModalSuccess, setShowModalSuccess } = props;
  const handleCheckIn = () => {
    setShowModalSuccess(true);
  };
  const handleCheckOut = () => {
    setShowModalSuccess(true);
  };
  return (
    <ImageBackground
      source={require("../../../assets/backgroundSchedule.png")}
      style={styles.bgView}>
      <View style={styles.viewTime}>
        <View>
          <Text style={styles.dateText}>Thứ Sáu</Text>
          <Text style={styles.dateText}>30/12/2022</Text>
        </View>
        <Text style={styles.timeText}>07:30</Text>
      </View>
      <View style={styles.cardView}>
        <View style={styles.addressView}>
          <SvgLocation />
          <Text style={styles.textAddress}>
            85-87 Nguyễn Cơ Thạch, An Lợi Đông, Q.2, TPHCM
          </Text>
        </View>
        <View style={{ left: 8, marginTop: -8 }}>
          <SvgLine />
        </View>

        <View style={styles.addressView}>
          <Image
            source={require("../../../assets/imghome/Ellipse.png")}
            style={{
              height: 22,
              width: 22,
              borderRadius: 100,
              left: -2,
            }}
          />
          <Text style={styles.textAddress}>Gói Beginner 37 VGA 1:1</Text>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#688338" }]}
            onPress={handleCheckIn}>
            <Text style={styles.textbtn}>Check In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#AFAFAF" }]}>
            <Text style={styles.textbtn}>Hủy dạy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  bgView: {
    width: width * 0.95,
    height: width * 0.6,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    resizeMode: "contain",
    marginBottom: height * 0.09,
  },
  viewTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  dateText: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 14,
    color: "#fff",
  },
  timeText: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 34,
    color: "#fff",
  },
  cardView: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: width * 0.42,
    paddingHorizontal: 10,
    alignSelf: "center",
    width: width * 0.8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  addressView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textAddress: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 14,
    marginLeft: 10,
    width: width * 0.6,
  },
  viewBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  btn: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textbtn: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

//make this component available to the app
export default ItemCheckSchedule;
