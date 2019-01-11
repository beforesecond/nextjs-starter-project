import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as todoAction from '../actions/todo'
import { api } from '../api'

export function* fetchData(action) {
  try {
    const { payload } = action
    const res = yield api(
      `https://www.reddit.com/r/TellMeAFact/top/.json`,
      `get`
    )
    yield put(todoAction.getTodoSuccess(res))
  } catch (error) {
    yield put(todoAction.getTodoFailed(error))
  }
}

function* watchFetchData() {
  yield takeEvery(todoAction.GET_TODO, fetchData)
}

function* todo() {
  yield all([takeLatest(todoAction.GET_TODO, fetchData)])
}

export default todo
