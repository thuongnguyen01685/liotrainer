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

// create a component
const CheckQr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showModalCheckQr, setShowModalCheckQr] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text style={styles.textQR}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.textQR}>No access to camera</Text>;
  }

  const handleCheckQr = () => {
    setShowModalCheckQr(true);
    setScanned(false);
  };
  return (
    <View style={styles.container}>
      <ModalSuccessCheck
        showModalSuccess={showModalCheckQr}
        setShowModalSuccess={setShowModalCheckQr}
        titleName={"Check-in thành công"}
        ContentBody={"Tiếp tục tập luyện thật chăm chỉ nào!"}
      />
      <Text style={styles.textTitle}>
        Quét mã QR bằng thiết bị của bạn để check-in
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
      {scanned || (
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
      )}
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
