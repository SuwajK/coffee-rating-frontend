import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store