import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
    const {title, results, navigation} = props;

    if(results.length === 0) {
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Result', {id: item.id})}>
                            <ResultsDetail navigation={navigation} result={item} />
                        </TouchableOpacity>);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;