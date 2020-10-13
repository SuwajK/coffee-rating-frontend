import Config from '../Config'

const login = async ({ login, password }) => {
  if (login && password) {
    const response = fetch(
      `${Config.authApiUrl}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ login, password }),
    })
      .then(resp => {
        if (resp.ok) {
          console.log('Api > login() :', resp)
          return resp
        }
        throw Error('Error logging in')
      })
      .catch(err => console.error(err))
    return response
  }
  return null
}


export {
  login,
}