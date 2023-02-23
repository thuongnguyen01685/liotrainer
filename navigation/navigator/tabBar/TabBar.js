import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Animated,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
//TABBAR
import Home from "../../../screens/home/home";
import Course from "../../../screens/courses/course";
import Account from "../../../screens/account/account";
import Schedule from "../../../screens/schedule/schedule";
//SVG
import SvgHome from "../../../svg/tabbar/svgHome";
import SvgScheduleFocus from "../../../svg/tabbar/svgScheduleFocus";
import SvgSchedule from "../../../svg/tabbar/svgSchedule";
import SvgBooking from "../../../svg/tabbar/svgBooking";
import SvgProfile from "../../../svg/tabbar/svgProfile";
import ScheduleSvg from "../../../svg/schedulesvg";
import { useNavigation } from "@react-navigation/native";
import SvgCourseFocus from "../../../svg/course/SvgCourseFocus";
import SvgCourse from "../../../svg/course/SvgCourse";
import Booking from "../../../screens/booking/Booking";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// create a component
const TabBar = () => {
  const navigation = useNavigation();
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <>
        {routeName == "Home" && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <SvgHome
              focused={selectedTab === "Home" ? "#688338" : "#8E8E8E"}
              fill={selectedTab === "Home" ? "#688338" : "none"}
            />
            <Text
              style={[
                styles.textTab,
                { color: selectedTab === "Home" ? "#688338" : "#8E8E8E" },
              ]}>
              Trang chủ
            </Text>
          </TouchableOpacity>
        )}
        {routeName == "Schedule" && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Schedule")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            {selectedTab === "Schedule" ? (
              <SvgScheduleFocus />
            ) : (
              <SvgSchedule />
            )}
            <Text
              style={[
                styles.textTab,
                { color: selectedTab === "Schedule" ? "#688338" : "#8E8E8E" },
              ]}>
              Lịch dạy
            </Text>
          </TouchableOpacity>
        )}
        {routeName == "Course" && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Course")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            {selectedTab === "Course" ? (
              <Image
                source={require("../../../assets/imghome/gold.png")}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            ) : (
              <Image
                source={require("../../../assets/imghome/goldf.png")}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            )}
            <Text
              style={[
                styles.textTab,
                { color: selectedTab === "Course" ? "#688338" : "#8E8E8E" },
              ]}>
              Khóa học
            </Text>
          </TouchableOpacity>
        )}
        {routeName == "Account" && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Account")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <SvgProfile
              focused={selectedTab === "Account" ? "#688338" : "#8E8E8E"}
              fill={selectedTab === "Account" ? "#688338" : "none"}
            />
            <Text
              style={[
                styles.textTab,
                { color: selectedTab === "Account" ? "#688338" : "#8E8E8E" },
              ]}>
              Tài khoản
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };
  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      strokeWidth={2}
      strokeColor="#d8d8d8"
      height={60}
      circleWidth={50}
      bgColor="#fff"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircle}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Booking")}>
            <Ionicons name={"add-outline"} color="#fff" size={35} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Home"
        component={Home}
        position="LEFT"
        options={{ title: "Trang chủ", headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name="Schedule"
        component={Schedule}
        position="LEFT"
        options={{
          title: "Lịch dạy",
          headerShown: true,
          headerBackVisible: false,
          headerTitle: (props) => (
            <Text
              style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
              Lịch dạy
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

      <CurvedBottomBar.Screen
        name="Course"
        position="RIGHT"
        component={Course}
        options={{
          title: "Khóa học",
          headerShown: true,
          headerBackVisible: false,
          headerTitle: (props) => (
            <Text
              style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
              Khóa học
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
      <CurvedBottomBar.Screen
        name="Account"
        position="RIGHT"
        component={Account}
        options={{
          title: "Tài khoản",
          headerShown: true,
          headerBackVisible: false,
          headerTitle: (props) => (
            <Text
              style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
              Tài khoản
            </Text>
          ),
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.0,
            elevation: 1.5,
          },
        }}
      />
    </CurvedBottomBar.Navigator>
  );
};

export default TabBar;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 50,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    bottom: 30,
    backgroundColor: "rgba(104, 131, 56, 1)",
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
  textTab: {
    fontSize: 10,
    fontFamily: "LexendDeca_500Medium",
  },
});
