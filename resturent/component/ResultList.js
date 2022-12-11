import React from 'react'
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'
import ListScreen from './screen/ListScreen'

const ResultList = ({title,results,navigation}) => {
    
    //when there is no any result to show it will not display the item
    if (!results.length){
        return null;
    }

  return (
    <View >
         <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return (
                <TouchableOpacity
                style={styles.list}
                 onPress={()=>navigation.navigate('ResultDetail',{ id: item.id })}// passing the id when the user click on the prouct
                 >
                   <ListScreen result={item} />
                </TouchableOpacity>
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
        fontSize:18,
        marginLeft:15,
        color:'#843A87',
    },
    list:{
        borderWidth:2,
        borderColor:'#F1C8D4',
        marginLeft:5,
    }
});

export default withNavigation(ResultList) ;