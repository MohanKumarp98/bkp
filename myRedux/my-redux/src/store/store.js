import { createStore } from "redux";
import { finalReducer } from "../reducers/reducerCombine";

export let store=createStore(finalReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

