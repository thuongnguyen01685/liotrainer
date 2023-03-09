import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { slides, Slide } from "./slides.wellcome";
import Google from "../../svg/google";

const { width } = Dimensions.get("window");

const Wellcome = () => {
  const navi = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 34,
        }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "#688338",
                width: 30,
                height: 8,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 32 }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          marginTop: 45,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#EEF3E5" }]}
        onPress={() => navi.navigate("login")}>
        <Text
          style={{
            fontSize: 20,
            color: "#688338",
            fontFamily: "LexendDeca_400Regular",
          }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.button, { backgroundColor: "#688338" }]}
        onPress={() => navi.navigate("register")}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "LexendDeca_400Regular",
          }}
        >
          Đăng ký
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={[styles.button, { backgroundColor: "#fff" }]}>
        <Google />
        <Text
          style={{
            fontSize: 16,
            color: "#000",
            fontFamily: "LexendDeca_400Regular",
            marginLeft: 10,
          }}
        >
          Tiếp tục bằng Google
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 4,
    borderRadius: 50,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 17,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
export default Wellcome;
