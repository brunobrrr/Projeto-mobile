import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';

const MainHeader = () => {
    const title = 'Tela Principal';
    const appName = 'MobileApp';
    return(
        <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.appInfo}>
            <Image source={require('../../assets/images/icon-branco.png')} style={styles.icon}></Image>
            <Text style={styles.appNameText}>{appName}</Text>
        </View>
    </View>
    )
}

export default MainHeader;