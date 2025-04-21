import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Stack } from 'expo-router';
import MainHeader from '../components/Header/MainHeader'
import LinkButton from '../components/ui/LinkButton';

export default function Home() {
	return (
		<>
			<StatusBar translucent={true} backgroundColor="transparent" />
			<Stack.Screen options={{ headerShown: false }} />
			<View style={styles.container}>
				<MainHeader></MainHeader>
				<Text style={styles.subtitle}>Selecione como você deseja entrar.</Text>
				<LinkButton title="Entrar em turma" href="/" />
				<LinkButton title="Criar turma" href="/tabs/criarTurma" />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
		height: '100%',
		backgroundColor: '#C2C2C2'
	},
	subtitle: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10
	}
})
