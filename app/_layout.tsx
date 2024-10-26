import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Property from './property/property';
import Home from './home/home';
import Tenant from './tenant/tenant';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="property" component={Property} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tenant" component={Tenant} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}