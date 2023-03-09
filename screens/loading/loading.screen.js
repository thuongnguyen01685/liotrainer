import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getInfoUserAction } from "../../store/actions/user.actions";
import { changeLanguageAction } from "../../store/actions/system.action";

export default function LoadingScreen() {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  useFocusEffect(() => {
    const fetchData = async () => {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      if (token) {
        const lang = await AsyncStorage.getItem("lang");
        await dispatch(changeLanguageAction(lang));
        await dispatch(getInfoUserAction(token.trainer_id));
        navigate.navigate("TabBar");
      } else {
        await dispatch(changeLanguageAction("vi"));
        navigate.navigate("wellcome");
      }
    };
    fetchData();
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}>
      <View
        style={{
          marginTop: 200,
          paddingHorizontal: 47,
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Image
          source={require("../../assets/splash.png")}
          style={{ width: 280, height: 280 }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
        }}>
        <Image
          source={require("../../assets/loading.gif")}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
    </View>
  );
}
