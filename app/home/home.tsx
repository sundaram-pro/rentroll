import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native";
import ViewModal from "../../components/home/home/ViewModal";
import EditModal from "../../components/home/home/EditModal";
import DeleteModal from "../../components/home/home/DeleteModal";

export default function Home() {
    const [properties, setProperties] = useState([
        { id: 1, name: "Ocean View Villa", description: "A beautiful villa by the ocean." },
        { id: 2, name: "Mountain Retreat Cabin", description: "A cozy cabin in the mountains." },
        { id: 3, name: "City Center Apartment", description: "An apartment in the heart of the city." },
        { id: 4, name: "Cozy Suburban House", description: "A house in a quiet suburb." }
    ]);

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [viewModalVisible, setViewModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleDelete = () => {
        setProperties(properties.filter((property) => property.id !== selectedProperty.id));
        setDeleteModalVisible(false);
    };

    const handleSave = () => {
        setProperties(properties.map((property) => 
            property.id === selectedProperty.id ? selectedProperty : property
        ));
        setEditModalVisible(false);
    };

    const renderProperty = ({ item }) => (
        <View className="bg-white p-4 mb-4 rounded-lg shadow-md w-full">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <View className="flex-row mt-2 space-x-4">
                <TouchableOpacity
                    onPress={() => { setSelectedProperty(item); setViewModalVisible(true); }}
                    className="bg-blue-500 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white">View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedProperty(item); setEditModalVisible(true); }}
                    className="bg-yellow-500 py-2 px-4 rounded-lg"
                >
                    <Text className="text-white">Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedProperty(item); setDeleteModalVisible(true); }}
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

            {/* Modals */}
            <ViewModal 
                visible={viewModalVisible} 
                property={selectedProperty} 
                onClose={() => setViewModalVisible(false)} 
            />
            <EditModal 
                visible={editModalVisible} 
                property={selectedProperty} 
                onSave={handleSave} 
                onClose={() => setEditModalVisible(false)} 
                onChange={setSelectedProperty}
            />
            <DeleteModal 
                visible={deleteModalVisible} 
                property={selectedProperty} 
                onDelete={handleDelete} 
                onClose={() => setDeleteModalVisible(false)} 
            />
        </SafeAreaView>
    );
}
