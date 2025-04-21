import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
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
    appInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        gap: 5
    },
    appNameText: {
        color: 'white',
        fontSize: 28,
    },
    icon: {
        width: 30,
        height: 30,
    },
    backButton: {
        padding: 10,
        backgroundColor: '#FFFFFF70',
        borderRadius: 30
    },
    appLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    appLogoName: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    }
})
