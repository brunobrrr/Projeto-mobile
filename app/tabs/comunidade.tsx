import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Link, Stack } from 'expo-router';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/ui/AddButton';
import Logo from '@/components/ui/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Turmas from '@/components/Turmas';

const comunidade = () => {
    return(
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.navContainer}>
                <Logo 
                    iconSource={require('../../assets/images/icon-laranja.png')} 
                    textStyle={{color: '#001214',fontSize: 16, fontWeight: '500'}}>
                </Logo>
                <Link href={'/'} asChild>
                    <Icon name="settings-outline" size={24} color="#001214" />
                </Link>
            </View>
            <SearchBar />
            <Text style={styles.title}>Comunidade</Text>
            <AddButton href='/' />
            <Turmas
                title='Desenvolvimento Web'
                alerts={3}
                groupQuantity={10}>
            </Turmas>
            <Turmas
                title='Fundamentos de Redes de Computadores'
                alerts={5}
                groupQuantity={7}>
            </Turmas>
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


export default comunidade;