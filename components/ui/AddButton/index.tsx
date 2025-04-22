import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { Link, LinkProps } from 'expo-router';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtonProps {
    href: LinkProps['href'];
}

const AddButton: React.FC<ButtonProps> = ({
    href
}) => {
    return(
        <Link href={href} asChild>
            <TouchableOpacity style={styles.container}>
                <Icon name='add-outline' size={30} color='white'></Icon>
            </TouchableOpacity>
        </Link>
    )
}

export default AddButton;