import React from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const SearchBar = ()=>{
  return (
    <View style={styles.background}>
     <Ionicons name="md-search" size={32} color="green"  style={styles.icon}/>
        <TextInput  placeholder="Enter a product Name" style= {styles.text}>

        </TextInput>
    </View>
  )
}
const styles= StyleSheet.create({
    background:{ 
        backgroundColor: "#CECFC4",
        marginHorizontal:10,
        height:50,
        borderRadius:5,
        flexDirection:'row'
    },
    icon:{
        marginVertical:5,
        padding:5,
    },
    text:{
    
        fontWeight:'bold',
    }
})

export default SearchBar