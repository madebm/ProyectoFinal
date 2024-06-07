import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { AuthContext } from '../context/authContext/AuthContext';
import CheckAuthenticationScreen from '../screen/authentication/checkAuthentication/CheckAuthenticationScreen';
import { AuthenticationStackNavigation } from './authentication/AuthenticationStackNavigation';
import { HomeTabNavigation } from './home/HomeTabNavigation';

const Stack = createStackNavigator();

const ContainerStackNavigation = () => {
  const {
    authState: { status },
  } = useContext(AuthContext);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {status === 'checking' && (
          <Stack.Screen name='CheckAuthenticationScreen' component={CheckAuthenticationScreen} />
        )}
        {status === 'authenticated' ? (
          <Stack.Screen name='HomeTabNavigation' component={HomeTabNavigation} />
        ) : (
          <Stack.Screen name='AuthenticationStackNavigation' component={AuthenticationStackNavigation} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default ContainerStackNavigation;

const styles = StyleSheet.create({});
