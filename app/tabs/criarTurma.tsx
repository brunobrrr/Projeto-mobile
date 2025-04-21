import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Link, Stack } from 'expo-router';
import AuthHeader from '../../components/Header/AuthHeader';
import LinkButton from '@/components/ui/LinkButton';

const criarTurma = () => {
    return(
        <>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Stack.Screen options={{ headerShown: false }} />
            <View>
                <AuthHeader title='Entre na sua conta' subtitle='' href="/"></AuthHeader>
                <LinkButton title='Entrar' href="/tabs/comunidade"></LinkButton>
                <Link href="/tabs/authRegistro">
                    <Text>Cadastre-se</Text>
                </Link>
            </View>
        </>
    );
}

export default criarTurma;