import React, { useContext, useEffect } from 'react'
import { Form, TextBox, Password } from 'react-form-elements'
import { useQuery } from '@brightleaf/react-hooks'
import { Button } from '@brightleaf/elements'
import { navigate } from '@reach/router'
import { AuthContext } from '../core/context/auth'

const LOGIN_MUTATION = `
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        firstName
        lastName
        username
        email
      }
    }
  }
`

export const LoginPage = () => {
  const { error, loading, makeQuery, data, complete } = useQuery(
    '/graphql',
    LOGIN_MUTATION
  )
  const { state, dispatch } = useContext(AuthContext)

  if (state.isLoggedIn && complete) {
    navigate('/')
  }

  useEffect(() => {
    if (complete && data && data.login) {
      const { token, user } = data.login

      dispatch({
        type: 'login',
        payload: { token, user },
      })
    }
  }, [complete, data])

  return (
    <main>
      {error && <div>Error</div>}
      {loading && <div>Loading</div>}
      <Form
        name="loginForm"
        onSubmit={formData => {
          console.log('formdata', formData)
          makeQuery({ loginInput: formData })
        }}
      >
        <TextBox
          type="email"
          label="Email"
          name="email"
          className="field control"
          inputClassName="input"
          labelClassName="label"
        />
        <Password
          label="Password"
          name="password"
          className="field control"
          inputClassName="input"
          labelClassName="label"
        />
        <Button>Login</Button>
      </Form>
    </main>
  )
}

export default LoginPage
