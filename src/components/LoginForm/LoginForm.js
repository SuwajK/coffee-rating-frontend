import React from 'react'
import userActions from '../../redux/actions/userActions'
import './loginForm.css'
import {Formik, Form, Field} from 'formik'
import {connect} from 'react-redux'
import {loginInApi} from "../../redux/operations/userOperations";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const LoginForm = ({login, logout, isLoggedIn}) => {

  const handleLogin = async ({username, password}) => {
    if (username != null && password != null) {
      login({username, password})
    }
  }

  return (
    <Grid container justify='center'>
      {
        isLoggedIn
          ?
          <Button onClick={logout} className='logoutButton'>Logout</Button>
          :
          <>
            <Formik
              initialValues={{username: '', password: ''}}
              onSubmit={handleLogin}
            >
              <Form
                className='loginForm'
              >
                <Typography variant='h2' component='h1'>Login</Typography>
                <Field
                  component={TextField}
                  name='username'
                  fullWidth
                />
                <Field
                  component={TextField}
                  type='password'
                  name='password'
                  fullWidth
                />
                <Button type='submit'>Login</Button>
              </Form>
            </Formik>
          </>
      }
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(loginInApi(credentials)),
  logout: () => dispatch(userActions.logout())
})

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)