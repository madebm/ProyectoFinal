import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardStackNavigation } from "./dashboard/DashboardStackNavigation";
import CustomTheme from "../../theme/CustomTheme";
import ProfileScreen from "../../screen/home/ProfileScreen";

const { colors } = CustomTheme;
export type DashboardRootTabParams = {
  HomeStackNavigation: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<DashboardRootTabParams>();

export const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStackNavigation"
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={27}
              color={focused ? colors.primary : "#ccc"}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={27}
              color={focused ? colors.primary : "#ccc"}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
