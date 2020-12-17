import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from '../Utils/localStorage'

const localStorageState = loadFromLocalStorage('state')
// const saveStateToLocalStorage = state => saveToLocalStorage('state', state)

const store = createStore(userReducer, localStorageState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe( () => {
  saveToLocalStorage('state', store.getState())
  }
)

export default store