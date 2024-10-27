import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Property from './property/property';
import Home from './home/home';
import Tenant from './tenant/tenant';
import Login from './auth/login'; // Import your login screen
import "../assets/css/global.css";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check user authentication status from local storage, AsyncStorage, or API
  //   // For now, it’s set to false for demonstration; replace with actual check
  //   const checkAuth = async () => {
  //     // const user = await AsyncStorage.getItem('userToken');
  //     // setIsLoggedIn(!!user);
  //     setIsLoggedIn(false); // Simulating the user as not logged in
  //   };
  //   checkAuth();
  // }, []);

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Property" component={Property} options={{ headerShown: false }} />
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="Tenant" component={Tenant} options={{ headerShown: false }} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          {/* You can add more authentication screens here if needed */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
