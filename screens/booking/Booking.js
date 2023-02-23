import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { itemEpisodePackAction } from "../../store/actions/episodePack.actions";
import {
  bookingAction,
  listTimeBookingAction,
} from "../../store/actions/booking.actions";
import ChooseMonthTimeBooking from "./timeBooking/chooseMonth/chooseMonth.timeBooking";
import ChooseDayTimeBooking from "./timeBooking/chooseDay/chooseDay.timeBooking";
import ChooseTimeBooking from "./timeBooking/chooseTime/chooseTime.timeBooking";
import ModalALert from "../../components/modal/modalAlert";
import ModalBookingSuccess from "../../components/modal/modalBookingSuccess";
import ItemBooking from "./itemBooking";
import ModalSuccessCheck from "../../components/modal/modalSuccessCheck";

export default function Booking(props) {
  const navi = useNavigation();
  //redux
  const dispatch = useDispatch();
  const { changeToken } = useSelector((state) => state.refreshToken);
  //state

  const [listTimeBooking, setListTimeBooking] = useState();
  const [month, setMonth] = useState(moment().format());
  const [day, setDay] = useState(moment().format());
  const [itemBooking, setItemBooking] = useState();
  const [note, setNote] = useState();

  const [itemSchedule, setItemSchedule] = useState();

  const [title, setTitle] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [refreshing, setRefreshing] = useState(true);

  //modal
  const [showModalBookingSuccess, setShowModalBookingSuccess] = useState(true);

  const notify = {
    1: "Ngày booking phải lớn hơn ngày hôm nay",
    2: "Không đủ slot để đăng ký",
    3: "Học viên đã đăng ký đủ số buổi trong tuần",
    4: "Học viên đã đăng ký lịch này trong tuần",
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        if (refreshing) {
          let temp = await AsyncStorage.getItem("token");
          const token = await JSON.parse(temp);
          if (token) {
            const res1 = await dispatch(itemEpisodePackAction(navi));
            let time = "";
            if (
              moment(month).format("YYYY-MM") +
                "-" +
                moment(day).format("DD") ===
              moment().format("YYYY-MM-DD")
            ) {
              time =
                moment(month).format("YYYY-MM") +
                "-" +
                moment(day).format("DD") +
                " " +
                moment().format("HH:mm:ss");
            } else {
              time =
                moment(month).format("YYYY-MM") +
                "-" +
                moment(day).format("DD") +
                " 00:00:00";
            }
            // const res = await dispatch(
            //   listTimeBookingAction(
            //     idLocation,
            //     time,
            //     res1?.program_id?.[0],
            //     navi
            //   )
            // );
            // setListTimeBooking(res);
          }
          setRefreshing(false);
        }
      };
      fetchData();
    }, [changeToken, day, month, refreshing])
  );
  const booking = async () => {
    if (itemBooking) {
      let temp = await AsyncStorage.getItem("token");
      const token = await JSON.parse(temp);
      // const res = await dispatch(
      //   bookingAction(
      //     {
      //       location_id: idLocation,
      //       location_detail_id: "",
      //       trainee_id: token.trainee_id,
      //       course_id: itemBooking.course_id[0],
      //       num_of_lession: "",
      //       trainer_id: itemBooking.trainer_id[0],
      //       date: itemBooking.date,
      //       start_time: itemBooking.start_time,
      //       end_time: itemBooking.end_time,
      //       note,
      //       schedule_booking_id: itemBooking.id,
      //     },
      //     navi
      //   )
      // );
      // if (notify[res?.error?.message]) {
      //   setTitle(notify[res?.error?.message]);
      //   setShowModalAlert(true);
      // } else {
      //   await setShowModalBookingSuccess(true);
      //   await setItemSchedule(res);
      // }
    }
  };
  return (
    <View style={styles.container}>
      <ModalSuccessCheck
        showModalSuccess={showModalBookingSuccess}
        setShowModalSuccess={setShowModalBookingSuccess}
        titleName={"Đặt lịch thành công"}
        ContentBody={"Vui lòng đến tập đúng như thời gian đã đặt"}
      />
      {showModalAlert && (
        <ModalALert
          showModalAlert={showModalAlert}
          setShowModalAlert={setShowModalAlert}
          title={title}
        />
      )}
      <ChooseMonthTimeBooking
        month={month}
        setMonth={setMonth}
        setDay={setDay}
        setRefreshing={setRefreshing}
      />
      <ChooseDayTimeBooking
        month={month}
        day={day}
        setDay={setDay}
        setRefreshing={setRefreshing}
      />
      {/* <ChooseTimeBooking
        listTimeBooking={listTimeBooking}
        setItemBooking={setItemBooking}
        itemBooking={itemBooking}
        refreshing={refreshing}
        setRefreshing={setRefreshing}
      /> */}
      <View style={{ marginBottom: "85%" }}>
        <FlatList
          data={Array(4).fill("")}
          renderItem={({ item, index }) => <ItemBooking key={index} />}
        />
      </View>

      <View style={styles.viewButton}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(238, 238, 238, 1)",
            paddingVertical: 15,
            paddingHorizontal: 26,
            borderRadius: 20,
            marginBottom: 15,
          }}>
          <TextInput
            maxLength={52}
            style={{
              width: "90%",
              fontSize: 14,
              fontFamily: "LexendDeca_400Regular",
            }}
            placeholder={"Thêm ghi chú"}
            onChangeText={(note) => setNote(note)}></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#688338" }]}
          onPress={() => booking()}>
          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
              fontFamily: "LexendDeca_400Regular",
            }}>
            Xác nhận đặt lịch
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 14,
    marginHorizontal: 46,
    marginBottom: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewButton: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 19,
    paddingVertical: 20,
  },
});
