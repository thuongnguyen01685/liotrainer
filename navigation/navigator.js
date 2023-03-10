//import liraries
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import StartScreen from "./navigator/groupNavigator/startScreen";
import TabBar from "./navigator/tabBar/TabBar";
import Booking from "../screens/booking/Booking";
import DetailSchedule from "../screens/schedule/detailSchedule/detailSchedule";
import DetailStudent from "../screens/schedule/detailStudent/detailStudent";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckSchedule from "../screens/CheckinOrOut/CheckSchedule";
import CheckQr from "../screens/qr/CheckQr";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import DetailCourse from "../screens/courses/detailCourse/detailCourse";
import Assessment from "../screens/home/student/assessment/assessment";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { schedule } = useSelector((state) => state);
  const { t, i18n } = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableOpacity>
              );
            },
            headerShown: true,
            headerBackVisible: false,
            headerTitle: (props) => (
              <Text
                style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
                {t("?????t l???ch")}
              </Text>
            ),
            headerTitleAlign: "center",
            headerShadowVisible: true,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.0,
              elevation: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="DetailSchedule"
          component={DetailSchedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailStudent"
          component={DetailStudent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailCourse"
          component={DetailCourse}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CheckSchedule"
          component={CheckSchedule}
          options={{
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableOpacity>
              );
            },
            headerShown: true,
            headerBackVisible: false,
            headerTitle: (props) => {
              return (
                <Text
                  style={{
                    fontFamily: "LexendDeca_600SemiBold",
                    fontSize: 18,
                  }}>
                  {schedule.scheduleFuture.status === "checkin"
                    ? "Check out"
                    : "Check in"}
                </Text>
              );
            },
            headerTitleAlign: "center",
            headerShadowVisible: true,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.0,
              elevation: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="CheckQr"
          component={CheckQr}
          options={{
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableOpacity>
              );
            },
            headerShown: true,
            headerBackVisible: false,
            headerTitle: (props) => (
              <Text
                style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
                {t("Qu??t m?? QR")}
              </Text>
            ),
            headerTitleAlign: "center",
            headerShadowVisible: true,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.0,
              elevation: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="Assessment"
          component={Assessment}
          options={{
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableOpacity>
              );
            },
            headerShown: true,
            headerBackVisible: false,
            headerTitle: (props) => (
              <Text
                style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
                {t("????nh gi?? h???c vi??n")}
              </Text>
            ),
            headerTitleAlign: "center",
            headerShadowVisible: true,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.0,
              elevation: 1.5,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Navigator;
