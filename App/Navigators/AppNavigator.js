import { createAppContainer, createStackNavigator } from 'react-navigation'
import ExampleScreen from 'App/Containers/Example/ExampleScreen'

const StackNavigator = createStackNavigator(
  {
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
