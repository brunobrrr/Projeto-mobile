import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 125,
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
        marginTop: 40,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },    subtitle: {
        fontSize: 16,
        color: 'white',
    },
    backButton: {
        padding: 10,
        backgroundColor: '#FFFFFF70',
        borderRadius: 30,
         marginLeft: 5,},
})