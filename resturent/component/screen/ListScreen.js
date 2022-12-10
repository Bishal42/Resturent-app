import React from "react";
import {View,StyleSheet,Text,Image} from 'react-native'

const ListScreen =( { result }) =>{
    return (
        <View >
        <Image 
        style={styles.image}
            source={{ uri: result.image_url }}
        />
            <Text style= {styles.name}>{result.name}</Text>
            <View style={styles.review}>
                <Text> Rating:{result.rating} , </Text>
                <Text> Reviews:{result.review_count} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:200,
        margin:5,
        marginLeft:10,
    },

    name:{
        fontWeight:'bold',
        marginLeft:15,
        color:'#773B60',
    },
    review:{
        flexDirection: "row",
        paddingLeft:9,
        marginBottom:10,
        color:'#773B60',    
    }
})

export default ListScreen