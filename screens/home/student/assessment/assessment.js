//import liraries
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { t } from "i18next";
import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useSelector } from "react-redux";
import ModalSuccessCheck from "../../../../components/modal/modalSuccessCheck";
import ItemAssessment from "./ItemAssessment";
import { useDispatch } from "react-redux";
import {
  doneScheduleAction,
  scheduleFutureAction,
  scheduleListAction,
} from "../../../../store/actions/scheduleAction";

// create a component
const { width, height } = Dimensions.get("window");
const Assessment = () => {
  const { user, schedule } = useSelector((state) => state);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [note, setNote] = useState(
    schedule?.detailSchedule?.trainee.map((item) => ({
      id: item.id,
      value: "",
      name: item.name,
      avatar: item.avatar,
    }))
  );
  const { t, i18n } = useTranslation();

  const handleDoneSchedule = async () => {
    const res = await dispatch(
      doneScheduleAction(schedule?.detailSchedule.id, navigation)
    );

    if (res) {
      setShowModalSuccess(true);
    }
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        "rgba(163, 189, 117, 1)",
        "rgba(163, 189, 117, 1)",
        "rgba(104, 131, 56, 1)",
      ]}
      start={{
        x: 1,
        y: 1,
      }}
      end={{
        x: 1,
        y: 0.4,
      }}>
      <ModalSuccessCheck
        titleName={"Đánh giá thành công"}
        ContentBody={"Bạn đã đánh giá học viên thành công"}
        textBtn={"Về trang chủ"}
        goHome={true}
        showModalSuccess={showModalSuccess}
        setShowModalSuccess={setShowModalSuccess}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {schedule?.detailSchedule?.trainee.length > 0 ? (
          note.map((item) => (
            <ItemAssessment
              setShowModalSuccess={setShowModalSuccess}
              note={note}
              setNote={setNote}
              item={item}
              key={item.id}
              infoPack={schedule.detailSchedule}
            />
          ))
        ) : (
          <View style={{ margin: 40 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontFamily: "LexendDeca_400Regular",
                color: "#fff",
              }}>
              {t("Hiện chưa có học viên nào để đánh giá.")}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            borderRadius: 25,
            backgroundColor: "#fff",
            alignSelf: "center",
            width: width * 0.8,
            paddingVertical: 15,
            marginVertical: 10,
          }}
          onPress={handleDoneSchedule}>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              fontFamily: "LexendDeca_400Regular",
              color: "#688338",
            }}>
            {t("Hoàn tất buổi dạy.")}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default Assessment;
