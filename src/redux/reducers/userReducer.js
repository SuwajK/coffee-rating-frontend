import types from "../types";

const INITIAL_STATE = {
  isLoggedIn: false,
  token: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_LOGIN: {
      return {
        ...state,
        token: action.token,
        isLoggedIn: !!action.token
      }
    }
    case types.USER_LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default userReducer