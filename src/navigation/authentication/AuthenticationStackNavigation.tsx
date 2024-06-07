import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import LoginScreen from "../../screen/authentication/login/LoginScreen";
import RegisterScreen from "../../screen/authentication/register/RegisterScreen";

export type AuthenticationRootStackParams = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createStackNavigator<AuthenticationRootStackParams>();

export const AuthenticationStackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
