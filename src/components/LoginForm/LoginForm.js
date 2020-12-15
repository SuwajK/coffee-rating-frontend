import React from 'react'
import userActions from '../../redux/actions/userActions'
import './loginForm.css'
import {Formik, Form, Field} from 'formik'
import {connect} from 'react-redux'
import {loginInApi} from "../../redux/operations/userOperations";


const LoginForm = ({login, logout, isLoggedIn}) => {

  const handleLogin = async ({username, password}) => {
    if (username != null && password != null) {
      login({username, password})
    }
  }

  return (
    <>
      {
        isLoggedIn
          ?
          <button onClick={logout}>Logout</button>
          :
          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={handleLogin}
          >
            <Form>
              <Field name='username'/>
              <Field type='password' name='password'/>
              <button type='submit'>Login</button>
            </Form>
          </Formik>
      }
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(loginInApi(credentials)),
  logout: () => dispatch(userActions.logout())
})

const mapStatetoProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStatetoProps, mapDispatchToProps)(LoginForm)