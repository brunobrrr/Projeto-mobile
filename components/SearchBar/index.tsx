import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <Icon name='search-outline' size={20} color="gray" />
            <TextInput placeholder="Pesquisar..." style={styles.input} />
        </View>
    )
}

export default SearchBar;