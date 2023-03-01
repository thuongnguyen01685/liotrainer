//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
import { Image, RefreshControl, StatusBar } from "react-native";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { requestFrame } from "react-native-reanimated/lib/reanimated2/core";
import { useDispatch, useSelector } from "react-redux";
import { ListCourseAction } from "../../store/actions/coursesAction";
import ItemCourse from "./itemCourse";

// create a component

const { width, height } = Dimensions.get("screen");
const Course = () => {
  const navigation = useNavigation();
  const [refreshing, setRefresing] = useState(false);
  const [arrCourse, setArrCourse] = useState([]);

  const dispatch = useDispatch();
  const { course, user } = useSelector((state) => state);

  useEffect(() => {
    async function it() {
      await setRefresing(true);
      const res = await dispatch(ListCourseAction(navigation));
      if (res?.length > 0) {
        setArrCourse(res);
      } else {
        setArrCourse([res]);
      }
      await setRefresing(false);
    }
    it();
  }, []);

  const onRefresh = React.useCallback(() => {
    async function it() {
      await setRefresing(true);
      const res = await dispatch(ListCourseAction(navigation));
      if (res?.length > 0) {
        setArrCourse(res);
      } else {
        setArrCourse([res]);
      }
      await setRefresing(false);
    }
    it();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: "15%" }}>
        {arrCourse.length > 0 ? (
          <FlatList
            data={arrCourse}
            renderItem={({ item, index }) => (
              <ItemCourse item={item} key={index} />
            )}
            numColumns={2}
            contentContainerStyle={{
              alignSelf: "center",
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          <View
            style={{
              alignSelf: "center",
              marginTop: height * 0.2,
            }}>
            <Image
              source={require("../../assets/notdata.png")}
              style={{
                width: width * 0.5,
                height: width * 0.4,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
                textAlign: "center",
                marginTop: 10,
              }}>
              Hiện không có lịch dạy nào.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});

//make this component available to the app
export default Course;
