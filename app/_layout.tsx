import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Property from "./property/property";
import Home from "./home/home";
import Tenant from "./tenant/tenant";
import Login from "./auth/login";
import MainScreen from "./auth/mainScreen";
import ForgotPassword from "./auth/forgotPassword";
import SignUp from "./auth/signup";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import "../assets/css/global.css";
import { View, Text, ImageBackground } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Keep the splash screen visible while resources load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        //We will add login fetch request from here, for now we are sumilating the request
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <NavigationContainer independent={true}>
        {isLoggedIn ? (
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Property"
              component={Property}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Tenant"
              component={Tenant}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            {/* The splash screen will show until the app is ready */}
            <Stack.Screen
              name="Splash"
              component={() => (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onLayout={onLayoutRootView}
                >
                  <ImageBackground
                source={require("@/assets/images/react-logo.png")} // Use the path to your image file
                resizeMode="contain"
                style={{ width: 200, height: 200 }}
              />
                </View>
              )}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            {/* Add more authentication screens here if needed */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  } else if (appIsReady) {
    return (
      <NavigationContainer independent={true}>
        {isLoggedIn ? (
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Property"
              component={Property}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Tenant"
              component={Tenant}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            {/* Add more authentication screens here if needed */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
