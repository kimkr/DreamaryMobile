import { createAppContainer, createStackNavigator } from 'react-navigation'
import HaircutNote from 'App/Containers/HaircutNote'

const StackNavigator = createStackNavigator(
  {
    MainScreen: HaircutNote,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
