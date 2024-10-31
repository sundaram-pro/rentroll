import React from "react";
import { Modal, View, Text, Button } from "react-native";

const ViewModal = ({ visible, property, onClose }) => (
    <Modal visible={visible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-6 rounded-lg w-3/4">
                <Text className="text-xl font-bold">{property?.name}</Text>
                <Text className="text-gray-700 mt-2">{property?.description}</Text>
                <Button title="Close" onPress={onClose} />
            </View>
        </View>
    </Modal>
);

export default ViewModal;
