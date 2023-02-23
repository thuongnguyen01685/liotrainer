//import liraries
import React from "react";
import moment from "moment";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ChooseDayTimeBooking(props) {
  const { month, day, setDay, setRefreshing } = props;
  const getRank = (index) => {
    const day1 = moment(month).format("YYYYMM") + index;
    return moment(day1).format("dd");
  };
  const chooseDay = (day1) => {
    setDay(`${moment(month).format("YYYYMM")}${day1}`);
    setRefreshing(true);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 23,
        height: 82,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {Array(moment(month).daysInMonth())
          .fill()
          .map((_, index) => {
            const temp = index + 1 > 9 ? index + 1 : `0${index + 1}`;
            if (
              `${moment(month).format("YYYYMM")}${temp}` -
                moment().format("YYYYMMDD") >=
              0
            ) {
              if (temp.toString() === moment(day).format("DD")) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.day}
                    onPress={() => chooseDay(temp)}>
                    <Text style={[styles.textDay, { color: "#688338" }]}>
                      {getRank(temp)}
                    </Text>
                    <View
                      style={[
                        styles.circleText,
                        { backgroundColor: "#A3BD75", borderColor: "#A3BD75" },
                      ]}>
                      <Text style={[styles.textDay, { color: "#fff" }]}>
                        {temp}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.day}
                    onPress={() => chooseDay(temp)}>
                    <Text style={styles.textDay}>{getRank(temp)}</Text>
                    <View style={styles.circleText}>
                      <Text style={styles.textDay}>{temp}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            }
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textDay: {
    color: "#ADADAD",
    fontSize: 18,
    fontFamily: "LexendDeca_400Regular",
    marginBottom: 5,
  },
  circleText: {
    borderColor: "#adadad",
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    //paddingHorizontal: 5,
    width: 50,
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 13,
    //backgroundColor: "rgba(104, 131, 56, 0.35)",
    borderRadius: 30,
  },
});
