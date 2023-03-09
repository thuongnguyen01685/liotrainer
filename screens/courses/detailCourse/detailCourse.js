//import liraries
import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { View, Text, StyleSheet } from "react-native";

import Constants from "expo-constants";
import HeaderBack from "../../../components/header/headerBack";
import ItemStudent from "../../home/student/itemStudent";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// create a component
const { width, height } = Dimensions.get("screen");
const DetailCourse = () => {
  const { t } = useTranslation();
  const { course } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/schedule/detail/bgstudent.png")}
        style={styles.bgHeader}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          //barStyle="light-content"
        />
        <View style={styles.headerView}>
          <HeaderBack />
          <Text style={styles.textTitle}>{course.courseDetail.name}</Text>
        </View>

        <View style={styles.viewPackUser}>
          <Text style={styles.textDescrip}>
            {course.courseDetail.description}
          </Text>
          <View style={styles.cardInfo}>
            <View style={styles.infoPack}>
              <Text style={styles.textCount}>
                {course.courseDetail.num_lession <= 9 &&
                course.courseDetail.num_lession > 0
                  ? "0" + course.courseDetail.num_lession
                  : course.courseDetail.num_lession}
              </Text>
              <Text style={styles.textLesson}>{t("Bài học")}</Text>
            </View>
            <View style={styles.borderGreen}></View>
            <View style={styles.infoPack}>
              <Text style={styles.textCount}>
                {course.courseDetail.num_trainee <= 9 &&
                course.courseDetail.num_trainee > 0
                  ? "0" + course.courseDetail.num_trainee
                  : course.courseDetail.num_trainee}
              </Text>
              <Text style={styles.textLesson}>{t("Học viên")}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.listLesson}>
        <Text style={styles.textListStudent}>{t("Danh sách học viên")}</Text>
        <FlatList
          data={course.courseDetail.trainee}
          renderItem={({ item }) => {
            return <ItemStudent item={item} />;
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgHeader: {
    width,
    paddingTop: Constants.statusBarHeight + 10 || 30,
    paddingHorizontal: 15,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewPackUser: {
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "LexendDeca_600SemiBold",
    color: "#fff",
    marginLeft: 10,
  },
  textListStudent: {
    fontSize: 16,
    fontFamily: "LexendDeca_700Bold",
    color: "#688338",
    marginLeft: 20,
  },

  textDescrip: {
    color: "#FFF",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 14,
  },
  cardInfo: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.7,
    alignSelf: "center",
    marginBottom: 18,
    borderRadius: 20,
    paddingVertical: 20,
  },
  borderGreen: {
    borderColor: "#688338",
    backgroundColor: "#688338",
    width: 2,
    height: 50,
    borderWidth: 1.3,
  },
  infoPack: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textCount: {
    fontSize: 28,
    fontFamily: "LexendDeca_600SemiBold",
    color: "#688338",
  },
  textLesson: {
    color: "#4b4b4b",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 14,
    marginLeft: 10,
  },
  imgAvt: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50,
  },
  viewText: {
    left: 10,
  },

  textPosition: {
    color: "#FFF",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 12,
  },
  listLesson: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: "99%",
  },
});

//make this component available to the app
export default DetailCourse;
