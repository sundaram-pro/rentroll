import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimpleButton from "@/components/SimpleButton";
import Login from "./login";

export default function MainScreen() {
  const navigation = useNavigation();

  const HandleSendSubmit = (type: number) => {
    if (type === 1) {
      navigation.navigate("Login"); // replace 'LoginScreen' with your actual login screen name
    } else if (type === 2) {
      navigation.navigate("SignUp"); // replace 'SignUpScreen' with your actual sign-up screen name
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 justify-center items-center px-6 w-screen h-screen">
      {/* Decorative Plant Image */}
      <View className="mb-6">
        <ImageBackground
          source={require("@/assets/images/react-logo.png")} // Use the path to your image file
          resizeMode="contain"
          style={{ width: 200, height: 200 }}
        />
      </View>

      {/* Title and Subtitle */}
      <Text className="text-4xl font-bold text-white mb-2">RentRoll</Text>
      <Text className="text-center text-white mb-6">
        Tenant Property Management System
      </Text>

      {/* Login and Sign Up Buttons */}
      <View className="flex gap-10">
      <Button
          title="SignUp"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
}
