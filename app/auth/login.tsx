import AcceptButton from "@/components/AcceptButton";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Link } from "@react-navigation/native";

export default function Login() {
  const Stack = createStackNavigator();
  const [emailId, setEmailId] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 justify-center items-center px-6 w-full h-full">
      <View>
        <Text>Email id</Text>
        <TextInput />
        <Text>Password</Text>
        <TextInput />
        <AcceptButton onPress={handleSubmit} title="Login" />
        <Text>
          Don't have an account ? <Link to={{ screen: "SignUp" }}>SignUp</Link>
        </Text>
        <Text className="text-center">
          <Link to={{ screen: "ForgotPassword" }}>Forgot Password ?</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
