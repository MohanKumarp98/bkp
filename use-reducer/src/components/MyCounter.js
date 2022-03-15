import React, { useReducer } from 'react';

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    const stateCopy = { ...state }

    /// u can write in the if else condition also but it takes longer time to check the condition

    switch (action.type) {
        case "increment":
            stateCopy.count=stateCopy.count + action.payload
            return stateCopy
        case "decrement":
            stateCopy.count=stateCopy.count -action.payload
            return stateCopy
        case "reset":
            return initialState
        default: return state
    }
}


function MyCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);


    return <div>
        <p>count-{state.count}</p>
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


    </div>;
}

export default MyCounter;
