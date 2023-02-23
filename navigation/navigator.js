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

const Stack = createNativeStackNavigator();

const Navigator = () => {
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
            title: "Lịch tập",
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
                Lịch tập
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
            headerTitle: (props) => (
              <Text
                style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
                Check In
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
                Quét mã QR
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
