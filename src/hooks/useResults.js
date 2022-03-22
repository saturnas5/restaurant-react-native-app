import {useState, useEffect} from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        searchApi('spa');
    }, []);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setError('');
        } catch (error) {
            setError('Somthing went wrong');
        }

    }

    return [searchApi, results, error];
}
