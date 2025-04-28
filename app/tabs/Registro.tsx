import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import AuthHeader from '../../components/Header/AuthHeader';

const Registro = () => {

    return(
        <View>
            <AuthHeader title='Registre-se' subtitle='Crie a sua conta' href="/"></AuthHeader>
            <Link href="/tabs/CriarTurma">
                <Text>Entre</Text>
            </Link>
        </View>
    );
}

export default Registro;