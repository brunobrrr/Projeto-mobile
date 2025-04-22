import React from 'react';
import {View, Text, Image, ImageSourcePropType, StyleProp, TextStyle} from 'react-native';
import { styles } from './styles';

interface LogoProps {
    appName?: string;
    iconSource?: ImageSourcePropType;
    textStyle?: StyleProp<TextStyle>;
}

const Logo: React.FC<LogoProps> = ({
    appName = 'MobileApp',
    textStyle,
    iconSource,
}) => {
    return(
        <View style={[styles.container]}>
            <Image source={iconSource} style={ styles.logoImage } />
            <Text style={[ textStyle ]}>{ appName }</Text>
        </View>
    )
}

export default Logo;