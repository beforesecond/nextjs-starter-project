import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { createLogger } from 'redux-logger'
import * as todoAction from '../actions/todo'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware))

export default store
