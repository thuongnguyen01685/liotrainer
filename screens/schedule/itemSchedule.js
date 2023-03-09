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
import { useDispatch } from "react-redux";
import { getDetailScheduleAction } from "../../store/actions/scheduleAction";
import {
  formatDate,
  formatDateDisplays,
  formatDateDisplays2,
  formatTimeDisplay,
} from "../../utils/datetime";

// create a component
const { width, height } = Dimensions.get("screen");
const ItemSchedule = (props) => {
  const { item } = props;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDetailSchedule = async (id) => {
    const res = await dispatch(getDetailScheduleAction(id, navigation));
    navigation.navigate("DetailSchedule", { id });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleDetailSchedule(item.id)}>
      <View style={styles.itemLeft}>
        <Image
          source={require("../../assets/schedule/bgTime.png")}
          style={styles.imgBg}
        />
        <View style={styles.viewBg}>
          <Text style={styles.textTime}>
            {formatTimeDisplay(item?.date_start)}
          </Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.textTitle}>
          {item?.program_id?.[1]} {item.id}
        </Text>
        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/Calendar.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>
            {formatDate(item.date, "thu")} {formatDateDisplays2(item.date, "/")}
          </Text>
        </View>
        <View style={styles.viewChildRight}>
          <Image
            source={require("../../assets/schedule/Location.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textViewRight}>{item?.location_id?.[1]}</Text>
        </View>
        {item?.num_of_trainee > 0 && (
          <View style={styles.viewAvt}>
            <Image
              source={require("../../assets/schedule/avt.png")}
              style={styles.avt}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e5e5e5",
    marginHorizontal: 15,
    alignSelf: "center",
    width: width * 0.9,
    flexDirection: "row",
    marginVertical: 10,
    height: height * 0.2,
  },
  itemLeft: {
    overflow: "hidden",
  },
  imgBg: {
    width: width * 0.3,
    height: height * 0.2,
    resizeMode: "contain",
    left: -10,
  },
  viewBg: {
    position: "absolute",
    width: width * 0.25,
    height: height * 0.2,
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
    paddingVertical: 15,
  },
  textTitle: {
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 16,
    width: width * 0.6,
    marginBottom: 10,
  },
  viewChildRight: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.5,
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
export default ItemSchedule;
