import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { createLogger } from 'redux-logger'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const Store = () => createStore(reducers, applyMiddleware(...middleware))

export default Store
