import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";


export default function SearchScreen({navigation}) {
    const [term, settTerm] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => result.price === price);
    }

    return (
        <>
            <SearchBar
                value={term}
                onTermChange={(newTerm) => settTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {results.length > 0 && <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title='Big Spender'/>
            </ScrollView>}
        </>
    )
}

const styles = StyleSheet.create({});