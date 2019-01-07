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

const GetTodo = payload => {
  store.dispatch(todoAction.getTodo(payload))
}

const Store = {
  GetTodo
}

export default Store
