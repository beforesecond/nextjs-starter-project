import { all, fork } from 'redux-saga/effects'
import todo from './todo'
function* rootEffect() {
  yield all([
    fork(todo)
    //fork(todo2),
    //fork(todo3)
  ])
}

export default rootEffect
