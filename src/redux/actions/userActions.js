import types from "../types";

const login = (token) => ({
  type: types.USER_LOGIN, token
})

const logout = () => ({
  type: types.USER_LOGOUT
})

export default {
  login,
  logout
}
