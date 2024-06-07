import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {}
const TextInputCustom = (props: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput {...props} />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    padding: 14,
    width: "100%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: "white",
  },
});
