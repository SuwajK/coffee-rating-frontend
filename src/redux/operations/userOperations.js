import userActions from "../actions/userActions";
import {getTokenFromApi} from '../../api/Auth'


export const loginInApi = (credentials) =>
  async (dispatch) => {
    const token = await getTokenFromApi(credentials)
    dispatch(userActions.login(token))
  }