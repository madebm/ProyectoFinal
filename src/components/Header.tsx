import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

interface Props {
  goBack: () => void;
}
const Header = ({}: Props) => {
  return (
    <View style={{ width: "100%" }}>
      <Ionicons name="arrow-back-outline" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
