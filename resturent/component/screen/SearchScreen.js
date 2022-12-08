import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import SearchBar from '../SearchBar';
import yelp from '../../src/api/yelp';


const SearchScreen = () => {
    const [term,setTerm]= useState(''); //this state handles the search iteams
    const [result,setResult] = useState([]); // thsi state handles the data from api
    const [errorMessage, setErrorMessage]= useState (''); // this state handles the error message

    //using asynchronous function to handle the api request
    const searchApi = async (searchTerm)=>{
        
        try{
        const response = await yelp.get('/search',{
            params: {
                limit:50,
                term : searchTerm,
                location: 'san joes'
            }
        });
        setResult(response.data.businesses);// update the business array in result state
    }
    catch (err) {
        setErrorMessage('something went wrong') // it throw a error message when something went wrong in yelp component
    }
    };

    //use useEffect for search at the first time whem app load 
    useEffect(()=>{
        searchApi('noodles');
    },[])
    
    return(
    <View>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit ={()=>{
            searchApi(term)
        }}
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