//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SvgLine from "../../../svg/home/svgLine";
import SvgLocation from "../../../svg/home/svgLocation";
import ItemCheckSchedule from "./ItemCheckSchedule";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// create a component
const { width, height } = Dimensions.get("screen");
const LessonSchedule = (props) => {
  const { t, i18n } = useTranslation();
  const { setShowModalCheckIn, schedule, setShowModalCheckout, setIdSchedule } =
    props;

  return (
    <View style={styles.container}>
      <View style={styles.ontext}></View>
      <Text style={styles.title}>{t("Lịch dạy hôm nay")}</Text>

      {schedule?.scheduleFuture.length > 0 &&
        schedule?.scheduleFuture?.map((item) => (
          <ItemCheckSchedule
            item={item}
            setShowModalSuccess={setShowModalCheckIn}
            setShowModalCheckout={setShowModalCheckout}
            key={item.id}
            setIdSchedule={setIdSchedule}
          />
        ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: "20%",
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
  //lich day sap toi
});

//make this component available to the app
export default LessonSchedule;
