import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingBottom: 50,
        paddingHorizontal: '5%',
        alignItems: 'center',
        backgroundColor: '#19486A',
        position: 'relative'
    },
    appNav: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        top: 50,
        justifyContent: 'space-between'
    },
    textContainer: {
        width: '100%',
        marginTop: 10,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'white',
    },
    backButton: {
        padding: 10,
        backgroundColor: '#FFFFFF70',
        borderRadius: 30
    },
})
