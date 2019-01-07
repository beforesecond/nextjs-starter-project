export const GET_TODO = '[TODO] Get todo'
export const GET_TODO_SUCCESS = '[TODO] Get todo'
export const GET_TODO_FAILED = '[TODO] Get todo'

export const getTodo = payload => {
  return { type: GET_TODO, payload }
}

export const getTodoSuccess = payload => {
  return { type: GET_TODO_SUCCESS, payload }
}

export const getTodoFailed = payload => {
  return { type: GET_TODO_FAILED, payload }
}
