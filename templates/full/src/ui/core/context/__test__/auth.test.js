import React, { useContext } from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { AuthContext, AuthProvider } from '../auth'


const Thinger = () => {
  const { state, dispatch } = useContext(AuthContext)
  return (
    <div>
      <span>
        User: {state.user.firstName} {state.user.lastName}
      </span>
      {state.isLoggedIn ? (
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            dispatch({
              type: 'logout',
            })
          }}
        >
          Logout
        </a>
      ) : (
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            dispatch({
              type: 'login',
              payload: {
                user: {
                  firstName: 'Test',
                  lastName: 'User',
                  username: 'testuser',
                },
              },
            })
          }}
        >
          Login
        </a>
      )}
    </div>
  )
}
function App() {
  return (
    <AuthProvider>
      <Thinger />
    </AuthProvider>
  )
}

afterEach(cleanup)

describe('The Auth Context', () => {
  it('should render initial state data', () => {
    const { getByText } = render(<App />)
    expect(getByText(/^User:/)).toHaveTextContent('User: Anonymous User')
  })
  it('should render updated data on login', async done => {
    const { getByText } = render(<App />)
    expect(getByText(/^User:/)).toHaveTextContent('User: Anonymous User')
    fireEvent.click(getByText(/login/i))
    const loggedOut = await waitForElement(() => getByText(/^User:/))
    expect(loggedOut).toHaveTextContent('User: Test User')
    return done()
  })

})
