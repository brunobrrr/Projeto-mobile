import { styles } from './styles';
import React from 'react';
import {Text, Pressable, TouchableOpacity} from 'react-native';
import { Link, LinkProps } from 'expo-router';

interface ButtonProps {
    title: string;
    href: LinkProps['href'];
}

const LinkButton: React.FC<ButtonProps> = ({
    title,
    href
}) => {
    return(
        <Link href={href} asChild>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default LinkButton;