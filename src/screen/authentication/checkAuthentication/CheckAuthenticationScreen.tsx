import React from "react";
import { ActivityIndicator, View } from "react-native";
import CustomTheme from "../../../theme/CustomTheme";
import useCheckAuthenticationController from "./useCheckAuthenticationController";

const { colors } = CustomTheme;

const CheckAuthenticationScreen = () => {
  useCheckAuthenticationController();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

export default CheckAuthenticationScreen;
