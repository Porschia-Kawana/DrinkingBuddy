import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity
            style={{ backgroundColor: '#003566', padding: 10, borderTopLeftRadius: 6, borderBottomRightRadius: 6 }}
            onPress={() => onPress()}
        >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};