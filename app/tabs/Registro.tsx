import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import AuthHeader from '../../components/Header/AuthHeader';

const Registro = () => {

    return(
        <View style={styles.container}>
            <AuthHeader title='Registre-se' subtitle='Crie a sua conta' href="/"></AuthHeader>
            <View style={styles.content}>
                <Text style={styles.message}>Funcionalidade de registro em desenvolvimento.</Text>
                <Link href="/tabs/turma/criarTurma" style={styles.link}>
                    <Text style={styles.linkText}>Criar Turma</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    link: {
        backgroundColor: '#19486A',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    linkText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Registro;