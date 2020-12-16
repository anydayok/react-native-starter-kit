import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import WelcomeScreen from './screens/Welcome';
import MainScreen from './screens/Main';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import ResetPasswordScreen from './screens/ResetPassword';
import {AUTH_TOKEN_KEY} from './constants/data';

const HomeIcon = require('./assets/icons/home.png');
const UserIcon = require('./assets/icons/user.png');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#000000',
        inactiveTintColor: 'rgba(0,0,0,0.47)',
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{...iconStyles.icons, tintColor: color}}
              source={HomeIcon}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{...iconStyles.icons, tintColor: color}}
              source={UserIcon}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(screen) {
  navigationRef.current?.reset({
    routes: [{name: screen}],
  });
}

export default function Navigation() {
  // const [token, getToken] = useState(null);
  // useEffect(() => {
  //   const checkTokenAsync = async () => {
  //     let userToken;
  //     try {
  //       userToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     getToken(userToken);
  //   };
  //
  //   checkTokenAsync();
  // }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const iconStyles = StyleSheet.create({
  icons: {
    width: 20,
    height: 20,
  },
});
