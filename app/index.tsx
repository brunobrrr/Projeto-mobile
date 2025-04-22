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
			<View style={styles.mainContainer}>
				<MainHeader></MainHeader>
				<Text style={styles.subtitle}>Selecione como você deseja entrar.</Text>
				<LinkButton title="Entrar em turma" href="/" />
				<LinkButton title="Criar turma" href="/tabs/criarTurma" />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		gap: 20,
		height: '100%',
		backgroundColor: '#F2F2F2'
	},
	subtitle: {
		color: '#001214',
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10
	}
})
