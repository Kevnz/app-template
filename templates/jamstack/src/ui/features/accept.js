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
import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: 'https://forge.kevnz.xyz/.netlify/identity',
  audience: '',
  setCookie: false,
})
export default () => (
  <Section>
    <Container>
      <br />
      <Form
        name="signup"
        className="form"
        onSubmit={({ token, password }) => {
          auth
            .acceptInvite(token, password, true)
            .then(response => console.log('Confirmation email sent', response))
            .then(() => {
              console.log('navigate')
              navigate('/')
            })
            .catch(error => console.error("It's an error", error))
        }}
      >
        <TextInput
          name="token"
          label="Token"
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
            <Button isPrimary>Accept</Button>
            <Link className="button" to="/">
              Cancel
            </Link>
          </Control>
        </Field>
      </Form>
    </Container>
  </Section>
)
