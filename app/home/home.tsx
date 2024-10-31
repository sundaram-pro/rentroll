import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    // Dummy data for properties
    const [properties, setProperties] = useState([
        { id: 1, name: "Ocean View Villa" },
        { id: 2, name: "Mountain Retreat Cabin" },
        { id: 3, name: "City Center Apartment" },
        { id: 4, name: "Cozy Suburban House" }
    ]);

    // Handle delete function
    const handleDelete = (propertyId) => {
        Alert.alert(
            "Delete Property",
            "Are you sure you want to delete this property?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        setProperties(properties.filter((property) => property.id !== propertyId));
                    },
                    style: "destructive"
                }
            ]
        );
    };

    // Render each property item
    const renderProperty = ({ item }) => (
        <View className="bg-white p-4 mb-4 rounded-lg shadow-md w-full">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <View className="flex-row mt-2 space-x-4">
                <TouchableOpacity
                    onPress={() => navigation.navigate("ViewProperty", { id: item.id })}
                    className="bg-blue-500 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white">View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("EditProperty", { id: item.id })}
                    className="bg-yellow-500 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white">Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                    className="bg-red-500 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white">Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-8">
            <FlatList
                data={properties}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProperty}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </SafeAreaView>
    );
}
