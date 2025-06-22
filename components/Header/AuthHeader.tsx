import React from 'react';
import {View, Text } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, LinkProps } from 'expo-router';
import Logo from '../ui/Logo';

interface HeaderProps {
    title: string;
    subtitle: string;
    href: LinkProps['href'];
}

const AuthHeader: React.FC<HeaderProps> = ({
    title,
    subtitle,
    href
}) => {
    return(
        <View style={styles.container}>
            <View style={styles.appNav}>
                <Link href={href} asChild style={styles.backButton}>
                    <Icon name="chevron-back" size={24} color="white" />
                </Link>                <Logo 
                    iconSource={require('../../assets/images/icon-branco.png')} 
                    textStyle={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default AuthHeader;