import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as example } from './Example'

export default () => {
  const rootReducer = combineReducers({
    example,
  })
  return configureStore(rootReducer, rootSaga)
}
