import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
import AuthHeader from '../../components/Header/AuthHeader';
import LinkButton from '@/components/ui/LinkButton';

export default function CriarTurma() {
    const router = useRouter();
    const entrarNaConta = () => {
        router.push('/tabs/comunidade');
    }
    return(
        <View>
            <AuthHeader title='Entre na sua conta' subtitle='' href="/"></AuthHeader>
            <Link href='/tabs/Comunidade' style={styles.link}>
                <LinkButton title='Entrar' />
            </Link>
            <Link href="/tabs/Registro">
                <Text>Cadastre-se</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
	link: {
		alignSelf: 'center',
		width: '80%',
	}
})