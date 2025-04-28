import { styles } from './styles';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Link, LinkProps } from 'expo-router';

interface ButtonProps {
    title: string;
}

const LinkButton: React.FC<ButtonProps> = ({
    title
}) => {
    return(
    <View style={styles.container}>
        <Text style={styles.buttonText}>{title}</Text>
    </View>
    )
}

export default LinkButton;