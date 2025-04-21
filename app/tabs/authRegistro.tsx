import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Link, Stack } from 'expo-router';
import AuthHeader from '../../components/Header/AuthHeader';

const authRegistro = () => {
    return(
        <>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Stack.Screen options={{ headerShown: false }} />
            <View>
                <AuthHeader title='Registre-se' subtitle='Crie a sua conta' href="/"></AuthHeader>
                <Link href="/tabs/criarTurma">
                    <Text>Entre</Text>
                </Link>
            </View>
        </>
    );
}

export default authRegistro;