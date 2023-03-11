//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";
import ItemSchedule from "./itemSchedule";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  scheduleFutureAction,
  scheduleListAction,
} from "../../store/actions/scheduleAction";

// create a component
const { width, height } = Dimensions.get("screen");
const Schedule = () => {
  const navigation = useNavigation();
  const [refreshing, setRefresing] = useState(false);

  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state);

  useEffect(() => {
    async function it() {
      await setRefresing(true);
      await dispatch(scheduleListAction(navigation));
      await setRefresing(false);
    }
    it();
  }, [dispatch]);

  const onRefresh = React.useCallback(() => {
    async function it() {
      await setRefresing(true);
      await dispatch(scheduleListAction(navigation));

      await setRefresing(false);
    }
    it();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: "15%" }}>
        {schedule.scheduleList.length > 0 ? (
          <FlatList
            data={schedule.scheduleList}
            renderItem={({ item, index }) => (
              <ItemSchedule item={item} key={index} />
            )}
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
    backgroundColor: "#f8f8f8",
  },
});

//make this component available to the app
export default Schedule;
