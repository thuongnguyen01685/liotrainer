//import liraries
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const options = (title, iconLeft, nameNavi, iconRight) => {
  return {
    headerShown: true,
    headerBackVisible: false,
    headerLeft: (props) => {
      const navi = useNavigation();
      if (iconLeft) {
        return (
          <TouchableOpacity onPress={() => navi.goBack()}>
            <Ionicons name="chevron-back" size={25} />
          </TouchableOpacity>
        );
      }
    },
    headerTitle: (props) => {
      return (
        <Text style={{ fontFamily: "LexendDeca_600SemiBold", fontSize: 18 }}>
          {title}
        </Text>
      );
    },
    headerTitleAlign: "center",
    headerRight: (props) => {
      const navi = useNavigation();
      if (iconRight) {
        return (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navi.navigate(nameNavi)}
          >
            {iconRight}
          </TouchableOpacity>
        );
      }
    },
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
  };
};
