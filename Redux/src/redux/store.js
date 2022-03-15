import {createStore} from "redux"
import countReducer from "./action/reducer/countReducer"

export const store=createStore(countReducer)