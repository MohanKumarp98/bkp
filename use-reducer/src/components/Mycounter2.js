import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    // const stateCopy = { ...state }

    /// u can write in the if else condition also but it takes longer time to check the condition

    switch (action.type) {
        case "increment":
            // stateCopy.count=stateCopy.count + action.payload
            // return stateCopy
            return {...state, firstCounter:state.firstCounter +action.payload}
        case "decrement":
            // stateCopy.count=stateCopy.count -action.payload
            // return stateCopy
            return {...state,firstCounter:state.firstCounter-action.payload}
        case "reset":
            return {...state,firstCounter:0}
            case "increment1":
                // stateCopy.count=stateCopy.count + action.payload
                // return stateCopy
                return {...state,secondCounter:state.secondCounter+action.payload}
            case "decrement1":
                // stateCopy.count=stateCopy.count -action.payload
                // return stateCopy
                return {...state,secondCounter:state.secondCounter-action.payload}
            case "reset1":
                return {...state,secondCounter:0}

        default: return state
    }
}


function MyCounter2() {
    const [state, dispatch] = useReducer(reducer, initialState);


    return <div>
        <h2>first counter in use reducer</h2>
        <p>count-{state.firstCounter}</p>
        <button onClick={() => {
            dispatch({
                type: "increment",
                payload: 100
            })
        }}>increment</button>

        <button onClick={() => {
            dispatch({
                type: "decrement",
                payload: 10
            })
        }}>decrement</button>

        <button onClick={() => {
            dispatch({
                type: "reset",
                payload: 0
            })
        }}>reset</button>
        <hr></hr>
        <h2>second counter in use reducer</h2>
        <p>count-{state.secondCounter}</p>
        <button onClick={() => {
            dispatch({
                type: "increment1",
                payload: 1000
            })
        }}>increment</button>

        <button onClick={() => {
            dispatch({
                type: "decrement1",
                payload: 50
            })
        }}>decrement</button>

        <button onClick={() => {
            dispatch({
                type: "reset1",
                payload: 0
            })
        }}>reset</button>


    </div>;
}

export default MyCounter2;
