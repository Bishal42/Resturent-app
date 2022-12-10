import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Reasultdetail from "./component/screen/Resultdetail";
import SearchScreen from "./component/screen/SearchScreen";



const navigator = createStackNavigator (
  {
    MySearch: SearchScreen,
    ResultDetail: Reasultdetail,
    
  }, {
  initialRouteName :'MySearch',
  defaultNavigationOptions: {
    title :'Business Search'
  }
})
export default createAppContainer(navigator)