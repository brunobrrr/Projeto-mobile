import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Link, Stack } from 'expo-router';
import MainHeader from '../components/Header/MainHeader'
import LinkButton from '../components/ui/LinkButton';

export default function Home() {
	return (
		<View style={styles.mainContainer}>
			<MainHeader></MainHeader>
			<Text style={styles.subtitle}>Selecione como você deseja entrar.</Text>
			<Link href='/' style={styles.link}>
				<LinkButton title="Entrar em turma" />
			</Link>
			<Link href='/tabs/CriarTurma' style={styles.link}>
				<LinkButton title="Criar turma" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		gap: 20,
		height: '100%',
		backgroundColor: '#F2F2F2',

	},
	subtitle: {
		color: '#001214',
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 10
	},
	link: {
		alignSelf: 'center',
		width: '80%',
	}
})
