import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { itemEpisodePackAction } from "../../store/actions/episodePack.actions";
import {
  bookingAction,
  detailBookingAction,
  getListStudentTodayAction,
  listBookingAction,
} from "../../store/actions/booking.actions";
import ChooseMonthTimeBooking from "./timeBooking/chooseMonth/chooseMonth.timeBooking";
import ChooseDayTimeBooking from "./timeBooking/chooseDay/chooseDay.timeBooking";
import ChooseTimeBooking from "./timeBooking/chooseTime/chooseTime.timeBooking";
import ModalALert from "../../components/modal/modalAlert";
import ModalBookingSuccess from "../../components/modal/modalBookingSuccess";
import ItemBooking from "./itemBooking";
import ModalSuccessCheck from "../../components/modal/modalSuccessCheck";
import { formatDateDisplays } from "../../utils/datetime";
import { Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import {
  scheduleFutureAction,
  scheduleListAction,
} from "../../store/actions/scheduleAction";

const { width, height } = Dimensions.get("window");
export default function Booking(props) {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();
  //redux
  const dispatch = useDispatch();
  const { changeToken } = useSelector((state) => state.refreshToken);

  //state

  const [month, setMonth] = useState(moment().format());
  const [day, setDay] = useState(moment().format());

  const [note, setNote] = useState("");

  const [title, setTitle] = useState("");
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [refreshing, setRefreshing] = useState(true);

  const [dataBooking, setDataBooking] = useState([]);
  const [timex, setTimex] = useState("");
  const [dataDetail, setDataDetail] = useState([]);
  const [idBooking, setIdBooking] = useState("");
  const [check, setCheck] = useState(true);

  //modal
  const [showModalBookingSuccess, setShowModalBookingSuccess] = useState(false);

  const notify = {
    1: "Ng??y booking ph???i l???n h??n ng??y h??m nay",
    2: "Kh??ng ????? slot ????? ????ng k??",
    3: "H???c vi??n ???? ????ng k?? ????? s??? bu???i trong tu???n",
    4: "H???c vi??n ???? ????ng k?? l???ch n??y trong tu???n",
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        if (refreshing) {
          let temp = await AsyncStorage.getItem("token");
          const token = await JSON.parse(temp);
          if (token) {
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
              setTimex(
                moment(month).format("YYYY-MM") +
                  "-" +
                  moment(day).format("DD") +
                  " " +
                  moment().format("HH:mm:ss")
              );
            } else {
              time =
                moment(month).format("YYYY-MM") +
                "-" +
                moment(day).format("DD") +
                " 00:00:00";
              setTimex(
                moment(month).format("YYYY-MM") +
                  "-" +
                  moment(day).format("DD") +
                  " 00:00:00"
              );
            }

            const res = await dispatch(listBookingAction(time, navigation));
            setCheck(true);
            if (res?.length > 0) {
              setDataBooking(res);
            } else {
              if (res) {
                setDataBooking([res]);
              } else {
                setDataBooking([]);
              }
            }
          }
          setRefreshing(false);
        }
      };
      fetchData();
    }, [changeToken, day, month, refreshing])
  );

  const handleBooking = async (id) => {
    setIdBooking(id);
    setCheck(!check);
    const resDetail = await dispatch(
      detailBookingAction(id, timex, navigation)
    );
    if (resDetail) {
      setDataDetail(resDetail);
    }
  };

  const handlePostBooking = async () => {
    let temp = await AsyncStorage.getItem("token");
    const token = await JSON.parse(temp);
    const vals = {
      location_id: dataDetail.location_id[0],
      location_detail_id: dataDetail.location_detail_id[0],
      program_id: dataDetail.program_id[0],
      course_id: dataDetail.course_id[0],
      trainer_id: token.trainer_id,
      date: dataDetail.date,
      start_time: dataDetail.start_time,
      end_time: dataDetail.end_time,
      note: note,
      schedule_booking_id: dataDetail.id,
    };
    const res = await dispatch(bookingAction(vals, navigation));
    if (res) {
      setShowModalBookingSuccess(true);
      await dispatch(scheduleFutureAction(navigation));
      await dispatch(scheduleListAction(navigation));
      await dispatch(getListStudentTodayAction(navigation));
    }
  };

  return (
    <View style={styles.container}>
      <ModalSuccessCheck
        showModalSuccess={showModalBookingSuccess}
        setShowModalSuccess={setShowModalBookingSuccess}
        titleName={t("?????t l???ch th??nh c??ng")}
        ContentBody={t("Vui l??ng ?????n t???p ????ng nh?? th???i gian ???? ?????t")}
        goHome={true}
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

      <View style={{ marginBottom: "85%" }}>
        {dataBooking?.length > 0 ? (
          <FlatList
            data={dataBooking}
            renderItem={({ item, index }) => (
              <ItemBooking
                key={index}
                item={item}
                handleBooking={handleBooking}
                idBooking={idBooking}
                check={check}
              />
            )}
            refreshControl={<RefreshControl refreshing={refreshing} />}
          />
        ) : (
          <View style={{ alignSelf: "center", marginVertical: height * 0.15 }}>
            <Image
              source={require("../../assets/notdata.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text
              style={{
                fontFamily: "LexendDeca_500Medium",
                fontSize: 12,
                color: "#000",
                opacity: 0.5,
                marginTop: 5,
              }}>
              {t("Kh??ng c?? d??? li???u...")}
            </Text>
          </View>
        )}
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
            value={note}
            placeholder={t("Th??m ghi ch??...")}
            onChangeText={(note) => setNote(note)}
          />
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#688338" }]}
          onPress={handlePostBooking}
          disabled={check}>
          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
              fontFamily: "LexendDeca_400Regular",
            }}>
            {t("X??c nh???n ?????t l???ch")}
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
