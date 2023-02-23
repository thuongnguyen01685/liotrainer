import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Modal from "react-native-modal";

const status = [
  {
    img: require("../../assets/success.png"),
    title: "Chúc mừng",
    content: "Bạn đã booking thành công",
    button: "Tiếp tục",
  },
  {
    img: require("../../assets/error.png"),
    title: "Khung giờ hết chỗ!",
    content: "Vui lòng chọn khung giờ còn trống",
    button: "Tiếp tục",
  },
  {
    img: require("../../assets/error.png"),
    title: "Hủy lịch?",
    content:
      "Bạn có muốn huỷ lịch? Việc huỷ lịch có thể ảnh hưởng đến nhiều người và bạn nên cân nhắc!",
    button: "Không",
  },
  {
    img: require("../../assets/success.png"),
    title: "Cảm ơn",
    content: "Bạn đã viết đánh giá",
    button: "Về trang chủ",
  },
];

const ModalCheckError = (props) => {
  const navi = useNavigation();
  const { showModalCheck, setShowModalCheck, type } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={showModalCheck}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => {}}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 42,
          elevation: 5,
          height: "auto",
          bottom: 20,
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 36,
          paddingHorizontal: 22,
        }}>
        <Image
          source={status?.[type]?.img}
          style={{
            resizeMode: "contain",
            width: 200,
            height: 150,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
            marginBottom: 44,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
              color: "#000",
              marginVertical: 35,
            }}>
            {status?.[type]?.title}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "LexendDeca_300Light",
              textAlign: "center",
            }}>
            {status?.[type]?.content}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "rgba(104, 131, 56, 1)",
            paddingVertical: 15,
            borderRadius: 30,
            width: "100%",
          }}
          onPress={() => {
            if (type === 3) {
              navi.navigate("account");
            } else {
              setShowModalCheck(false);
            }
          }}>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "LexendDeca_500Medium",
            }}>
            {status?.[type]?.button}
          </Text>
        </TouchableOpacity>
        {type === 2 ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgba(200, 200, 200, 1)",
              paddingVertical: 15,
              borderRadius: 30,
              width: "100%",
              marginTop: 15,
            }}
            onPress={() => setShowModalCheck(false)}>
            <Text
              style={{
                color: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "LexendDeca_500Medium",
              }}>
              Có
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </Modal>
  );
};

export default ModalCheckError;
