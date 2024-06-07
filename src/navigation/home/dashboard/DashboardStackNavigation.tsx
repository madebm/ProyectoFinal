import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import SellScreen from '../../../screen/home/Sell/SellScreen';
import BuyScreen from '../../../screen/home/buy/BuyScreen';
import HomeScreen from '../../../screen/home/home/HomeScreen';

export type DashboardRootStackParams = {
  HomeScreen: undefined;
  BuyScreen: undefined;
  SellScreen: undefined;
};

const Stack = createStackNavigator<DashboardRootStackParams>();

export const DashboardStackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='BuyScreen'
          component={BuyScreen}
          options={{
            headerShown: true,
            title: '',
          }}
        />
        <Stack.Screen
          name='SellScreen'
          component={SellScreen}
          options={{
            headerShown: true,
            title: '',
          }}
        />
      </Stack.Navigator>
    </>
  );
};
