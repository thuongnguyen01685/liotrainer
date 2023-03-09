import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import SvgScan from "../../svg/home/svgScan";
import SvgScanQr from "../../svg/svgScanQr";
import ModalSuccessCheck from "../../components/modal/modalSuccessCheck";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  checkQrAction,
  scheduleFutureAction,
} from "../../store/actions/scheduleAction";
import ModalFailCheck from "../../components/modal/modalFailCheck";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

// create a component
const CheckQr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showModalCheckQr, setShowModalCheckQr] = useState(false);
  const [showModalFailQr, setShowModalFailQr] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const { schedule } = useSelector((state) => state);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    if (schedule.scheduleFuture.status === "pending") {
      const res = await dispatch(checkQrAction(data, navigation, "checkin"));

      if (res?.["academy.trainer.booking"]) {
        setTitle(t("Check-in thành công"));
        setContent(t("Tiếp tục tập luyện thật chăm chỉ nào!"));
        dispatch(scheduleFutureAction(navigation));
        setShowModalCheckQr(true);
      } else {
        setShowModalFailQr(true);
      }
    } else {
      const res = await dispatch(checkQrAction(data, navigation, "checkout"));

      if (res?.["academy.trainer.booking"]) {
        setTitle(t("Check-out thành công"));
        setContent(
          t("Bạn đã tập luyện rất chăm chỉ, hãy cố gắng hơn nữa nhé!")
        );
        dispatch(scheduleFutureAction(navigation));
        setShowModalCheckQr(true);
      } else {
        setShowModalFailQr(true);
      }
    }
  };

  if (hasPermission === null) {
    return <Text style={styles.textQR}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.textQR}>No access to camera</Text>;
  }

  const handleCheckQr = async () => {
    setScanned(false);
  };
  return (
    <View style={styles.container}>
      <ModalSuccessCheck
        showModalSuccess={showModalCheckQr}
        setShowModalSuccess={setShowModalCheckQr}
        titleName={title}
        ContentBody={content}
        setScanned={setScanned}
      />
      <ModalFailCheck
        showModalFail={showModalFailQr}
        setShowModalFail={setShowModalFailQr}
        titleName={t("Check-in thất bại")}
        ContentBody={t("Xin vui lòng thử lại!")}
        setScanned={setScanned}
      />
      <Text style={styles.textTitle}>
        {t("Quét mã QR bằng thiết bị của bạn để check-in")}
      </Text>
      <View
        style={{
          width: 300,
          height: 300,
          overflow: "hidden",
          marginTop: 40,
          borderRadius: 15,
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: 300, height: 400 }}
        />
      </View>

      <TouchableOpacity
        title={"Tap to Scan Again"}
        onPress={handleCheckQr}
        style={{
          marginTop: 40,
          backgroundColor: "#688338",
          padding: 10,
          borderRadius: 50,
        }}>
        <SvgScanQr size={30} fill={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 14,
    fontFamily: "LexendDeca_500Medium",
    color: "rgba(0, 0, 0, 1)",
    alignSelf: "center",
    marginTop: 40,
    zIndex: 1,
  },
  textQR: {
    fontSize: 14,
    fontFamily: "LexendDeca_500Medium",
    color: "rgba(0, 0, 0, 1)",
  },
});

export default CheckQr;
