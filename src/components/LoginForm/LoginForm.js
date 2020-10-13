import React, { useState } from 'react'
import { login } from '../../services/authService'
import './loginform.css'
import { Formik, Form, Field } from 'formik'

const Login = props => {

  const handleLogin = async (e) => {
    // e.preventDefault()
    const { username, password } = e
    console.log(`Logging in... ${username}:${password}`)
    if (username != null && password != null) {
      // await login(username, password)
      // setUsername('')
      // setPassword('')
    }
  }

  // const handleInput = (e) => {
  //   const value = e.target.value
  //   console.log(value)
  //   switch (e.target.name) {
  //     case 'login': {
  //       setUsername(value)
  //       break
  //     }
  //     case 'password': {
  //       setPassword(value)
  //       break
  //     }
  //     default: {
  //       console.log(`Login form wrong input: ${e.target.name}`)
  //     }
  //   }
  // }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={handleLogin}
    >
      <Form>
        <Field name='username' />
        <Field name='password' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default Login