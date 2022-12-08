import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import SearchBar from '../SearchBar';
import yelp from '../../src/api/yelp';


const SearchScreen = () => {
    const [term,setTerm]= useState('');
    const [result,setResult] = useState([]);
    const [errorMessage, setErrorMessage]= useState ('');

    const searchApi = async ()=>{
        try{
        const response = await yelp.get('/search',{
            params: {
                limit:50,
                term : term,
                location: 'san joes'
            }
        });
        setResult(response.data.businesses);
    }
    catch (err) {
        setErrorMessage('something went wrong')
    }
    };
    
    return(
    <View>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit ={searchApi}
        />
        <Text style={{color:'red'}}>{errorMessage}</Text>
        <Text>we Found {result.length} results</Text>
       

    </View>
    )
  
}
const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default SearchScreen;