import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoAction from '../actions/todo'

function useInput(initailState = '') {
  const [value, setValue] = useState(initailState)

  function handleInput(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleInput
  }
}

function useFetch(props) {
  const test = useEffect(fetchData, [])

  function fetchData() {
    props.fetchPosts({ value: 'test' })
  }
  return { onFetch: fetchData }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(todoAction.getTodo, dispatch)
})

function Login(props) {
  const { value: userName, onChange: onChangeUserName } = useInput
  const { value: password, onChange: onChangePassword } = useInput
  const { onFetch: onLogin } = useFetch(props)

  return (
    <div>
      <span>Username:</span>
      <input value={userName} onChange={onChangeUserName} />
      <span>Password:</span>
      <input value={password} onChange={onChangePassword} />
      <button onClick={onLogin}>Submit</button>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
