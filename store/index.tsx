import { createStore, applyMiddleware } from 'redux'
import { reducers } from '../reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootEffect from '../effects'
import { initialState } from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const stateLogger = createLogger({
  stateTransformer: (state: any) => state
})

export const Store = (preloadState = initialState) => {
  const store: any = createStore(
    reducers,
    preloadState,
    applyMiddleware(sagaMiddleware, stateLogger)
  )

  store.sagaTask = sagaMiddleware.run(rootEffect)
  return store
}

export default Store
