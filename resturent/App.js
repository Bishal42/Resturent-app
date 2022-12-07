import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./component/screen/SearchScreen";


const navigator = createStackNavigator (
  {
    MySearch: SearchScreen
  }, {
  initialRouteName :'MySearch',
  defaultNavigationOptions: {
    title :'Business Search'
  }
})
export default createAppContainer(navigator)