import React from 'react'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Store from '../store'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(Store, {
  serializeState: state => state,
  deserializeState: state => fromJS(state)
})(withReduxSaga({ async: true })(MyApp))
