import React from "react";
import { Modal, View, Text, Button } from "react-native";

const DeleteModal = ({ visible, property, onDelete, onClose }) => (
    <Modal visible={visible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-6 rounded-lg w-3/4">
                <Text className="text-lg font-bold">Delete Property</Text>
                <Text className="text-gray-700 mt-2">
                    Are you sure you want to delete {property?.name}?
                </Text>
                <View className="flex-row justify-between mt-4">
                    <Button title="Delete" color="red" onPress={onDelete} />
                    <Button title="Cancel" onPress={onClose} />
                </View>
            </View>
        </View>
    </Modal>
);

export default DeleteModal;
