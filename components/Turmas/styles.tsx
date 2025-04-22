import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        gap: 15,
        borderRadius: 5,
        width: '100%'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    info: {
        flex: 1,
        gap: 10
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoDisciplina: {
        fontSize: 16,
        color: '#001214',
    },
    infoNotificações: {
        fontWeight: 'bold', 
        color: '#F2994B'
    },
    infoGrupos: {
        fontWeight: '500',
        color: '#001214',
        fontSize: 16
    }
})