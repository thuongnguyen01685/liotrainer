import { Image, StyleSheet, View, Text, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const slides = [
  {
    id: "1",
    image: require("../../assets/wellcome/rectangle1.jpg"),
  },
  {
    id: "2",
    image: require("../../assets/wellcome/rectangle2.jpg"),
  },
  {
    id: "3",
    image: require("../../assets/wellcome/rectangle3.jpg"),
  },
];

export const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ width, height: height * 0.4, resizeMode: "cover" }}
      />
      <View style={{ width }}>
        <Text style={styles.title}>
          Chào mừng đến Học viện đào tạo golf -{" "}
          <Text style={{ color: "#688338" }}>The Golf House Academy</Text>
        </Text>
        <Text style={styles.subtitle}>
          Ứng dụng hàng đầu về Golf và đào tạo Golf cho người Việt.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    color: "#000",
    fontSize: 14,
    marginTop: 16,
    marginHorizontal: 46,
    textAlign: "center",
    lineHeight: 18,
    fontFamily: "LexendDeca_400Regular",
  },
  title: {
    color: "#000",
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 24,
    fontFamily: "LexendDeca_600SemiBold",
    textAlign: "center",
    marginTop: 16,
    marginHorizontal: 25,
  },
});
