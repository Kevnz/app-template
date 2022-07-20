import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  useToggle,
  Icon,
  Modal,
  Field,
  Control,
  Button,
  ModalCard,
  ModalCardBody,
  ModalCardHead,
  ModalCardFoot,
} from '@brightleaf/elements'

import { Portal } from '@brightleaf/elements/lib/utils'
import { navigate } from '@gatsbyjs/reach-router'
import { Form, TextInput, PasswordInput } from 'react-form-elements'
import { useIdentityContext } from 'react-netlify-identity'

export const LoginLink = ({ children, className, isStatic }) => {
  const formRef = useRef(null)
  const [modalShown, setModalShown] = useToggle(false)
  const { loginUser, isLoggedIn, logoutUser } = useIdentityContext()
 
  if (isLoggedIn) {
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          logoutUser()
        }}
      >
        <Icon fas icon="sign-out-alt" />
        Logout
      </a>
    )
  }
  return (
    <>
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          setModalShown(false)
        }}
      >
        <Icon fas icon="sign-in-alt" />
        Login
      </a>
      <Portal id="login-form-modal">
        <Modal
          ModalType={ModalCard}
          includeTrigger={false}
          triggerText="Login"
          triggerFn={setModalShown}
          isActive={modalShown}
        >
          <ModalCardHead title="Login"></ModalCardHead>
          <ModalCardBody>
            <Form
              ref={formRef}
              name="login"
              className="form"
              onSubmit={({ email, password }) => {
                console.log('on sub')
                loginUser(email, password, true)
                  .then(({ token, role, email }) => {
                    console.info('result', { token, role, email })

                    navigate('/')
                  })
                  .catch(error => console.error("It's an error", error))
              }}
            >
              <TextInput
                name="email"
                label="Email"
                className="field control"
                labelClassName="label"
                inputClassName="input"
              />
              <PasswordInput
                name="password"
                label="password"
                className="field control"
                labelClassName="label"
                inputClassName="input"
              />
            </Form>
          </ModalCardBody>
          <ModalCardFoot>
            <Field>
              <Control>
                <Button
                  isPrimary
                  onClick={e => {
                    console.log('click', modalShown)
                    e.preventDefault()
                    formRef.current.submit()
                    setModalShown(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  as="a"
                  onClick={e => {
                    console.log('click', formRef)
                    e.preventDefault()
                    formRef.current.reset()
                    setModalShown(false)
                  }}
                >
                  Cancel
                </Button>
              </Control>
            </Field>
          </ModalCardFoot>
        </Modal>
      </Portal>
    </>
  )
}

LoginLink.propTypes = {
  className: PropTypes.string,
  isStatic: PropTypes.bool,
}

LoginLink.defaultProps = {
  isStatic: true,
}

export default LoginLink
