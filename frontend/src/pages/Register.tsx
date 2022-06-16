import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e:any) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <Row>
          <Col className='center' sm={3}>
            {/* Register text */}
            <section className='heading'>
              <h1>Register</h1>
              <p>Please create an account</p>
            </section>
          </Col>
          <Col className='center mt-3'>
            <section className="register-form">
              <Form onSubmit={onSubmit}>
                {/* name */}
                <Form.Group className='mb-3' controlId='RegisterFormName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter name' name='name' value={name} onChange={onChange} />
                </Form.Group>

                {/* email */}
                <Form.Group className='mb-3' controlId='RegisterFormEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' name='email' value={email} onChange={onChange} />
                </Form.Group>

                {/* password */}
                <Form.Group className='mb-3' controlId='RegisterFormPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' name='password' value={password} onChange={onChange} />
                </Form.Group>

                {/* password2 */}
                <Form.Group className='mb-3' controlId='RegisterFormPassword2'>
                  <Form.Label>Please re-enter your password</Form.Label>
                  <Form.Control type='password' name='password2' value={password2} onChange={onChange} />
                </Form.Group>

                {/* Submit Button */}
                <Button type='submit' variant='primary'>Submit</Button>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register