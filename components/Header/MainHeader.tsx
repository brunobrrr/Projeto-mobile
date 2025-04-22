import React from 'react';
import {View, Text } from 'react-native';
import { styles } from './styles';
import Logo from '../ui/Logo';

const MainHeader = () => {
    const title = 'Tela Principal';

    return(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>        
        <Logo 
            iconSource={require('../../assets/images/icon-branco.png')} 
            textStyle={{color: '#FFFFFF', fontSize: 28}}>
        </Logo>
    </View>
    )
}

export default MainHeader;