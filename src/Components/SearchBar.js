import React from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({value, onTermChange, onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons style={styles.iconeStyle} name="search" />
            <TextInput
                placeholder="Search..."
                style={styles.inputStyle}
                value={value}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        height: 50,
        marginTop: 15,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconeStyle: {
        fontSize: 40,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15,

    }
});