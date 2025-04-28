import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Turma() {
    const { nomeDaTurma } = useLocalSearchParams();
    return (
        <View>
            <Text >Bem-vindo à turma: {nomeDaTurma}</Text>
        </View>
    );
};