//import liraries
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { feedbackAction } from "../../../../store/actions/scheduleAction";

// create a component
const dataIcon = [
  {
    name: "Thất vọng",
    value: "1",
    image: require("../../../../assets/1.png"),
  },
  {
    name: "Chưa ổn",
    value: "2",
    image: require("../../../../assets/2.png"),
  },
  {
    name: "Bình thường",
    value: "3",
    image: require("../../../../assets/3.png"),
  },
  {
    name: "Hài lòng",
    value: "4",
    image: require("../../../../assets/4.png"),
  },
  {
    name: "Tuyệt vời",
    value: "5",
    image: require("../../../../assets/5.png"),
  },
];
const { width, height } = Dimensions.get("window");
const ItemAssessment = (props) => {
  const { item, setShowModalSuccess, infoPack, note, setNote } = props;
  const [rating, setRating] = useState("5");
  const [idIndex, setIndex] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [idSuccess, setIdSuccess] = useState("");

  const handleFeedBack = async (item) => {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const vals = {
      date: infoPack.date,
      feedback: note
        .filter((items) => items.id === item.id)
        .map((i) => i.value)
        .toString(),
      rating: rating,
      trainee_id: item.id,
      trainer_id: token.trainer_id,
    };

    const res = await dispatch(feedbackAction(vals, navigation));
    if (res) {
      setIdSuccess(item.id);
      setCheckSuccess(true);
      Alert.alert(`Đánh giá cho người dùng ${item.name} thành công!`);
    }
  };

  const handleChange = (text, id) => {
    const newItems = note.map((item) => {
      if (item.id === id) {
        return { ...item, value: text };
      }
      return item;
    });
    setNote(newItems);
  };

  return (
    <View style={styles.viewBody}>
      {checkSuccess && idSuccess === item.id && (
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <Ionicons name="checkbox-outline" size={40} color="#688338" />
        </View>
      )}

      <View>
        <Image
          source={
            item?.avatar
              ? { uri: item.avatar }
              : require("../../../../assets/logoapp.png")
          }
          style={{
            width: 86,
            height: 86,
            borderRadius: 50,
            alignSelf: "center",
            resizeMode: "contain",
            borderColor: "#d8d8d8",
            borderWidth: 0.5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            margin: 2,
          }}
        />
        <Text style={styles.textName}>{item?.name}</Text>
        <View style={styles.viewRow}>
          <Image
            source={require("../../../../assets/booking/Layer.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textTitle}>{infoPack?.name}</Text>
        </View>
        <View style={styles.viewRow}>
          <Image
            source={require("../../../../assets/booking/address.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textTitle}>{infoPack?.location}</Text>
        </View>
        <View style={styles.viewRow}>
          <Image
            source={require("../../../../assets/booking/TimeCcircle.png")}
            style={styles.imgIcon}
          />
          <Text style={styles.textTitle}>{infoPack?.date_start}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          {dataIcon.map((items, index) => (
            <TouchableOpacity
              style={{
                width: width * 0.15,
              }}
              onPress={() => {
                setRating(items.value);
                setIndex(item.id);
              }}
              key={index}>
              <Image
                source={items.image}
                style={{ width: 23, height: 22, alignSelf: "center" }}
              />
              <Text
                style={{
                  fontFamily: "LexendDeca_300Light",
                  fontSize: 12,
                  textAlign: "center",
                }}>
                {items.name}
              </Text>
              {item.id === idIndex && items.value === rating && (
                <View style={{ position: "absolute", right: 2, top: 2 }}>
                  <Ionicons
                    name="checkmark-circle"
                    color={"#688338"}
                    size={20}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ width: width * 0.8, marginHorizontal: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(text, item.id)}
            value={item.value}
            placeholder={t("Viết đánh giá...")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => handleFeedBack(item)}>
        <Text style={styles.textBtn}>{t("Gửi đánh giá")}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewBody: {
    height: height * 0.65,
    backgroundColor: "#eeeeee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  textName: {
    fontFamily: "LexendDeca_500Medium",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imgIcon: {
    width: 20,
    height: 20,
  },
  textTitle: {
    fontFamily: "LexendDeca_300Light",
    fontSize: 14,
    marginLeft: 10,
    width: width * 0.7,
  },
  input: {
    height: 100,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#DDDDDD",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    textAlignVertical: "top",
    fontFamily: "LexendDeca_400Regular",
  },
  viewBtn: {
    backgroundColor: "#688338",
    borderRadius: 30,
    paddingVertical: 15,
    width: width * 0.7,
    alignSelf: "center",
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 16,
  },
});

//make this component available to the app
export default ItemAssessment;
