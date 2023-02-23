//import liraries
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booking from "../../../screens/booking/booking";
import { Ionicons } from "@expo/vector-icons";
import Reviews from "../../../screens/booking/reviews";
import DetailBooking from "../../../screens/detailBooking/detailBooking";
import Proshop from "../../../screens/product/proshop";
import ListProduct from "../../../screens/product/listProduct";
import DetailProduct from "../../../screens/product/detailProduct";
import Cart from "../../../screens/product/cart";
import TimeBooking from "../../../screens/timeBooking/timeBooking";
const Stack = createNativeStackNavigator();

const optionsDefault = {
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={30}
      color="black"
      style={{ paddingHorizontal: 10 }}
    />
  ),
};
const BookingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="booking"
        component={Booking}
        options={{
          title: "Đặt lịch",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="TimeBooking"
        component={TimeBooking}
        options={{
          title: "Chọn khung giờ",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="reviews"
        component={Reviews}
        options={{
          title: "Đánh giá",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="detailBooking"
        component={DetailBooking}
        options={{
          title: "Chi tiết Booking",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="proshop"
        component={Proshop}
        options={{
          title: "Proshop",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="listProduct"
        component={ListProduct}
        options={{
          title: "Proshop",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="detailProduct"
        component={DetailProduct}
        options={{
          title: "Chi tiết sản phẩm",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          title: "Giỏ hàng",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default BookingScreen;
