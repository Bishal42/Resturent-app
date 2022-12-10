import React from 'react'
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'
import ListScreen from './screen/ListScreen'

const ResultList = ({title,results,navigation}) => {
  return (
    <View >
         <Text style={styles.title}>{title}</Text>
        <FlatList
        style={styles.container}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return (
                <TouchableOpacity
                 onPress={()=>navigation.navigate('ResultDetail')}>
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
    container:{
        borderWidth:1,
        borderColor:'#F1C8D4'
    }
});

export default withNavigation(ResultList) ;