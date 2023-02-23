import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import moment from "moment";
import Star from "../../../../svg/star";
import ModalCheck from "../../../../components/modal/modalCheck";

const w = Dimensions.get("window").width;
export default function ChooseTimeBooking(props) {
  const {
    listTimeBooking,
    setItemBooking,
    itemBooking,
    refreshing,
    setRefreshing,
  } = props;
  const [showModalCheck, setShowModalCheck] = useState(false);

  const showListTimeBooking = (listTimeBooking) => {
    let result = null;
    if (listTimeBooking) {
      const temp =
        listTimeBooking?.length > 0 ? listTimeBooking : [listTimeBooking];
      result = temp.map((itemTimeBooking, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.viewLocation,
              {
                backgroundColor:
                  itemBooking?.id === itemTimeBooking.id
                    ? "#E8F2D6"
                    : itemTimeBooking?.slot !== 0
                    ? "#fff"
                    : "#D4D4D4",
              },
            ]}
            disabled={itemTimeBooking?.slot === 0 ? true : false}
            onPress={() =>
              setItemBooking(
                itemBooking?.id === itemTimeBooking.id ? "" : itemTimeBooking
              )
            }>
            <View
              style={{
                marginRight: 45,
                flexDirection: "column",
                justifyContent: "center",
              }}>
              <Text
                style={{ fontSize: 34, fontFamily: "LexendDeca_400Regular" }}>
                {moment(itemTimeBooking?.date_start).format("HH:mm")}
              </Text>
              <Text
                style={{ fontSize: 11, fontFamily: "LexendDeca_400Regular" }}>
                Còn trống: {itemTimeBooking?.slot}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../assets/splash.png")}
                style={styles.imgItem}
              />
              <View>
                <Text
                  style={{ fontSize: 12, fontFamily: "LexendDeca_500Medium" }}>
                  {itemTimeBooking?.trainer_id?.[1]}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Star size="14" />
                  <Star size="14" />
                  <Star size="14" />
                  <Star size="14" />
                  <Star size="14" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      });
    }
    return result;
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 170 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      }>
      {showModalCheck ? (
        <ModalCheck
          showModalCheck={showModalCheck}
          setShowModalCheck={setShowModalCheck}
        />
      ) : null}
      {showListTimeBooking(listTimeBooking)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewLocation: {
    height: 93,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 3,
    width: w - 40,
    paddingHorizontal: 23,
    paddingVertical: 18,
    marginBottom: 7,
    marginTop: 5,
  },
  imgItem: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    borderRadius: 50,
    marginRight: 6,
  },
});
