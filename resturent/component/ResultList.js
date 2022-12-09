import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import ListScreen from './screen/ListScreen'

const ResultList = ({title,results}) => {
  return (
    <View>
         <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal= {true}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return (
                <ListScreen result={item} />
            )
        } }
        >

        </FlatList>
   </View>
  )
}
const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18
    }
});

export default ResultList