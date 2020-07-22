import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import promiseMiddleware from 'redux-promise-middleware'

export default () => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))
  )
}
