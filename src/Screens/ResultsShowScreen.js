import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen = ({ route }) => {
    const [result, setResult] = useState({});
    const {id} = route.params;

    useEffect(() => {
        getResult(id);
    }, []);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    if(!result) {
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{result.name}</Text>
            <Text>Restaurant Rating: {result.rating}</Text>
            <FlatList
                keyExtractor={item => item}
                data={result.photos}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    image: {
        width: 300,
        height: 150,
        marginBottom: 10,
    },
    container: {
        alignItems: 'center'
    }
});

export default ResultShowScreen;