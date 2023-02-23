//import liraries
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../../../screens/loading/loading.screen";
import Wellcome from "../../../screens/wellcome/wellcome";
import Login from "../../../screens/auth/login";
import ForgotPass from "../../../screens/auth/forgotPass";
import Register from "../../../screens/auth/register";
import VerifyOtp from "../../../screens/auth/VerifyOtp";
const Stack = createNativeStackNavigator();

const StartScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wellcome"
        component={Wellcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPass"
        component={ForgotPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="verifyOtp"
        component={VerifyOtp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StartScreen;
