import * as Action from '../actions/todo'

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  hasData: false
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_TODO:
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        hasData: false
      }
    case Action.GET_TODO_SUCCESS:
      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        hasData: true
      }
    case Action.GET_TODO_FAILED:
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        hasData: false
      }
    default:
      return state
  }
}

export default todo
