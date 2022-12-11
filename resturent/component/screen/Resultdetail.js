import React ,{useState,useEffect }from "react";
import {View,Text,FlatList,StyleSheet,Image} from 'react-native';
import yelp from "../../src/api/yelp";
const Reasultdetail =({navigation})=>{
    const id = navigation.getParam('id');
    

    const [result,setResult] = useState(null);

    const getResult = async (id)=>{
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[ ]);
    if (result == null){
        return null;
    }
    
    return( 
        <View>
            <Text style={styles.name}>
                {result.name}
            </Text>
            <FlatList
            data={result.photos} 
            keyExtractor={(photo) => photo}
            renderItem = {( {item }) =>{
                return <Image source={{uri : item}}
                style={styles.image} />
            } }
            >

            </FlatList>
        </View>
    )

}

const styles = StyleSheet.create({
     image:{
        height:250,
        width:300,
        margin:15
     },
     name:{
        fontWeight:'bold',
        marginLeft:20,
     }
});

export default Reasultdetail;