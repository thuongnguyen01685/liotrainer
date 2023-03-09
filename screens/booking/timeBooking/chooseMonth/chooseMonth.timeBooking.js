//import liraries
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/vi"; // without this line it didn't work
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

export default function ChooseMonthTimeBooking(props) {
  const { month, setMonth, setDay, setRefreshing } = props;
  const { system } = useSelector((state) => state);
  moment.locale(system.lang);

  const changeMonth = (number) => {
    setMonth(moment(month).add(number, "month"));
    setDay(
      moment(moment(month).add(number, "month")).format("MM") ===
        moment().format("MM")
        ? moment().format("YYYYMMDD")
        : `${moment(moment(month).add(number, "month")).format("YYYYMM")}01`
    );
    setRefreshing(true);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 16,
      }}>
      <TouchableOpacity
        style={
          moment(month).format("MMMM") !== moment().format("MMMM")
            ? styles.changeMonth
            : styles.offMonth
        }
        onPress={() => {
          if (moment(month).format("MMMM") !== moment().format("MMMM")) {
            changeMonth(-1);
          }
        }}>
        <AntDesign
          name="left"
          size={20}
          color={
            moment(month).format("MMMM") !== moment().format("MMMM")
              ? "rgba(104, 131, 56, 1)"
              : "rgba(104, 131, 56, 0.35)"
          }
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "LexendDeca_600SemiBold",
            fontSize: 18,
            marginHorizontal: 16,
            textTransform: "capitalize",
          }}>
          {moment(month).format("MMMM")}
        </Text>
        <Text
          style={{
            fontFamily: "LexendDeca_400Regular",
            fontSize: 18,
            marginHorizontal: 16,
          }}>
          {moment(month).format("YYYY")}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.changeMonth}
        onPress={() => changeMonth(1)}>
        <AntDesign name="right" size={20} color="rgba(104, 131, 56, 1)" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  changeMonth: {
    width: 50,
    height: 50,
    //backgroundColor: "rgba(104, 131, 56, 1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  offMonth: {
    width: 50,
    height: 50,
    //backgroundColor: "rgba(104, 131, 56, 0.35)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
