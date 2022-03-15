import {combineReducers, createStore} from "redux"
import countReducer from "./action/reducer/countReducer"
import authReducers from "./action/reducer/authReducers"

const allReducers=combineReducers({countReducer,authReducers })

export const store=createStore(allReducers)