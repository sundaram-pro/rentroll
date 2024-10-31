import React from "react";
import { Modal, View, Text, TextInput, Button } from "react-native";

const EditModal = ({ visible, property, onSave, onClose, onChange }) => (
    <Modal visible={visible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-6 rounded-lg w-3/4">
                <Text className="text-xl font-bold">Edit Property</Text>
                <TextInput
                    className="border mt-4 p-2"
                    placeholder="Property Name"
                    value={property?.name}
                    onChangeText={(text) => onChange({ ...property, name: text })}
                />
                <TextInput
                    className="border mt-2 p-2"
                    placeholder="Property Description"
                    value={property?.description}
                    onChangeText={(text) => onChange({ ...property, description: text })}
                />
                <View className="flex-row justify-between mt-4">
                    <Button title="Save" onPress={onSave} />
                    <Button title="Cancel" onPress={onClose} />
                </View>
            </View>
        </View>
    </Modal>
);

export default EditModal;
