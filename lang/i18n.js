import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import vi from "./vi.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getLanguage = async () => {
  let language = await AsyncStorage.getItem("lang");

  return language;
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "",
  fallbackLng: "vi",
  resources: {
    vi: vi,
    en: en,
  },
  interpolation: {
    escapeValue: false,
  },
});

getLanguage().then((language) => {
  i18n.changeLanguage(language);
});

export default i18n;
