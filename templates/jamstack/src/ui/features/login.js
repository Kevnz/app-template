import React from 'react'
import {
  Section,
  Container,
  Field,
  Control,
  Button,
} from '@brightleaf/elements'
import { Form, TextInput, PasswordInput } from 'react-form-elements'
import { Link, navigate } from '@gatsbyjs/reach-router'
import { useIdentityContext } from 'react-netlify-identity'

export default () => {
  const { loginUser } = useIdentityContext()
  return (
    <Section>
      <Container>
        <br />
        <Form
          name="login"
          className="form"
          onSubmit={({ email, password }) => {
            loginUser(email, password, true)
              .then(({ token, role, email }) => {
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

          <Field>
            <Control>
              <Button isPrimary>Login</Button>
              <Link className="button" to="/">
                Cancel
              </Link>
            </Control>
          </Field>
        </Form>
      </Container>
    </Section>
  )
}
