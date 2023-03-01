//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalSuccessCheck from "../../components/modal/modalSuccessCheck";
import ItemCheckSchedule from "../home/calendarTeach/ItemCheckSchedule";
import { useSelector } from "react-redux";

// create a component
const CheckSchedule = () => {
  const [showModalCheckIn, setShowModalCheckIn] = useState(false);
  const [showModalCheckout, setShowModalCheckout] = useState(false);
  const { schedule } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      {showModalCheckIn && (
        <ModalSuccessCheck
          showModalSuccess={showModalCheckIn}
          setShowModalSuccess={setShowModalCheckIn}
          titleName={"Check-in thành công"}
          ContentBody={"Tiếp tục tập luyện thật chăm chỉ nào!"}
        />
      )}

      {showModalCheckout && (
        <ModalSuccessCheck
          showModalSuccess={showModalCheckout}
          setShowModalSuccess={setShowModalCheckout}
          titleName={"Check-out thành công"}
          ContentBody={
            "Bạn đã tập luyện rất chăm chỉ, hãy cố gắng hơn nữa nhé!"
          }
        />
      )}

      <View style={{ paddingTop: 20 }}>
        <ItemCheckSchedule
          showModalSuccess={showModalCheckIn}
          setShowModalSuccess={setShowModalCheckIn}
          showModalCheckout={showModalCheckout}
          setShowModalCheckout={setShowModalCheckout}
          item={schedule.scheduleFuture}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default CheckSchedule;
