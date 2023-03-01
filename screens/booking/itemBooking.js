//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { formatTimeDisplay } from "../../utils/datetime";

// create a component
const { width, height } = Dimensions.get("screen");
const ItemBooking = (props) => {
  const navigation = useNavigation();
  const { item, handleBooking, index, idBooking, check } = props;
  return (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor:
            idBooking === item.id && check === false ? "#A3BD75" : "#e5e5e5",
        },
      ]}
      onPress={() => handleBooking(item.id)}>
      <View style={styles.itemLeft}>
        <Image
          source={require("../../assets/schedule/bgTime.png")}
          style={styles.imgBg}
        />
        <View style={styles.viewBg}>
          <Text style={styles.textTime}>
            {formatTimeDisplay(item.date_start)}
          </Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.textTitle}>{item.program_id[1]}</Text>

        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/Location.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>
            {item.location_detail_id[1]}, {item.location_id[1]}
          </Text>
        </View>
        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/detail/people.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>
            Số lượng: {item.trainee_count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    marginHorizontal: 15,
    alignSelf: "center",
    width: width * 0.9,
    flexDirection: "row",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 5,
  },
  itemLeft: {},
  imgBg: {
    width: width * 0.27,
    height: height * 0.18,
    resizeMode: "contain",
  },
  viewBg: {
    position: "absolute",
    width: width * 0.27,
    height: height * 0.18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTime: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 20,
    color: "#fff",
  },
  itemRight: {
    padding: 15,
  },
  textTitle: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 16,
  },
  viewChildRight: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  textViewRight: {
    fontFamily: "LexendDeca_500Medium",
    color: "#688338",
    fontSize: 14,
    left: 5,
    width: width * 0.5,
  },
  viewAvt: {
    left: 5,
    marginVertical: 10,
  },
  avt: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default ItemBooking;
