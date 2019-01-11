import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import todo from './todo'

export const initialState = fromJS({
  todo: todo
})

export const reducers = combineReducers({
  todo: todo
})
