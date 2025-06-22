import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/ui/AddButton';
import Logo from '../../components/ui/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Turmas from '../../components/Turmas';
import { formatarNomeParaUrl } from "../../utils/formatarNomeParaUrl";

export default function Comunidade() {
    const turmas = [
		{ nome: "Desenvolvimento Web", alert: 3, groups: 6 },
		{ nome: "Fundamentos de Redes de Computadores", alert: 5, groups: 10},
	];

    return(
        <View style={styles.container}>
            <View style={styles.navContainer}>                <Logo 
                    iconSource={require('../../assets/images/icon-laranja.png')} 
                    textStyle={{color: '#001214',fontSize: 16, fontWeight: '500'}}
                />
                <Link href={'/'} asChild>
                    <Icon name="settings-outline" size={24} color="#001214" />
                </Link>
            </View>
            <SearchBar />
            <Text style={styles.title}>Comunidade</Text>
            <AddButton href='/tabs/turma/criarTurma' />
			{turmas.map((turma) => (
				<Link key={turma.nome} href={{pathname: '/tabs/turma/[nomeDaTurma]', params: { nomeDaTurma: formatarNomeParaUrl(turma.nome) }}}>
					<Turmas
						title={turma.nome}
						alerts={turma.alert}
						groupQuantity={turma.groups}
					></Turmas>
				</Link>
			))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '5%',
        alignSelf: 'center',
        backgroundColor: '#F2F2F2',
        height: '100%',
        gap: 10
    },
    navContainer: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#001214',
        fontWeight: 'bold',
        marginVertical: 20 
    }
})