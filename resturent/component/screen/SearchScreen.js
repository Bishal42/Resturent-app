
import {View,Text,StyleSheet,Button} from 'react-native'
import SearchBar from '../SearchBar';


const SearchScreen = () => {
    return(
    <View>
        <SearchBar />
       <Text style= {styles.text}>This is search screen page</Text>
       <Button title='hello'/>

    </View>
    )
  
}
const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default SearchScreen;