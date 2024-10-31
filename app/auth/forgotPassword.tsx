import AcceptButton from "@/components/AcceptButton";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Link } from "@react-navigation/native";

export default function ForgotPassword() {
  const Stack = createStackNavigator();

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 justify-center items-center px-6 w-full h-full">
      <View>Forgot password</View>
    </SafeAreaView>
  );
}
