import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TurmasProps {
    title: string;
    alerts?: number;
    groupQuantity: number;
}

const Turmas: React.FC<TurmasProps> = ({
    title,
    alerts,
    groupQuantity
}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require('../../assets/images/img-placeholder.png')} style={styles.image}></Image>
            <View style={styles.info}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoDisciplina} numberOfLines={1} ellipsizeMode="tail">{ title }</Text>
                    <Text style={styles.infoNotificações}>{ alerts }</Text>
                </View>
                <Text style={styles.infoGrupos}>{ groupQuantity } Grupos</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Turmas;