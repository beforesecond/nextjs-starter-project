export const GET_TODO = '[TODO] Get todo'
export const GET_TODO_SUCCESS = '[TODO] Get todo success'
export const GET_TODO_FAILED = '[TODO] Get todo failed'

export const getTodo = payload => {
  return { type: GET_TODO, payload }
}

export const getTodoSuccess = payload => {
  return { type: GET_TODO_SUCCESS, payload }
}

export const getTodoFailed = payload => {
  return { type: GET_TODO_FAILED, payload }
}

export const fetchPosts = payload => dispatch => {
  dispatch(getTodo(payload))
  return fetch(`https://www.reddit.com/r/TellMeAFact/top/.json`)
    .then(response => response.json())
    .then(json => dispatch(getTodoSuccess(json)))
    .catch(error => {
      if (error) dispatch(getTodoFailed())
    })
}
