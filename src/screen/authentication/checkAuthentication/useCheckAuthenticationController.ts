import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useStorage } from "../../../utils/useStorage";
import { AuthContext } from "../../../context/authContext/AuthContext";

const useCheckAuthenticationController = () => {
  const { signOut, signIn } = useContext(AuthContext);
  const { getConfigApp } = useStorage();

  useEffect(() => {
    validateUserSesion();
  }, []);

  const validateUserSesion = async () => {
    const data = await getConfigApp();
    if (data) {
      if (data.token) signIn(data.token);
      else signOut();
    } else signOut();
  };

  return {};
};

export default useCheckAuthenticationController;

const styles = StyleSheet.create({});
