import AcceptButton from '@/components/AcceptButton';
import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, TextInput} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp(){
    
    const Stack = createStackNavigator();
    const [emailId, setEmailId] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit = ()=>{

    }

    return(
        <SafeAreaView>
            <Text>
                Email id
            </Text>
            <TextInput>

            </TextInput>
            <Text>
                Password
            </Text>
            <TextInput/>
            <Text>
                Re-Password
            </Text>
            <TextInput/>
            <AcceptButton onPress={handleSubmit} title='Sign Up'/>
        </SafeAreaView>
    )
}