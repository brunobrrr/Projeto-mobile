import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, LinkProps } from 'expo-router';

interface HeaderProps {
    title: string;
    subtitle: string;
    appName?: string;
    href: LinkProps['href'];
}

const AuthHeader: React.FC<HeaderProps> = ({
    title,
    subtitle,
    appName = 'MobileApp',
    href
}) => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.appNav}>
                <Link href={href} asChild style={styles.backButton}>
                    <Icon name="chevron-back" size={24} color="white" />
                </Link>
                <View style={styles.appLogo}>
                    <Image source={require('../../assets/images/icon-branco.png')} style={styles.icon}></Image>
                    <Text style={styles.appLogoName}>{appName}</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default AuthHeader;