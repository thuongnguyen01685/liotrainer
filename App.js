import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import Navigator from "./navigation/navigator";
import store from "./store/reducers/root.reducer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Alert, Appearance } from "react-native";
import {
  useFonts,
  LexendDeca_100Thin,
  LexendDeca_200ExtraLight,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_600SemiBold,
  LexendDeca_700Bold,
  LexendDeca_800ExtraBold,
  LexendDeca_900Black,
} from "@expo-google-fonts/lexend-deca";
import * as Updates from "expo-updates";
import { useTranslation } from "react-i18next";
import "./lang/i18n";

export default function App() {
  let [fontsLoaded] = useFonts({
    LexendDeca_100Thin,
    LexendDeca_200ExtraLight,
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_600SemiBold,
    LexendDeca_700Bold,
    LexendDeca_800ExtraBold,
    LexendDeca_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  Updates.checkForUpdateAsync().then((update) => {
    if (update.isAvailable) {
      Updates.fetchUpdateAsync().then((rs) => {
        if (rs.isNew) {
          Alert.alert(
            "Update",
            "Chương trình có cập nhật mới. Bạn hãy khởi động lại chương trình để áp dụng phiên bản mới nhất!",
            [{ text: "Restart", onPress: () => Updates.reloadAsync() }],
          );
        }
      });
    }
  });
  let style_status_bar =
    Appearance.getColorScheme() === "light" ? "dark" : "light";
  return (
    <MenuProvider>
      <Provider store={store}>
        <StatusBar style={style_status_bar} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigator />
        </GestureHandlerRootView>
      </Provider>
    </MenuProvider>
  );
}
