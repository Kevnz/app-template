import React from 'react'
import { Form, TextArea, TextBox } from 'react-form-elements'
import { usePost } from '@brightleaf/react-hooks'
const ContactForm = () => {
  const { data, error, loading, postData } = usePost()
  return (
    <main>
      <section>
        <h2>Contact</h2>
        <div>
          <Form
            onSubmit={values => {
              console.log('Name', values.userName)
              console.log('Email', values.userEmail)
              console.log('Message', values.message)
              postData(values)
            }}
          >
            <TextBox
              name="userName"
              label="Your Name"
              initialValue=""
            />
            <TextBox
              type="email"
              name="userEmail"
              label="Your Email"
              initialValue=""
            />
            <TextArea label="Your Message" name="message" />

            <button>Send</button>
          </Form>
        </div>
      </section>
    </main>
  )
}

export default ContactForm
