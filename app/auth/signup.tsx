import AcceptButton from "@/components/AcceptButton";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Link } from "@react-navigation/native";

export default function SignUp() {
  const Stack = createStackNavigator();
  const [emailId, setEmailId] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 justify-center items-center px-6 w-full h-full">
      <Text>Email id</Text>
      <TextInput></TextInput>
      <Text>Password</Text>
      <TextInput />
      <Text>Re-Password</Text>
      <TextInput />
      <AcceptButton onPress={handleSubmit} title="Sign Up" />
      <Text>
        Already have an account ? <Link to={{ screen: "Login" }}>Login</Link>
      </Text>
    </SafeAreaView>
  );
}
