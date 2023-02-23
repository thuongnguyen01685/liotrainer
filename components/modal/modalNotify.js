import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Modal from "react-native-modal";

const ModalNotify = (props) => {
  const { showModalNotify, setShowModalNotify } = props;
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      isVisible={showModalNotify}
      backdropColor="#C4C4C4"
      backdropOpacity={0.5}
      onBackdropPress={() => setShowModalNotify(false)}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          padding: 20,
          elevation: 5,
        }}>
        <View style={styles.row}>
          <Image
            source={require("../../assets/notify.png")}
            style={{
              resizeMode: "contain",
              width: 198,
              height: 156,
              marginVertical: 30,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 22,
              color: "#000",
              fontFamily: "LexendDeca_400Regular",
              textAlign: "center",
            }}>
            Thông báo
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 21,
            paddingBottom: 21,
            width: "50%",
          }}>
          <TouchableOpacity
            style={[
              styles.filterNotify,
              {
                backgroundColor: "rgba(246, 253, 234, 1)",
              },
            ]}>
            <Text
              style={{
                fontSize: 15,
                color: "rgba(104, 131, 56, 1)",
                fontFamily: "LexendDeca_600SemiBold",
              }}>
              Tất cả
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.filterNotify,
                {
                  marginHorizontal: 5,
                  backgroundColor: "rgba(236, 236, 236, 1)",
                },
              ]}>
              <Text
                style={{
                  fontSize: 15,
                  color: "rgba(95, 95, 95, 1)",
                  fontFamily: "LexendDeca_600SemiBold",
                }}>
                Chưa đọc
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#ff0000",
                borderRadius: 20,
                height: 15,
                width: 15,
                position: "absolute",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                right: 0,
              }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontFamily: "LexendDeca_400Regular",
                }}>
                1
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.itemNew}>
            <View
              style={{
                justifyContent: "flex-start",
                marginTop: 5,
              }}>
              <Ionicons
                name="md-notifications"
                size={30}
                color="#F2AF4A"
                style={{
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  height: 2,
                  width: 2,
                  padding: 4,
                  backgroundColor: "#CB0505",
                  borderRadius: 50,
                  position: "absolute",
                  top: 4,
                  left: 17,
                }}></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 1)",
                  marginBottom: 3,
                  fontFamily: "LexendDeca_600SemiBold",
                }}>
                Bạn có lịch tập trong ngày hôm nay. Vui lòng kiểm tra.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "rgba(193, 193, 193, 1)",
                  marginBottom: 3,
                  fontFamily: "LexendDeca_400Regular",
                }}>
                1 giờ trước
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
              <View
                style={{
                  backgroundColor: "#688338",
                  padding: 5,
                  height: 5,
                  borderRadius: 50,
                }}></View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(104, 131, 56, 1)",
              width: "90%",
              paddingVertical: 15,
              borderRadius: 30,
              alignItems: "center",
              marginVertical: 5,
            }}
            onPress={() => setShowModalNotify(false)}>
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "LexendDeca_500Medium",
                fontSize: 15,
              }}>
              Đóng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  itemNew: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 15,
    borderRadius: 0,
    backgroundColor: "#fff",
    marginBottom: 23,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  filterNotify: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default ModalNotify;
